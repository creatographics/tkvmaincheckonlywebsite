import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { prisma } from '@/lib/db'
import { Mail, Calculator, Clock, CheckCircle, Phone, DollarSign, Briefcase, Globe } from '@/components/ui/icons'

async function getFormSubmissions() {
  try {
    const [contactForms, quotationForms, workRequests] = await Promise.all([
      prisma.formSubmission.findMany({
        where: { type: 'CONTACT' },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.formSubmission.findMany({
        where: { type: 'QUOTATION' },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.formSubmission.findMany({
        where: { type: 'WORK_REQUEST' },
        orderBy: { createdAt: 'desc' }
      })
    ])

    return { contactForms, quotationForms, workRequests }
  } catch (error) {
    console.error('Error fetching form submissions:', error)
    return { contactForms: [], quotationForms: [], workRequests: [] }
  }
}

export default async function FormsPage() {
  const { contactForms, quotationForms, workRequests } = await getFormSubmissions()

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  const SubmissionCard = ({ submission, type }: { submission: any, type: 'contact' | 'quotation' | 'work' }) => (
    <Card key={submission.id} className="mb-4">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg flex items-center gap-2">
              {type === 'contact' ? <Mail className="h-5 w-5" /> : 
               type === 'quotation' ? <Calculator className="h-5 w-5" /> : 
               <Briefcase className="h-5 w-5" />}
              {submission.name}
            </CardTitle>
            <CardDescription className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {formatDate(submission.createdAt)}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                {submission.email}
              </span>
              {submission.phone && (
                <span className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  {submission.phone}
                </span>
              )}
              {submission.ipAddress && (
                <span className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  {submission.ipAddress}
                </span>
              )}
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={submission.status === 'RESOLVED' ? 'default' : 'secondary'}>
              {submission.status === 'RESOLVED' ? (
                <>
                  <CheckCircle className="mr-1 h-3 w-3" />
                  Resolved
                </>
              ) : (
                <>
                  <Clock className="mr-1 h-3 w-3" />
                  Pending
                </>
              )}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {(type === 'quotation' || type === 'work') && (
            <div className="grid gap-4 md:grid-cols-2">
              {submission.service && (
                <div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {type === 'work' ? 'Services:' : 'Service:'}
                  </span>
                  <p className="text-sm">{submission.service}</p>
                </div>
              )}
              {submission.budget && (
                <div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    Budget:
                  </span>
                  <p className="text-sm">{submission.budget}</p>
                </div>
              )}
            </div>
          )}
          
          {submission.message && (
            <div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {type === 'work' ? 'Project Summary:' : 'Message:'}
              </span>
              <p className="text-sm mt-1 p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                {submission.message}
              </p>
            </div>
          )}
          
          {type === 'work' && submission.userAgent && (
            <div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">User Agent:</span>
              <p className="text-xs mt-1 p-2 bg-gray-50 dark:bg-gray-800 rounded-md font-mono">
                {submission.userAgent}
              </p>
            </div>
          )}

          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant={submission.status === 'RESOLVED' ? 'outline' : 'default'}
              onClick={() => {
                // This would be handled by a client component or API call
                console.log('Toggle status for:', submission.id)
              }}
            >
              {submission.status === 'RESOLVED' ? 'Mark as Pending' : 'Mark as Resolved'}
            </Button>
            <Button size="sm" variant="outline">
              Reply via Email
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const pendingContact = contactForms.filter((f: any) => f.status === 'PENDING').length
  const pendingQuotation = quotationForms.filter((f: any) => f.status === 'PENDING').length
  const pendingWork = workRequests.filter((f: any) => f.status === 'PENDING').length

  return (
    <div className="space-y-8">
      <div className="border-b border-border pb-6">
        <h1 
          className="text-3xl font-bold mb-2 bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 40%, #4a4a4a 70%, #6b6b6b 100%)',
          }}
        >
          <span className="dark:hidden">Form Submissions</span>
          <span 
            className="hidden dark:inline bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 40%, #c0c0c0 70%, #808080 100%)',
            }}
          >
            Form Submissions
          </span>
        </h1>
        <p className="text-muted-foreground">
          Review and manage contact forms, quotation requests, and work sample requests
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Contact Forms</CardTitle>
            <Mail className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contactForms.length}</div>
            <p className="text-xs text-muted-foreground">
              {pendingContact} pending
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Quotation Requests</CardTitle>
            <Calculator className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{quotationForms.length}</div>
            <p className="text-xs text-muted-foreground">
              {pendingQuotation} pending
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Work Sample Requests</CardTitle>
            <Briefcase className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{workRequests.length}</div>
            <p className="text-xs text-muted-foreground">
              {pendingWork} pending
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingContact + pendingQuotation + pendingWork}</div>
            <p className="text-xs text-muted-foreground">
              Requires attention
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="contact" className="space-y-4">
        <TabsList>
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Contact Forms ({contactForms.length})
          </TabsTrigger>
          <TabsTrigger value="quotation" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Quotation Requests ({quotationForms.length})
          </TabsTrigger>
          <TabsTrigger value="work" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            Work Requests ({workRequests.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="contact">
          {contactForms.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Mail className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No contact forms yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Contact form submissions will appear here
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {contactForms.map((submission: any) => (
                <SubmissionCard key={submission.id} submission={submission} type="contact" />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="quotation">
          {quotationForms.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Calculator className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No quotation requests yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Quotation requests will appear here
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {quotationForms.map((submission: any) => (
                <SubmissionCard key={submission.id} submission={submission} type="quotation" />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="work">
          {workRequests.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Briefcase className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No work requests yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Work sample requests will appear here
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {workRequests.map((submission: any) => (
                <SubmissionCard key={submission.id} submission={submission} type="work" />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
