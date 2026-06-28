# Coffee Shop

![Live Demo](https://img.shields.io/badge/live-demo-brightgreen)
![Tech Stack](https://img.shields.io/badge/tech%20stack-react%20%7C%20vite%20%7C%20tailwind%20%7C%20framer%20motion-blue)

A coffee shop website built as a portfolio project. This website showcases a luxurious, culturally-specific design with smooth animations and a professional agency-quality feel.

## Overview

Coffee Shop is a fictional upscale establishment located in Algiers, Algeria, blending Algerian hospitality with French café culture. The website features:

- Strikhero section with animated typography and floating cards
- Interactive menu with filterable categories
- Beautiful gallery with lightbox
- Customer testimonials carousel
- Interactive map with location details (Didouche Mourad, Algiers)
- Reservation form with simulated submission (no backend required)
- Fully responsive design
- Smooth scroll animations and micro-interactions
- Authentic story section featuring the coffee shop's origin story with actual photography

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library |
| **Vite** | Build tool and dev server |
| **Tailwind CSS** | Styling utility-first framework |
| **Framer Motion** | Animations and transitions |
| **React Router** | Client-side routing |
| **React-Leaflet** | Interactive maps |
| **React Hot Toast** | Notification system |
| **React Icons** | Icon library |

## Features

- ✅ Fixed/sticky navbar with scroll-based background transition
- ✅ Hero section with letter-by-letter animated headline
- ✅ Floating cards in hero (Today's Special, Hours, Rating)
- ✅ Two-column About section with authentic coffee shop photography
- ✅ Filterable menu tab with smooth transitions
- ✅ Masonry-style gallery with lightbox modal
- ✅ Auto-playing testimonials carousel featuring guest reviews
- ✅ Interactive map with custom marker showing exact location in Algiers
- ✅ Reservation form with validation and simulated submission (no backend needed)
- ✅ Fully responsive design (mobile-first)
- ✅ Smooth scroll animations on all sections
- ✅ Custom gold-accent color scheme and warm shadows
- ✅ Dynamic opening hours with "Open Now" status
- ✅ Toast notifications for form submission
- ✅ SEO-friendly semantic HTML structure

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/coffee-shop.git
   cd coffee-shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Environment Variables

No environment variables are required for this project. The reservation form uses a simulated submission for portfolio purposes.

## Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Vercel will automatically detect the Vite React project and deploy it

### Netlify

1. Push to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. No environment variables needed

## Project Structure

```
src/
  components/
    layout/       # Navbar, Footer, ScrollToTop
    ui/           # Reusable UI components (Button, Badge, etc.)
    sections/     # Page sections (Hero, About, Menu, etc.)
  data/           # Data files (menu, reviews, gallery)
  hooks/          # Custom React hooks
  utils/          # Utility functions and constants
  pages/          # Page components (Home.jsx)
  assets/         # Static assets (images, icons)
  public/         # Public assets (ourStory.jpg, logos)
```

## Design System

### Colors
- Background Primary: `#0f0800`
- Background Secondary: `#1a1000`
- Surface: `#221500`
- Gold Accent: `#c9a84c`
- Gold Light: `#e8c97a`
- Text Primary: `#f5efe6`
- Text Secondary: `#b0956e`
- Text Muted: `#7a6248`
- Success: `#4ade80`
- Error: `#f87171`

### Typography
- Display/Headings: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- Body: [Inter](https://fonts.google.com/specimen/Inter)
- Accent: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)

## Screenshots

![Hero Section](https://via.placeholder.com/800x450?text=Hero+Section)
![Menu Section](https://via.placeholder.com/800x450?text=Menu+Section)
![Gallery Section](https://via.placeholder.com/800x450?text=Gallery+Section)
![Reservation Form](https://via.placeholder.com/800x450?text=Reservation+Form)
![About Section](https://via.placeholder.com/800x450?text=About+Section+with+Story)

## License

This project is for educational and portfolio purposes only.

---

Made with ❤️ by [Your Name]