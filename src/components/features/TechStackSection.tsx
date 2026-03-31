import { motion } from "framer-motion"
import { techStack } from "@/data/skills"
import * as Icons from "react-icons/si"
import { Cpu } from "lucide-react"

export function TechStackSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Cpu className="text-primary w-8 h-8" />
            Tech Stack Visualized
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The technologies I use daily to build modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techStack).map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 hover-elevate"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border/50">
                {category}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {skills.map((skill) => {
                  const Icon = (Icons as any)[skill.icon]
                  return (
                    <div key={skill.name} className="flex flex-col items-center justify-center group gap-2">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 shadow-sm border border-border/50">
                        {Icon && <Icon className="w-6 h-6" />}
                      </div>
                      <span className="text-[10px] font-medium text-muted-foreground group-hover:text-foreground text-center line-clamp-1 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
