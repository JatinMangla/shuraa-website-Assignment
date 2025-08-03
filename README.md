# ShuraaTax Website

A modern, responsive website for ShuraaTax - leading tax consultants in Dubai, UAE. Built with React, Vite, and Tailwind CSS to deliver a professional, fast, and user-friendly experience across all devices.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Form Validation**: Robust client-side validation for contact forms
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Component-Based**: Modular React components for easy maintenance

## 📱 Pages

1. **Home Page** - Hero section, services overview, testimonials, and company information
2. **Blog Listing Page** - Searchable and filterable blog posts with pagination
3. **Blog Details Page** - Individual blog post with related articles and social sharing
4. **Contact Page** - Contact form with validation, business information, and map
5. **Career Page** - Job listings with expandable details and application process
6. **Teams Page** - Leadership profiles and department overviews

## 🛠️ Tech Stack

- **Framework**: React 18 with React Router DOM
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **SEO**: React Helmet Async for meta tags
- **Icons**: Lucide React
- **Development**: ESLint for code quality

## 🎨 Design System

### Colors

- **Primary**: Blue shades (#0ea5e9 to #0c4a6e)
- **Secondary**: Gray shades (#f8fafc to #0f172a)
- **Accent**: Yellow shades (#fefce8 to #713f12)

### Typography

- **Headings**: Poppins font family
- **Body**: Inter font family
- **Font sizes**: Responsive scaling from mobile to desktop

### Components

All UI components are built with:
- Consistent spacing and sizing
- Hover and focus states
- Loading states where applicable
- Accessibility features
- Mobile-first responsive design

## 📊 SEO Features

- **Meta Tags**: Dynamic meta titles and descriptions
- **Structured Data**: Organization and article schemas
- **Open Graph**: Social media sharing optimization
- **Canonical URLs**: Proper URL canonicalization
- **Sitemap Ready**: SEO-friendly URL structure

## 🔧 Form Validation

The contact form includes:
- **Client-side validation** with real-time feedback
- **Email format validation**
- **Phone number validation**
- **Required field validation**
- **Character limits** for text areas
- **Success/error state handling**

## 📱 Responsive Design

Breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

All components are fully responsive with:
- Flexible grid layouts
- Responsive typography
- Mobile-optimized navigation
- Touch-friendly interactions

## 🌟 Performance Optimizations

- **Code splitting** with React Router
- **Lazy loading** for images and components
- **Optimized bundle size** with Vite
- **Smooth animations** with Framer Motion
- **Efficient re-renders** with React best practices

## 🏗️ Project Structure

```
shuraatax-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── FAQ.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Input.jsx
│   │       ├── Select.jsx
│   │       └── Textarea.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── BlogListing.jsx
│   │   ├── BlogDetails.jsx
│   │   ├── Contact.jsx
│   │   ├── Career.jsx
│   │   ├── Teams.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   └── siteData.js
│   ├── utils/
│   │   ├── validation.js
│   │   └── seo.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shuraatax-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌍 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build command: `npm run build`
   - Output directory: `dist`
3. **Deploy** automatically on push to main branch

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 🔒 Environment Variables

Create a `.env` file in the root directory for any environment-specific variables:

```env
VITE_API_URL=your_api_url_here
VITE_CONTACT_EMAIL=your_contact_email_here
```

## 📞 Contact Information

**Shuraa Tax Accounting & Auditing**
- **Phone**: +971 44081900
- **WhatsApp**: +971 508912062
- **Email**: info@shuraatax.com
- **Address**: 601 Sheikh Zayed Road, 6th Floor, Aspin Commercial Tower – Dubai

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Shuraa Tax Accounting & Auditing.

## 🎯 Future Enhancements

- [ ] Multi-language support (Arabic/English)
- [ ] Online appointment booking system
- [ ] Client portal for document management
- [ ] Live chat integration
- [ ] Blog content management system
- [ ] Advanced analytics integration
- [ ] PWA (Progressive Web App) features

## 🚗 Live Demo & Repository

- **Deployed site:** https://shuraa-website-assignment.vercel.app/
- **GitHub repository:** https://github.com/JatinMangla/shuraa-website-Assignment.git

## ⚠️ Important Notes

- This project is built for demonstration and recruitment purposes
- Content and design inspired by the original ShuraaTax website
- All code is original and built from scratch using modern React practices
- The website meets all requirements specified in the task assignment

---

**Built with ❤️ for ShuraaTax Frontend Developer Assessment**

For technical support or questions about this project, please contact the development team.