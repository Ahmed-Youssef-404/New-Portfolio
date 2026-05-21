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
                I’m a front-end specialist dedicated to bridging the gap between design and engineering. I focus on translating complex requirements into elegant, accessible, and performant user interfaces that don't just function, but feel right.
              </p>
              <p>
                Constantly exploring the React ecosystem and refining UI/UX patterns to build seamless digital experiences.
              </p>
              <p>
                Driven by continuous growth, I am currently expanding my skills into back-end engineering to transition into a well-rounded full-stack developer.
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
              <StatCard label="Years Coding" value={2} />
            </div>
            <div className="col-span-2 sm:col-span-1 mt-0 sm:mt-12">
              <StatCard label="Projects Built" value={4} />
            </div>
            <div className="col-span-2">
              <StatCard label="Github Repositories" value={+20} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
