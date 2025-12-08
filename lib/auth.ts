import bcrypt from 'bcryptjs'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { prisma } from './db'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key')
const ADMIN_TOKEN_NAME = 'admin-token'

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export async function createAdminToken(userId: string): Promise<string> {
  return new SignJWT({ userId, type: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(JWT_SECRET)
}

export async function verifyAdminToken(token: string): Promise<{ userId: string } | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    if (payload.type === 'admin' && typeof payload.userId === 'string') {
      return { userId: payload.userId }
    }
    return null
  } catch {
    return null
  }
}

export async function getAdminUser() {
  const cookieStore = cookies()
  const token = cookieStore.get(ADMIN_TOKEN_NAME)?.value

  if (!token) return null

  const payload = await verifyAdminToken(token)
  if (!payload) return null

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: { id: true, email: true, name: true, role: true }
  })

  return user?.role === 'SUPERADMIN' ? user : null
}

export async function setAdminToken(token: string) {
  const cookieStore = cookies()
  cookieStore.set(ADMIN_TOKEN_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/admin'
  })
}

export async function clearAdminToken() {
  const cookieStore = cookies()
  cookieStore.delete(ADMIN_TOKEN_NAME)
}

export async function requireAdmin() {
  const user = await getAdminUser()
  if (!user) {
    throw new Error('Unauthorized')
  }
  return user
}

export async function logAdminAction(
  action: string,
  resource: string,
  resourceId?: string,
  details?: any
) {
  const user = await getAdminUser()
  if (!user) return

  await prisma.adminLog.create({
    data: {
      action,
      resource,
      resourceId,
      userId: user.id,
      details: details ? JSON.stringify(details) : null
    }
  })
}
