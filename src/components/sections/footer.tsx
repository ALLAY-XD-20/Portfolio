"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/social-icons"
import { developer, socialLinks } from "@/data/profile"

const socialIcons: Record<string, React.ReactNode> = {
  Github: <GithubIcon className="w-5 h-5" />,
  Linkedin: <LinkedinIcon className="w-5 h-5" />,
  Twitter: <TwitterIcon className="w-5 h-5" />,
  Mail: <Mail className="w-5 h-5" />,
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-dark-800" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-2">
              <span className="gradient-text">{developer.name}</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Building the future, one line at a time.
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-lg glass text-muted-foreground hover:text-primary transition-colors"
              >
                {socialIcons[link.icon]}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-sm text-muted-foreground"
        >
          <p>
            &copy; {currentYear} {developer.name}. All rights reserved.
          </p>
          <p className="mt-2">
            Built with{" "}
            <span className="text-primary">Next.js</span>,{" "}
            <span className="text-purple-400">React</span>, &{" "}
            <span className="text-pink-400">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}