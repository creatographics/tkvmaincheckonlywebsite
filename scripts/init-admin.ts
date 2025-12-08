import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Initializing admin user...')

  const email = process.env.ADMIN_EMAIL || 'admin@tkvcreato.com'
  const password = process.env.ADMIN_PASSWORD || 'admin123'
  const name = process.env.ADMIN_NAME || 'Super Admin'

  // Check if admin user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email }
  })

  if (existingUser) {
    console.log('Admin user already exists:', email)
    return
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12)

  // Create admin user
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role: 'SUPERADMIN'
    }
  })

  console.log('Admin user created successfully:')
  console.log('Email:', user.email)
  console.log('Password:', password)
  console.log('Please change the password after first login!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
