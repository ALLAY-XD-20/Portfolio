import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Developer Portfolio | Full Stack Developer",
  description: "Professional portfolio showcasing projects, skills, and experience in web development.",
  keywords: ["developer", "portfolio", "full stack", "react", "next.js", "typescript"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Developer Portfolio",
    description: "Professional portfolio showcasing projects, skills, and experience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio",
    description: "Professional portfolio showcasing projects, skills, and experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark-900 text-foreground">
        {children}
      </body>
    </html>
  )
}