import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { prisma } from '@/lib/db'
import { FileText, MessageSquare, TrendingUp } from '@/components/ui/icons'
import { CornerBorders } from '@/components/ui/corner-borders'

async function getDashboardStats() {
  try {
    const [blogCount, submissionCount] = await Promise.all([
      prisma.blogPost.count(),
      prisma.formSubmission.count({ where: { status: 'PENDING' } })
    ])

    return {
      blogs: blogCount,
      pendingSubmissions: submissionCount
    }
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return {
      blogs: 0,
      pendingSubmissions: 0
    }
  }
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats()

  const statCards = [
    {
      title: 'Blog Posts',
      value: stats.blogs,
      description: 'All blog posts',
      icon: FileText,
      color: 'text-primary'
    },
    {
      title: 'Pending Submissions',
      value: stats.pendingSubmissions,
      description: 'Forms awaiting review',
      icon: MessageSquare,
      color: 'text-primary'
    },
    {
      title: 'Total Content',
      value: stats.blogs,
      description: 'Published content items',
      icon: TrendingUp,
      color: 'text-primary'
    }
  ]

  return (
    <div className="space-y-8">
      <div className="border-b border-border pb-6">
        <h1 
          className="text-3xl font-bold mb-2 bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 40%, #4a4a4a 70%, #6b6b6b 100%)',
          }}
        >
          <span className="dark:hidden">Dashboard</span>
          <span 
            className="hidden dark:inline bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 40%, #c0c0c0 70%, #808080 100%)',
            }}
          >
            Dashboard
          </span>
        </h1>
        <p className="mt-2 text-muted-foreground">
          Welcome to your admin dashboard. Here's an overview of your content.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {statCards.map((stat) => (
          <Card key={stat.title} className="relative border border-border bg-white dark:bg-card/50 hover:border-primary/50 transition-all duration-200 rounded-xl shadow-sm hover:shadow-md overflow-hidden">
            <CornerBorders />
            
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 pt-6">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent className="pb-6">
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="relative border border-border bg-white dark:bg-card/50 rounded-xl shadow-sm overflow-hidden">
          <CornerBorders />
          
          <CardHeader className="pt-6 pb-4">
            <CardTitle className="text-lg font-semibold text-foreground">Quick Actions</CardTitle>
            <CardDescription className="text-muted-foreground">
              Common tasks you might want to perform
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-6 pb-6">
            <a
              href="/admin/blogs/new"
              className="block p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group"
            >
              <div className="font-medium text-foreground group-hover:text-primary">Write Blog Post</div>
              <div className="text-sm text-muted-foreground mt-1">
                Create a new blog article
              </div>
            </a>
            <a
              href="/admin/forms"
              className="block p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group"
            >
              <div className="font-medium text-foreground group-hover:text-primary">Review Submissions</div>
              <div className="text-sm text-muted-foreground mt-1">
                Check pending form submissions
              </div>
            </a>
          </CardContent>
        </Card>

        <Card className="relative border border-border bg-white dark:bg-card/50 rounded-xl shadow-sm overflow-hidden">
          <CornerBorders />
          
          <CardHeader className="pt-6 pb-4">
            <CardTitle className="text-lg font-semibold text-foreground">Recent Activity</CardTitle>
            <CardDescription className="text-muted-foreground">
              Latest changes to your content
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 border border-primary/20">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground">
                Activity tracking will be available once you start creating content.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
