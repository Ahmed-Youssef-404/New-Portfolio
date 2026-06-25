import { motion, AnimatePresence } from "framer-motion"
import { useProjectsStore } from "@/store/useProjectsStore"
import { useUIStore } from "@/store/useUIStore"
import { Category } from "@/types"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, ExternalLink, Briefcase, Lock } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ProjectImageCarousel } from "../ui/ProjectImageCarousel"
// import { ProjectImageCarousel } from "@/components/projects/ProjectImageCarousel"

const CATEGORIES: Category[] = ['All', 'React', 'Fullstack', 'Tools']

export function ProjectsSection() {
  const { activeCategory, setCategory, filteredProjects, projects } = useProjectsStore()
  const { isProjectModalOpen, activeProjectId, openProjectModal, closeProjectModal } = useUIStore()

  // فرضنا هنا أن الـ type الخاص بالـ project تم تحديثه ليشمل private?: boolean
  const activeProject = projects.find(p => p.id === activeProjectId)

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-10 md:mb-16 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center sm:justify-start gap-3 tracking-tight">
            <Briefcase className="text-primary w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base sm:text-lg mx-auto sm:mx-0">
            A showcase of my recent projects. I build scalable applications with a focus on polished UI/UX and robust engineering.
          </p>
        </div>

        {/* Filters */}
        <div className="flex overflow-x-auto sm:flex-wrap gap-2 mb-10 pb-3 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="rounded-full transition-all text-sm px-4 py-1.5 shrink-0"
              onClick={() => setCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Grid System */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="flex"
              >
                <Card className="w-full flex flex-col overflow-hidden group hover-elevate border-border bg-card transition-all duration-300 hover:shadow-lg">
                  
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <ProjectImageCarousel
                      images={project.image}
                      alt={project.title}
                      onImageClick={() => openProjectModal(project.id)}
                      showArrowsOnHoverOnly
                    />

                    {/* Private Tag Overlay on top-left of image */}
                    {project.private && (
                      <div className="absolute top-3 left-3 z-30 flex items-center gap-1.5 bg-background/10 backdrop-blur-md text-destructive border border-destructive/20 px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm pointer-events-none">
                        <Lock className="w-3 h-3" />
                        Private
                      </div>
                    )}

                    {/* Desktop Hover Overlay — pointer-events-none so it doesn't block the carousel arrows/clicks underneath */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center pointer-events-none z-10">
                      <span className="text-white text-sm font-medium px-4 py-2 border border-white/30 rounded-full bg-black/40 backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        View Details
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <CardContent className="flex-1 p-5 sm:p-6 flex flex-col">
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <h3 
                        className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors cursor-pointer" 
                        onClick={() => openProjectModal(project.id)}
                      >
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 shrink-0">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
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

                  {/* Card Footer */}
                  <CardFooter className="p-5 sm:p-6 pt-0 flex justify-between items-center gap-4 border-t border-border/10 mt-2">
                    {project.private ? (
                      // شكل جميل ومميز يعرض بدلاً من الأزرار إذا كان المشروع خاصاً
                      <div className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-muted-foreground bg-secondary/40 rounded-lg border border-dashed border-border/60">
                        <Lock className="w-3.5 h-3.5 text-muted-foreground/70" />
                        <span>Code & Demo are private</span>
                      </div>
                    ) : (
                      // الأزرار العادية للمشاريع العامة
                      <>
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1">
                          <Github className="mr-2 w-4 h-4" /> Code
                        </a>
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors py-1">
                          <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                        </a>
                      </>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Responsive Project Modal */}
      <Dialog open={isProjectModalOpen} onOpenChange={(open) => !open && closeProjectModal()}>
        <DialogContent className="w-[95%] sm:w-full max-w-3xl p-0 overflow-hidden bg-card border-border rounded-lg sm:rounded-xl flex flex-col max-h-[90vh] custom-scroll">
          {activeProject && (
            <>
              {/* Scrollable Area inside Dialog */}
              <div className="overflow-y-auto flex-1 custom-scrollbar">
                <div className="w-full aspect-video bg-muted relative">
                  <ProjectImageCarousel
                    images={activeProject.image}
                    alt={activeProject.title}
                  />
                </div>
                
                <div className="p-5 sm:p-8">
                  <DialogHeader className="mb-4 text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-2">
                        {activeProject.title}
                        {activeProject.private && (
                          <Badge variant="destructive" className="bg-destructive/10 text-destructive border-none hover:bg-destructive/10 text-xs py-0.5">
                            Private
                          </Badge>
                        )}
                      </DialogTitle>
                      <Badge variant="outline" className="w-fit border-primary/30 text-primary bg-primary/5">
                        {activeProject.category}
                      </Badge>
                    </div>
                  </DialogHeader>
                  
                  <DialogDescription className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                    {activeProject.longDescription}
                  </DialogDescription>
                  
                  {/* Private Notice inside description if private */}
                  {activeProject.private && (
                    <div className="mb-6 p-4 rounded-xl bg-destructive/5 border border-destructive/10 flex items-start gap-3">
                      <Lock className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-semibold text-foreground">Proprietary Software</h5>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          This project was built for a client or contains proprietary code. Access to the repository and live deployment is restricted.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="px-2.5 py-1 text-xs bg-secondary hover:bg-secondary/80">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sticky/Fixed Footer for Action Buttons */}
              {/* تظهر فقط إذا لم يكن المشروع خاصاً */}
              {!activeProject.private && (
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 sm:p-6 bg-background border-t border-border mt-auto">
                  <Button asChild className="rounded-full w-full sm:w-auto px-6">
                    <a href={activeProject.liveUrl} target="_blank" rel="noreferrer" className="justify-center">
                      <ExternalLink className="mr-2 w-4 h-4" /> View Live Site
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full w-full sm:w-auto px-6">
                    <a href={activeProject.githubUrl} target="_blank" rel="noreferrer" className="justify-center">
                      <Github className="mr-2 w-4 h-4" /> View Source
                    </a>
                  </Button>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}