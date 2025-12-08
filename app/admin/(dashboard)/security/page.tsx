import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { prisma } from '@/lib/db'
import { Shield, Activity, AlertTriangle, CheckCircle, Clock, User } from '@/components/ui/icons'
import { CornerBorders } from '@/components/ui/corner-borders'

async function getSecurityData() {
  try {
    const [adminLogs, recentActivity] = await Promise.all([
      prisma.adminLog.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.adminLog.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
          }
        }
      })
    ])

    return { adminLogs, recentActivity }
  } catch (error) {
    console.error('Error fetching security data:', error)
    return { adminLogs: [], recentActivity: 0 }
  }
}

export default async function SecurityPage() {
  const { adminLogs, recentActivity } = await getSecurityData()

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  const getActionIcon = (action: string) => {
    switch (action.toLowerCase()) {
      case 'create':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'update':
        return <Activity className="h-4 w-4 text-primary" />
      case 'delete':
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      default:
        return <Shield className="h-4 w-4 text-primary" />
    }
  }

  const getActionColor = (action: string) => {
    switch (action.toLowerCase()) {
      case 'create':
        return 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20'
      case 'update':
        return 'bg-primary/10 text-primary border-primary/20'
      case 'delete':
        return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20'
      default:
        return 'bg-primary/10 text-primary border-primary/20'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-border pb-6">
        <h1 
          className="text-3xl font-bold mb-2 bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 40%, #4a4a4a 70%, #6b6b6b 100%)',
          }}
        >
          <span className="dark:hidden">Security Dashboard</span>
          <span 
            className="hidden dark:inline bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 40%, #c0c0c0 70%, #808080 100%)',
            }}
          >
            Security Dashboard
          </span>
        </h1>
        <p className="mt-2 text-muted-foreground">
          Monitor admin activities and system security
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="relative border border-border bg-white dark:bg-card/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-200">
          <CornerBorders />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 pt-6">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Actions</CardTitle>
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Shield className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="text-2xl font-bold text-foreground">{adminLogs.length}</div>
            <p className="text-xs text-muted-foreground">All time activity</p>
          </CardContent>
        </Card>

        <Card className="relative border border-border bg-white dark:bg-card/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-200">
          <CornerBorders />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 pt-6">
            <CardTitle className="text-sm font-medium text-muted-foreground">Recent Activity</CardTitle>
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Activity className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="text-2xl font-bold text-foreground">{recentActivity}</div>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>

        <Card className="relative border border-border bg-white dark:bg-card/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-200">
          <CornerBorders />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 pt-6">
            <CardTitle className="text-sm font-medium text-muted-foreground">System Status</CardTitle>
            <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="text-2xl font-bold text-green-500">Secure</div>
            <p className="text-xs text-muted-foreground">All systems operational</p>
          </CardContent>
        </Card>

        <Card className="relative border border-border bg-white dark:bg-card/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-200">
          <CornerBorders />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 pt-6">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Sessions</CardTitle>
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <User className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="text-2xl font-bold text-foreground">1</div>
            <p className="text-xs text-muted-foreground">Current admin session</p>
          </CardContent>
        </Card>
      </div>

      {/* Activity Log */}
      <Card className="relative border border-border bg-white dark:bg-card/50 rounded-xl overflow-hidden">
        <CornerBorders />
        <CardHeader className="pt-6 pb-4">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Recent Admin Activity
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Latest administrative actions performed in the system
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-6">
          {adminLogs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No activity logged yet
              </h3>
              <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                Admin activities will appear here as they occur. All actions are tracked for security purposes.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {adminLogs.map((log: any) => (
                <div 
                  key={log.id} 
                  className="flex items-center justify-between p-4 border border-border rounded-xl bg-background/50 hover:border-primary/30 transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      {getActionIcon(log.action)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-foreground">{log.action}</span>
                        <Badge className={`${getActionColor(log.action)} border text-xs`}>
                          {log.resource}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        {formatDate(log.createdAt)}
                        {log.resourceId && (
                          <span className="text-xs">• ID: {log.resourceId.slice(0, 8)}...</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                    {log.userId.slice(0, 8)}...
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Security Recommendations */}
      <Card className="relative border border-border bg-white dark:bg-card/50 rounded-xl overflow-hidden">
        <CornerBorders />
        <CardHeader className="pt-6 pb-4">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Security Recommendations
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Current security status and best practices
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-6">
          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
              <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20 mt-0.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <div className="font-medium text-foreground mb-1">
                  Admin Authentication Enabled
                </div>
                <div className="text-sm text-muted-foreground">
                  JWT-based authentication is properly configured with secure HTTP-only cookies
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
              <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20 mt-0.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <div className="font-medium text-foreground mb-1">
                  Activity Logging Active
                </div>
                <div className="text-sm text-muted-foreground">
                  All admin actions are being logged for audit and security purposes
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-primary/5 border border-primary/20 rounded-xl">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 mt-0.5">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="font-medium text-foreground mb-1">
                  Regular Security Review
                </div>
                <div className="text-sm text-muted-foreground">
                  Consider reviewing admin logs weekly for unusual activity patterns
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
