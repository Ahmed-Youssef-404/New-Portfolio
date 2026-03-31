import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter"
import { Code2, MonitorPlay, Zap } from "lucide-react"

function StatCard({ label, value, suffix = "+" }: { label: string; value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useAnimatedCounter(value, 2000, isInView)

  return (
    <div ref={ref} className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center hover-elevate">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 flex items-center">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{label}</div>
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
              <Code2 className="text-primary w-8 h-8" />
              About Me
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                My journey into software engineering started with a simple curiosity about how things work on the web. That curiosity quickly transformed into a deep passion for building interfaces that don't just function, but feel right.
              </p>
              <p>
                I believe that the best applications blur the line between design and engineering. As a front-end specialist, I bridge that gap, translating complex requirements into elegant, accessible, and highly performant user interfaces.
              </p>
              <p>
                When I'm not writing code, you can find me analyzing UI patterns of popular apps, exploring the latest in the React ecosystem, or tweaking my terminal theme for the hundredth time.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <MonitorPlay className="text-accent w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Pixel Perfect</h4>
                  <p className="text-sm text-muted-foreground">Obsessive attention to UI details and design systems.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="text-accent w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Performant</h4>
                  <p className="text-sm text-muted-foreground">Optimized rendering, smooth 60fps animations.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 grid grid-cols-2 gap-4 md:gap-6"
          >
            <div className="col-span-2 sm:col-span-1">
              <StatCard label="Years Coding" value={3} />
            </div>
            <div className="col-span-2 sm:col-span-1 mt-0 sm:mt-12">
              <StatCard label="Projects Built" value={20} />
            </div>
            <div className="col-span-2">
              <StatCard label="Technologies Mastered" value={15} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
