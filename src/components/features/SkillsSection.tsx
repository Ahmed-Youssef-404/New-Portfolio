import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { skillCategories } from "@/data/skills"
import * as Icons from "react-icons/si"
import { Layers } from "lucide-react"

export function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Layers className="text-primary w-8 h-8" />
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit designed to build robust, scalable, and visually stunning web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover-elevate group"
            >
              <h3 className="text-xl font-bold mb-6 pb-4 border-b border-border text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2 sm:gap-3"
              >
                {category.skills.map((skill) => {
                  const Icon = (Icons as any)[skill.icon]
                  return (
                    <motion.div key={skill.name} variants={item}>
                      <Badge 
                        variant="secondary" 
                        className="py-2 px-3 text-sm font-medium bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {Icon && <Icon className="mr-2 h-4 w-4" />}
                        {skill.name}
                      </Badge>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
