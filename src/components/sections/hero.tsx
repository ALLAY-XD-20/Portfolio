"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, ArrowDown, Code2, Terminal } from "lucide-react"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/social-icons"
import { developer, rotatingTitles, socialLinks } from "@/data/profile"

export function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const title = rotatingTitles[currentTitle]

    if (!isDeleting) {
      if (displayText.length < title.length) {
        const timeout = setTimeout(() => {
          setDisplayText(title.slice(0, displayText.length + 1))
        }, 80)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsDeleting(true), 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 40)
        return () => clearTimeout(timeout)
      } else {
        setIsDeleting(false)
        setCurrentTitle((prev) => (prev + 1) % rotatingTitles.length)
      }
    }
  }, [displayText, isDeleting, currentTitle])

  const socialIcons: Record<string, React.ReactNode> = {
    Github: <GithubIcon className="w-5 h-5" />,
    Linkedin: <LinkedinIcon className="w-5 h-5" />,
    Twitter: <TwitterIcon className="w-5 h-5" />,
    Mail: <Mail className="w-5 h-5" />,
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />

      {/* Animated grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
      />

      <div className="relative z-10 container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-lg glass"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-mono">
              ~{developer.username}
            </span>
            <span className="text-primary">$</span>
            <span className="text-green-400">init</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">{developer.name}</span>
          </motion.h1>

          {/* Typing animation title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 h-8"
          >
            <span className="text-primary">&gt; </span>
            <span className="font-mono">{displayText}</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-5 bg-primary ml-1"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {developer.bio}
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center gap-4 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full glass glass-hover text-muted-foreground hover:text-primary transition-colors"
              >
                {socialIcons[link.icon]}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="group">
              <Code2 className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              View Projects
            </Button>
            <Button size="lg" variant="neon" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}