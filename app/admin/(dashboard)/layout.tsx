import { redirect } from 'next/navigation'
import { getAdminUser } from '@/lib/auth'
import { AdminTopNav } from '@/components/admin/top-nav'
import { LoginTracker } from '@/components/admin/login-tracker'
import { CornerBorders } from '@/components/ui/corner-borders'

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getAdminUser()

  if (!user) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 dark:bg-[radial-gradient(45%_35%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] dark:opacity-10"></div>
      
      <AdminTopNav user={user} />
      
      {/* Main Content */}
      <main className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 border border-border rounded-3xl py-8 md:py-12 bg-white dark:bg-card/50 overflow-hidden">
            <CornerBorders />
            
            <div className="px-6 py-4">
              {children}
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer with Session Info */}
      <footer className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 bg-white dark:bg-card/50 border border-border py-6 rounded-3xl overflow-hidden">
            <CornerBorders />
            <div className="text-center space-y-3">
              <LoginTracker userEmail={user.email} />
              <div className="text-xs text-muted-foreground border-t border-border pt-3 mx-4">
                © {new Date().getFullYear()} TKV Creatographics. Admin Dashboard.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
