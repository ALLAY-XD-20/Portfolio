"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Globe,
  Server,
  Database,
  Box,
  GitBranch,
  Network,
  Palette,
  FileCode,
} from "lucide-react"
import { techStack } from "@/data/profile"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileCode,
  Globe,
  Server,
  Database,
  Box,
  GitBranch,
  Network,
  Palette,
}

export function TechStackSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="purple" className="mb-4">
            Tech Stack
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Tools I Use</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {techStack.map((tech, index) => {
            const Icon = iconMap[tech.icon] || FileCode
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="group cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <motion.div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${tech.color}20` }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon
                          className="w-7 h-7"
                          style={{ color: tech.color }}
                        />
                      </motion.div>
                      <h3 className="font-medium text-white group-hover:text-primary transition-colors">
                        {tech.name}
                      </h3>
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-500"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Also experienced with:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "REST APIs",
              "Redis",
              "MongoDB",
              "Kubernetes",
              "CI/CD",
              "Jest",
              "Figma",
              "Webpack",
              "Vite",
              "Storybook",
            ].map((tech, index) => (
              <Badge key={index} variant="outline" className="glass">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}