import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { prisma } from '@/lib/db'
import { Plus, Edit, Trash2, FolderOpen } from '@/components/ui/icons'
import { CornerBorders } from '@/components/ui/corner-borders'

async function getProjects() {
  try {
    return await prisma.project.findMany({
      include: {
        images: {
          take: 1,
          orderBy: { order: 'asc' }
        }
      },
      orderBy: { updatedAt: 'desc' }
    })
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-border pb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Projects
          </h1>
          <p className="mt-2 text-muted-foreground">
            Manage your portfolio projects
          </p>
        </div>
        <Link href="/admin/projects/new">
          <Button className="border border-primary/20 hover:border-primary/50">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </Link>
      </div>

      {projects.length === 0 ? (
        <Card className="relative border bg-card">
          <CornerBorders />
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center mx-auto mb-4 border border-border">
                <FolderOpen className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                No projects yet
              </h3>
              <p className="text-muted-foreground mb-6">
                Get started by creating your first project
              </p>
              <Link href="/admin/projects/new">
                <Button className="border border-primary/20 hover:border-primary/50">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Project
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: any) => (
            <Card key={project.id} className="relative border bg-card hover:border-primary/50 transition-colors">
              <CornerBorders />
              {project.images[0] && (
                <div className="aspect-video bg-muted border-b border-border">
                  <img
                    src={project.images[0].url}
                    alt={project.images[0].alt || project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{project.category}</CardDescription>
                  </div>
                  <Badge 
                    variant={project.status === 'PUBLISHED' ? 'default' : 'secondary'}
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-2">
                  <Link href={`/admin/projects/${project.id}`}>
                    <Button variant="outline" size="sm" className="border border-border hover:border-primary/50">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="border border-border hover:border-red-300 text-red-600 hover:text-red-700">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
