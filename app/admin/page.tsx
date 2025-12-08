import { redirect } from 'next/navigation'
import { getAdminUser } from '@/lib/auth'

export default async function AdminRootPage() {
  const user = await getAdminUser()
  
  if (!user) {
    redirect('/admin/login')
  } else {
    redirect('/admin/dashboard')
  }
}
