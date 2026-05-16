"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Coffee, Zap, BookOpen } from "lucide-react"
import { developer, skills } from "@/data/profile"

const stats = [
  { label: "Years Coding", value: "5+" },
  { label: "Projects", value: "25+" },
  { label: "Contributions", value: "400+" },
  { label: "Coffee", value: "∞" },
]

const interests = [
  { icon: Code2, label: "Building Products", color: "text-cyan-400" },
  { icon: Zap, label: "Open Source", color: "text-purple-400" },
  { icon: Coffee, label: "Clean Code", color: "text-pink-400" },
  { icon: BookOpen, label: "Learning", color: "text-green-400" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="neon" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Who I Am</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer crafting digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Developer & Creator
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {developer.bio}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I specialize in building modern web applications with cutting-edge
                  technologies. When I&apos;m not coding, you&apos;ll find me
                  exploring new frameworks, contributing to open source, or
                  brainstorming the next big idea.
                </p>

                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge key={index} variant="outline" className="glass">
                      <interest.icon className={`w-4 h-4 mr-2 ${interest.color}`} />
                      {interest.label}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats and skills */}
          <div className="space-y-6">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-3xl font-bold gradient-text mb-2"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Skills Progression
                </h3>
                <div className="space-y-4">
                  {skills.slice(0, 5).map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-muted-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, #00f5ff, #a855f7)`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}