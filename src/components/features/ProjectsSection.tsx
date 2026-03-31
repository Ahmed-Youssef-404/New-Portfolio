import { motion, AnimatePresence } from "framer-motion"
import { useProjectsStore } from "@/store/useProjectsStore"
import { useUIStore } from "@/store/useUIStore"
import { Category } from "@/types"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, ExternalLink, Briefcase } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const CATEGORIES: Category[] = ['All', 'React', 'Fullstack', 'Tools', 'Experiments']

export function ProjectsSection() {
  const { activeCategory, setCategory, filteredProjects, projects } = useProjectsStore()
  const { isProjectModalOpen, activeProjectId, openProjectModal, closeProjectModal } = useUIStore()

  const activeProject = projects.find(p => p.id === activeProjectId)

  return (
    <section id="projects" className="py-24 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <Briefcase className="text-primary w-8 h-8" />
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A showcase of my recent projects. I build scalable applications with a focus on polished UI/UX and robust engineering.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="rounded-full transition-all"
              onClick={() => setCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
              >
                <Card className="h-full flex flex-col overflow-hidden group hover-elevate border-border bg-card">
                  <div className="relative aspect-video overflow-hidden bg-muted cursor-pointer" onClick={() => openProjectModal(project.id)}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-medium px-4 py-2 border border-white/50 rounded-full bg-black/40 backdrop-blur-sm">View Details</span>
                    </div>
                  </div>
                  <CardContent className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors cursor-pointer" onClick={() => openProjectModal(project.id)}>
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{project.category}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex gap-4">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="mr-2 w-4 h-4" /> Code
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors ml-auto">
                      <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <Dialog open={isProjectModalOpen} onOpenChange={(open) => !open && closeProjectModal()}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card border-border">
          {activeProject && (
            <>
              <div className="w-full aspect-video bg-muted relative">
                <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <DialogHeader className="mb-4">
                  <DialogTitle className="text-2xl md:text-3xl font-bold flex items-center justify-between">
                    {activeProject.title}
                    <Badge variant="outline" className="ml-2">{activeProject.category}</Badge>
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-base text-muted-foreground mb-6">
                  {activeProject.longDescription}
                </DialogDescription>
                
                <div className="mb-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="px-3 py-1 bg-secondary hover:bg-secondary/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border">
                  <Button asChild className="rounded-full">
                    <a href={activeProject.liveUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 w-4 h-4" /> View Live Site
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full">
                    <a href={activeProject.githubUrl} target="_blank" rel="noreferrer">
                      <Github className="mr-2 w-4 h-4" /> View Source
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
