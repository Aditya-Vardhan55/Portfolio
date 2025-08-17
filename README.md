# Aditya Vardhan - AI/ML Portfolio

A stunning space-inspired portfolio website showcasing AI/ML expertise with animated galaxy backgrounds and modern web technologies.

## 🚀 Features

- **Space-themed Design**: Animated galaxy background with shooting stars and floating particles
- **Responsive Layout**: Optimized for mobile, tablet, and desktop devices
- **Modern Tech Stack**: Built with React, TypeScript, and Tailwind CSS
- **Smooth Animations**: CSS animations for stars, particles, and interactive elements
- **Professional Sections**: Hero, About, Projects, Services, and Contact sections

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: ESLint for code quality

## 📋 Prerequisites

Before setting up the project locally, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** (optional, for version control)

## 🚀 Local Development Setup

### Step 1: Clone or Download the Project

If you have the project files, navigate to the project directory:

```bash
cd aditya-portfolio
```

### Step 2: Install Dependencies

Install all required dependencies using npm:

```bash
npm install
```

This will install:
- React and React DOM
- TypeScript and type definitions
- Tailwind CSS and PostCSS
- Vite (build tool)
- Lucide React (icons)
- ESLint (code linting)

### Step 3: Start the Development Server

Run the development server:

```bash
npm run dev
```

The application will start and be available at:
```
http://localhost:5173
```

Your browser should automatically open to this URL. If not, manually navigate to it.

### Step 4: Verify Everything Works

You should see:
- ✅ Animated galaxy background with moving stars
- ✅ Shooting star animations
- ✅ Floating particles
- ✅ Smooth scroll navigation
- ✅ Responsive design on different screen sizes
- ✅ All sections loading properly (Hero, About, Projects, Services, Contact)

## 📁 Project Structure

```
aditya-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section with CTA
│   │   ├── About.tsx           # About me section
│   │   ├── Projects.tsx        # Projects showcase
│   │   ├── Services.tsx        # Services offered
│   │   ├── Contact.tsx         # Contact information
│   │   ├── StarField.tsx       # Animated background
|   |   └── ThemeSwitcher.tsx   # Switching Themes
│   ├── App.tsx                 # Main app component
│   ├── main.tsx               # App entry point
│   ├── index.css              # Global styles & animations
│   └── vite-env.d.ts          # Vite type definitions
├── index.html                 # HTML template
├── package.json               # Dependencies & scripts
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── README.md                  # This file
```

## 🎨 Customization

### Updating Personal Information

To customize the portfolio with your own information:

1. **Contact Details** - Edit `src/components/Contact.tsx`:
   - Update email, LinkedIn, and GitHub URLs
   - Modify location and availability status

2. **Projects** - Edit `src/components/Projects.tsx`:
   - Add your own projects
   - Update GitHub repository links
   - Modify project descriptions and tech stacks

3. **About Section** - Edit `src/components/About.tsx`:
   - Update the personal bio and experience
   - Modify skills and expertise areas

4. **Services** - Edit `src/components/Services.tsx`:
   - Update service offerings
   - Modify descriptions and features

### Styling Modifications

The project uses Tailwind CSS for styling. Key files:

- `src/index.css` - Contains custom animations and global styles
- Individual component files - Component-specific styling
- `tailwind.config.js` - Tailwind configuration

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktop (1024px and up)
- 🖥 Large screens (1440px and up)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🌟 Performance Features

- **Optimized Animations**: CSS-based animations for smooth performance
- **Lazy Loading**: Components load efficiently
- **Responsive Images**: Optimized for different screen sizes
- **Modern Build**: Vite provides fast development and optimized production builds
