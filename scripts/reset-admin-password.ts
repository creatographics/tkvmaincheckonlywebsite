import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Resetting admin password...')

  const email = 'admin@tkvcreato.com'
  const newPassword = 'admin123'

  // Find the admin user
  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user) {
    console.error('Admin user not found!')
    console.log('Creating new admin user...')
    
    const hashedPassword = await bcrypt.hash(newPassword, 12)
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: 'Super Admin',
        role: 'SUPERADMIN'
      }
    })
    
    console.log('✅ Admin user created successfully!')
    console.log('Email:', newUser.email)
    console.log('Password:', newPassword)
    return
  }

  // Hash new password
  const hashedPassword = await bcrypt.hash(newPassword, 12)

  // Update password
  await prisma.user.update({
    where: { email },
    data: { password: hashedPassword }
  })

  console.log('✅ Password reset successfully!')
  console.log('Email:', email)
  console.log('Password:', newPassword)
  console.log('Role:', user.role)
}

main()
  .catch((e) => {
    console.error('Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
