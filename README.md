# FashionHub - Ecommerce Website

A modern, responsive ecommerce website built with Next.js 15, TypeScript, and Tailwind CSS. Features a complete online store for men's and women's clothing with a beautiful, mobile-first design.

## 🚀 Features

- **Modern Design**: Clean, responsive UI with smooth animations
- **Product Catalog**: Curated collection of men's and women's clothing
- **Product Details**: Detailed product pages with images, descriptions, and specifications
- **Category Pages**: Dedicated pages for men's and women's clothing
- **Responsive Design**: Optimized for all device sizes
- **Fast Performance**: Built with Next.js 15 for optimal speed
- **TypeScript**: Full type safety throughout the application
- **SEO Optimized**: Proper metadata and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Images**: Next.js Image Optimization
- **Fonts**: Inter (via Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hackathon
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── men/page.tsx       # Men's clothing page
│   ├── women/page.tsx     # Women's clothing page
│   ├── product/[id]/      # Dynamic product pages
│   ├── about/page.tsx     # About page
│   ├── contact/page.tsx   # Contact page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Layout.tsx         # Main layout wrapper
│   ├── ProductCard.tsx    # Product card component
│   ├── HeroSection.tsx    # Homepage hero
│   └── CategoryShowcase.tsx # Category showcase
└── data/
    └── products.ts        # Product data and utilities
```

## 🎨 Design Features

- **Hero Section**: Eye-catching homepage banner with call-to-action buttons
- **Product Cards**: Hover effects, discount badges, and rating displays
- **Category Showcase**: Visual category selection with overlay effects
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Product Filters**: Category, price, and sorting options
- **Newsletter Signup**: Email subscription section
- **Contact Form**: Complete contact page with FAQ section

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🛍️ Product Data

The website includes 12 dummy products:
- **Men's Collection**: T-shirts, jackets, pants, hoodies, dress shirts, sneakers
- **Women's Collection**: Dresses, jeans, blouses, cardigans, skirts, boots

Each product includes:
- High-quality images from Unsplash
- Detailed descriptions
- Size and color options
- Customer ratings and reviews
- Price information with discount calculations

## 🚀 Getting Started

1. **Development**: Run `npm run dev` to start the development server
2. **Build**: Run `npm run build` to create a production build
3. **Preview**: Run `npm run start` to preview the production build
4. **Lint**: Run `npm run lint` to check for code issues

## 📄 Pages

- **Homepage** (`/`): Hero section, featured products, category showcase
- **Men's** (`/men`): Complete men's clothing collection with filters
- **Women's** (`/women`): Complete women's clothing collection with filters
- **Product Detail** (`/product/[id]`): Individual product pages with full details
- **About** (`/about`): Company information and team details
- **Contact** (`/contact`): Contact form and company information
- **404** (`/not-found`): Custom error page

## 🎯 Future Enhancements

- Shopping cart functionality
- User authentication
- Payment integration
- Product search functionality
- Customer reviews system
- Wishlist feature
- Order tracking
- Admin dashboard

## 📝 License

This project is created for demonstration purposes. Feel free to use it as a starting point for your own ecommerce projects.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS