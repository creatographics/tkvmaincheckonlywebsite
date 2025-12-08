import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function testLogin() {
  console.log('🔍 Testing login credentials...')
  
  const email = 'admin@tkvcreato.com'
  const password = 'admin123'
  
  // Find user
  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true, email: true, password: true, role: true, name: true }
  })
  
  if (!user) {
    console.error('❌ User not found!')
    return
  }
  
  console.log('✅ User found:')
  console.log('  ID:', user.id)
  console.log('  Email:', user.email)
  console.log('  Name:', user.name)
  console.log('  Role:', user.role)
  
  // Test password
  const isValidPassword = await bcrypt.compare(password, user.password)
  console.log('🔐 Password valid:', isValidPassword)
  
  // Check role
  const isAdmin = user.role === 'SUPERADMIN'
  console.log('👑 Is SUPERADMIN:', isAdmin)
  
  if (isValidPassword && isAdmin) {
    console.log('✅ Login should work!')
  } else {
    console.log('❌ Login will fail!')
  }
}

testLogin()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
