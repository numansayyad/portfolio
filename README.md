# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Bootstrap.

## Features

- 🎨 Modern and attractive design
- 📱 Fully responsive layout
- ⚡ Fast and optimized performance
- 🎯 Job-friendly structure
- 🔧 Built with modern technologies

## Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Bootstrap** - Additional CSS framework
- **Vite** - Build tool
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

1. **Personal Information**: Update the content in the components:
   - `src/components/Hero.tsx` - Name, title, and bio
   - `src/components/About.tsx` - About section content
   - `src/components/Contact.tsx` - Contact information

2. **Projects**: Edit the projects array in `src/components/Projects.tsx`

3. **Skills**: Modify the skills array in `src/components/Skills.tsx`

4. **Colors**: Customize colors in `tailwind.config.js`

5. **Social Links**: Update social media links in `Hero.tsx` and `Footer.tsx`

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## License

MIT
