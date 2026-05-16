// Developer Profile Data
// Replace with your actual GitHub username to fetch real data, or customize manually

export const developer = {
  name: "PAWAN",
  username: "ALLAY-XD-20", // Replace with your GitHub username
  title: "Full Stack Developer",
  bio: "Passionate developer building cutting-edge applications with modern technologies. Focused on creating elegant solutions to complex problems.",
  location: "Earth",
  email: "hello@example.com",
  website: "https://yourwebsite.com",
  avatar: "https://github.com/ghost.png", // Replace with your actual avatar URL
}

export const rotatingTitles = [
  "Full Stack Developer",
  "Open Source Developer",
  "React Engineer",
  "TypeScript Developer",
  "AI Builder",
  "Next.js Expert",
  "UI/UX Enthusiast",
]

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "Linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "Twitter",
  },
  {
    name: "Email",
    url: "mailto:hello@example.com",
    icon: "Mail",
  },
]

export const skills = [
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "Tailwind CSS", level: 95, category: "styling" },
  { name: "PostgreSQL", level: 75, category: "database" },
  { name: "Docker", level: 70, category: "devops" },
  { name: "GraphQL", level: 75, category: "backend" },
  { name: "AWS", level: 65, category: "devops" },
]

export const techStack = [
  { name: "React", icon: "FileCode", color: "#61dafb" },
  { name: "TypeScript", icon: "FileCode", color: "#3178c6" },
  { name: "Next.js", icon: "Globe", color: "#000000" },
  { name: "Node.js", icon: "Server", color: "#339933" },
  { name: "Python", icon: "FileCode", color: "#3776ab" },
  { name: "Tailwind", icon: "Palette", color: "#06b6d4" },
  { name: "PostgreSQL", icon: "Database", color: "#336791" },
  { name: "Docker", icon: "Box", color: "#2496ed" },
  { name: "Git", icon: "GitBranch", color: "#f05032" },
  { name: "GraphQL", icon: "Network", color: "#e10098" },
]

export interface Project {
  id: number
  name: string
  description: string
  url: string
  homepage: string
  stargazers_count: number
  forks_count: number
  language: string
  topics: string[]
  updated_at: string
  html_url: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: "awesome-project",
    description: "An amazing project built with Next.js and TypeScript featuring modern UI/UX",
    url: "https://github.com/yourusername/awesome-project",
    homepage: "https://awesome-project.vercel.app",
    stargazers_count: 245,
    forks_count: 32,
    language: "TypeScript",
    topics: ["nextjs", "react", "typescript"],
    updated_at: "2024-01-15T10:00:00Z",
    html_url: "https://github.com/yourusername/awesome-project",
  },
  {
    id: 2,
    name: "react-components",
    description: "A collection of reusable React components with beautiful animations",
    url: "https://github.com/yourusername/react-components",
    homepage: "",
    stargazers_count: 189,
    forks_count: 45,
    language: "TypeScript",
    topics: ["react", "components", "ui"],
    updated_at: "2024-01-10T08:30:00Z",
    html_url: "https://github.com/yourusername/react-components",
  },
  {
    id: 3,
    name: "node-api-starter",
    description: "Production-ready Node.js API starter with authentication and database setup",
    url: "https://github.com/yourusername/node-api-starter",
    homepage: "",
    stargazers_count: 156,
    forks_count: 28,
    language: "JavaScript",
    topics: ["nodejs", "api", "express"],
    updated_at: "2024-01-05T14:20:00Z",
    html_url: "https://github.com/yourusername/node-api-starter",
  },
  {
    id: 4,
    name: "python-automation",
    description: "Python scripts for automating daily tasks and workflows",
    url: "https://github.com/yourusername/python-automation",
    homepage: "",
    stargazers_count: 98,
    forks_count: 15,
    language: "Python",
    topics: ["python", "automation", "scripts"],
    updated_at: "2023-12-20T09:00:00Z",
    html_url: "https://github.com/yourusername/python-automation",
  },
  {
    id: 5,
    name: "portfolio-v1",
    description: "My previous portfolio website built with Gatsby",
    url: "https://github.com/yourusername/portfolio-v1",
    homepage: "https://old-portfolio.vercel.app",
    stargazers_count: 12,
    forks_count: 3,
    type: "TypeScript",
    language: "TypeScript",
    topics: ["portfolio", "gatsby"],
    updated_at: "2023-11-15T16:45:00Z",
    html_url: "https://github.com/yourusername/portfolio-v1",
  },
  {
    id: 6,
    name: "docker-compose-templates",
    description: "Collection of production-ready Docker Compose configurations",
    url: "https://github.com/yourusername/docker-compose-templates",
    homepage: "",
    stargazers_count: 67,
    forks_count: 22,
    language: "Shell",
    topics: ["docker", "devops", "templates"],
    updated_at: "2023-10-08T11:30:00Z",
    html_url: "https://github.com/yourusername/docker-compose-templates",
  },
]

export const experience = [
  {
    year: "2024",
    title: "Senior Developer",
    company: "Tech Company",
    description: "Leading frontend architecture and mentoring junior developers",
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "Startup Inc",
    description: "Built scalable web applications using React, Node.js, and PostgreSQL",
  },
  {
    year: "2020",
    title: "Frontend Developer",
    company: "Digital Agency",
    description: "Created responsive websites and web applications for clients",
  },
  {
    year: "2018",
    title: "Started Coding",
    company: "Self-taught",
    description: "Began my journey into software development",
  },
]

export const githubStats = {
  totalRepos: 25,
  totalStars: 450,
  totalForks: 89,
  totalCommits: 1200,
  contributions: 456,
  languages: [
    { name: "TypeScript", percentage: 45 },
    { name: "JavaScript", percentage: 25 },
    { name: "Python", percentage: 15 },
    { name: "Shell", percentage: 10 },
    { name: "Other", percentage: 5 },
  ],
}
