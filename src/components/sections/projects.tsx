"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, GitFork, ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/ui/social-icons"
import { projects } from "@/data/profile"
import { formatNumber, getLanguageColor } from "@/lib/utils"

const categories = ["All", "TypeScript", "JavaScript", "Python", "Shell"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.language === activeCategory)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="green" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Some of the projects I&apos;ve worked on
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "glow" : "glass"}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full group overflow-hidden">
                  {/* Project header with gradient */}
                  <div className="h-32 bg-gradient-to-br from-dark-700 to-dark-800 relative overflow-hidden">
                    <div className="absolute inset-0 grid-pattern opacity-30" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge
                        variant="outline"
                        className="glass"
                        style={{
                          borderColor: getLanguageColor(project.language),
                          color: getLanguageColor(project.language),
                        }}
                      >
                        {project.language}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1">
                      {project.topics.slice(0, 3).map((topic) => (
                        <Badge
                          key={topic}
                          variant="outline"
                          className="text-xs glass"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0 flex justify-between items-center">
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {formatNumber(project.stargazers_count)}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        {formatNumber(project.forks_count)}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" asChild>
                        <a
                          href={project.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      </Button>
                      {project.homepage && (
                        <Button size="icon" variant="ghost" asChild>
                          <a
                            href={project.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}