"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import { LoadingScreen } from "@/components/sections/loading-screen"
import { Navbar } from "@/components/sections/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { TechStackSection } from "@/components/sections/techstack"
import { ProjectsSection } from "@/components/sections/projects"
import { GitHubStatsSection } from "@/components/sections/github-stats"
import { ExperienceSection } from "@/components/sections/experience"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

// Dynamic imports for better performance
const Particles = dynamic(
  () => import("@/components/sections/particles").then((mod) => mod.Particles),
  { ssr: false }
)

function PortfolioContent() {
  return (
    <>
      <Particles />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <GitHubStatsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <LoadingScreen />
      <PortfolioContent />
    </Suspense>
  )
}