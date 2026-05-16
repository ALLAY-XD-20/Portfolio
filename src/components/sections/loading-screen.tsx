"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code2, Terminal } from "lucide-react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark-900"
    >
      <div className="text-center">
        {/* Terminal-style loader */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="terminal-window rounded-lg p-6 mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="font-mono text-sm">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-4 bg-gradient-to-r from-primary to-purple-500 rounded"
            />
            <p className="mt-2 text-muted-foreground">
              <span className="text-primary">$</span> loading portfolio...
            </p>
          </div>
        </motion.div>

        {/* Logo with pulse */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mx-auto">
            <Code2 className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-muted-foreground font-mono text-sm"
        >
          Initializing...
        </motion.p>
      </div>
    </motion.div>
  )
}