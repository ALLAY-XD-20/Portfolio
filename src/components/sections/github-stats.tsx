"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitBranch, GitCommit, Star, GitFork, Trophy, Flame } from "lucide-react"
import { githubStats } from "@/data/profile"
import { formatNumber } from "@/lib/utils"

export function GitHubStatsSection() {
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
          <Badge variant="pink" className="mb-4">
            GitHub Stats
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Activity & Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My contributions and achievements on GitHub
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: GitBranch,
              label: "Repositories",
              value: githubStats.totalRepos,
              color: "text-white",
              bg: "bg-white/10",
            },
            {
              icon: Star,
              label: "Total Stars",
              value: githubStats.totalStars,
              color: "text-yellow-400",
              bg: "bg-yellow-400/10",
            },
            {
              icon: GitFork,
              label: "Forks",
              value: githubStats.totalForks,
              color: "text-purple-400",
              bg: "bg-purple-400/10",
            },
            {
              icon: GitCommit,
              label: "Commits",
              value: githubStats.totalCommits,
              color: "text-cyan-400",
              bg: "bg-cyan-400/10",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div
                    className={`w-14 h-14 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-4`}
                  >
                    <stat.icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="text-3xl font-bold text-white mb-1"
                  >
                    {formatNumber(stat.value)}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contribution streak */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <span className="text-white">Contribution Streak</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex items-end gap-1 h-32">
                  {Array.from({ length: 52 }).map((_, i) => {
                    const height = Math.random() * 80 + 20
                    const hue = Math.random() * 60 + 160 // Green to cyan range
                    return (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.02, duration: 0.3 }}
                        className="flex-1 rounded-sm"
                        style={{
                          backgroundColor: `hsl(${hue}, 70%, 40%)`,
                        }}
                      />
                    )
                  })}
                </div>
                <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                  <span>1 year ago</span>
                  <span>Today</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="text-white">Top Languages</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  {githubStats.languages.map((lang, index) => (
                    <div key={lang.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">
                          {lang.name}
                        </span>
                        <span className="text-sm text-primary">
                          {lang.percentage}%
                        </span>
                      </div>
                      <div className="h-3 bg-dark-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percentage}%` }}
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
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* GitHub readme stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="inline-block p-6">
            <img
              src="https://github-readme-stats.vercel.app/api?username=yourusername&theme=radical&hide_border=true&bg_color=0f172a&title_color=00f5ff&text_color=f8fafc"
              alt="GitHub Stats"
              className="max-w-full"
            />
          </Card>
        </motion.div>
      </div>
    </section>
  )
}