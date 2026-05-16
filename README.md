# Developer Portfolio

A premium, modern developer portfolio built with Next.js 15, React, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://via.placeholder.com/1200x600/030712/00f5ff?text=Portfolio+Preview)

## Features

- 🚀 **Modern Tech Stack** - Next.js 15, React 18, TypeScript, Tailwind CSS
- 🎨 **Premium Design** - Glassmorphism, neon accents, cyberpunk aesthetic
- ✨ **Smooth Animations** - Framer Motion powered transitions
- 🌙 **Dark Mode** - Beautiful dark theme with gradient accents
- 📱 **Fully Responsive** - Mobile, tablet, and desktop layouts
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter cards
- ⚡ **Performance Optimized** - Dynamic imports, lazy loading
- 🎯 **Sections**:
  - Animated hero with typing effect
  - About section with skills
  - Tech stack showcase
  - Projects gallery with filtering
  - GitHub statistics
  - Experience timeline
  - Contact form

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to the project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Update your profile data in src/data/profile.ts
# No environment variables required for basic setup
```

## Customization

### Update Profile Data

Edit `src/data/profile.ts` to customize:

- Your name and bio
- GitHub username
- Social links
- Skills and projects
- Experience timeline

### Theme Colors

Edit `src/app/globals.css` to customize:

- Primary color (currently cyan: `#00f5ff`)
- Secondary color (currently purple: `#a855f7`)
- Accent colors
- Glass effects

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── src/
│   ├── app/               # Next.js app router
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Main page
│   ├── components/
│   │   ├── sections/      # Page sections
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── techstack.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── github-stats.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── contact.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── particles.tsx
│   │   │   └── loading-screen.tsx
│   │   └── ui/            # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       ├── input.tsx
│   │       └── textarea.tsx
│   ├── data/
│   │   └── profile.ts     # Profile data
│   └── lib/
│       └── utils.ts       # Utility functions
├── public/                # Static files
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: Custom + Radix UI
- **Fonts**: Geist (Next.js default)

## License

MIT License - feel free to use this project for your own portfolio!

## Credits

Built with ❤️ using Next.js and modern web technologies.

---

⭐ Star this repo if you found it useful!