"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Briefcase } from "lucide-react"
import { experience } from "@/data/profile"

export function ExperienceSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="glass mb-4">
            Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and milestones
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-purple-500 to-pink-500" />

            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10"
                  style={{
                    boxShadow: "0 0 10px #00f5ff, 0 0 20px #00f5ff",
                  }}
                />

                {/* Content card */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="glass group hover:border-primary/30 transition-colors">
                      <CardContent className="p-6">
                        {/* Year badge */}
                        <Badge
                          variant="outline"
                          className="mb-3 glass group-hover:border-primary"
                        >
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.year}
                        </Badge>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>

                        {/* Company */}
                        <div className="flex items-center gap-2 text-muted-foreground mb-3">
                          <Briefcase className="w-4 h-4" />
                          <span>{item.company}</span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}