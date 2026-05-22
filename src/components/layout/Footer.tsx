import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/30 py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#home" className="text-xl font-bold tracking-tighter text-foreground">
            Ahmed<span className="text-primary"> Youssef</span>
          </a>
          <p className="text-sm text-muted-foreground max-w-sm text-center md:text-left">
            Crafting exceptional digital experiences with modern web technologies.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Ahmed-Youssef-404"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-youssef-37732b2b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:ahmed.youssef.5522.52@gmail.com"
            className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="text-sm text-muted-foreground">
          &copy; {currentYear} Ahmed Youssef. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
