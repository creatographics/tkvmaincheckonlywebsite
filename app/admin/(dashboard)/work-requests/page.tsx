import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/db'
import { Calendar, User, Phone, Mail, Briefcase, MessageSquare, ExternalLink } from '@/components/ui/icons'

async function getWorkRequests() {
  try {
    return await prisma.workRequest.findMany({
      orderBy: { createdAt: 'desc' }
    })
  } catch (error) {
    console.error('Error fetching work requests:', error)
    return []
  }
}

export default async function WorkRequestsPage() {
  const requests = await getWorkRequests()

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'IN_PROGRESS':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'COMPLETED':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'CANCELLED':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const generateWhatsAppLink = (request: any) => {
    const message = `Hi ${request.name}! Thank you for your interest in our ${request.service} services. I'd like to discuss your project requirements and share some relevant samples with you.`
    return `https://wa.me/${request.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="space-y-8">
      <div className="border-b border-border pb-6">
        <h1 
          className="text-3xl font-bold mb-2 bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 40%, #4a4a4a 70%, #6b6b6b 100%)',
          }}
        >
          <span className="dark:hidden">Work Requests</span>
          <span 
            className="hidden dark:inline bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 40%, #c0c0c0 70%, #808080 100%)',
            }}
          >
            Work Requests
          </span>
        </h1>
        <p className="text-muted-foreground">
          Manage and respond to client work requests
        </p>
      </div>

      <div className="grid gap-6">
        {requests.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Briefcase className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No work requests yet</h3>
              <p className="text-muted-foreground text-center">
                Work requests from the website will appear here
              </p>
            </CardContent>
          </Card>
        ) : (
          requests.map((request: any) => (
            <Card key={request.id} className="relative">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      {request.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(request.createdAt)}
                      </span>
                      <Badge className={getStatusColor(request.status)}>
                        {request.status}
                      </Badge>
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                    >
                      <a
                        href={generateWhatsAppLink(request)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <MessageSquare className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                    >
                      <a
                        href={`mailto:${request.email}`}
                        className="flex items-center gap-2"
                      >
                        <Mail className="h-4 w-4" />
                        Email
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{request.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{request.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{request.service}</span>
                  </div>
                </div>

                {request.projectSummary && (
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Project Summary:</h4>
                    <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                      {request.projectSummary}
                    </p>
                  </div>
                )}

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    Mark as In Progress
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Mark as Completed
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
