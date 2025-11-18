# Luxury Hotel Booking Website

A sophisticated, high-end luxury hotel booking website offering exclusive discounts of up to 50% off on premium hotels worldwide.

## Features

- **Luxury Design**: Ultra-luxurious, elegant design with deep navy/charcoal backgrounds and gold accents
- **Hero Section**: Full-screen stunning hotel imagery with search functionality
- **Featured Destinations**: Curated selection of luxury destinations with savings information
- **Hotel Brand Showcase**: Dedicated sections for Marriott, IHG, and Hilton
- **Membership Benefits**: Exclusive perks and savings comparison
- **Testimonials**: Guest reviews and ratings
- **Responsive Design**: Flawless experience on all devices

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Design

- **Color Palette**: Deep navy (#0a1628), charcoal (#1a1a1a), gold (#d4af37), champagne (#f7e7ce)
- **Typography**: Playfair Display (headings), Inter (body)
- **Animations**: Smooth transitions and parallax effects

## Deployment & Domain Setup

### Option 1: Vercel (Recommended for Next.js)

Vercel is made by the creators of Next.js and offers the easiest deployment:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign up/login
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live at `your-project.vercel.app`

3. **Connect Your Custom Domain:**
   - In your Vercel project dashboard, go to "Settings" → "Domains"
   - Enter your domain name (e.g., `luxuryhotels.com`)
   - Follow Vercel's DNS instructions:
     - **Option A (Recommended):** Use Vercel's nameservers
       - Copy the nameservers from Vercel
       - Go to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.)
       - Update nameservers to Vercel's
     - **Option B:** Add DNS records (A/CNAME) to your existing DNS
       - Add the A record or CNAME record as shown in Vercel
   - Wait for DNS propagation (can take up to 48 hours, usually much faster)
   - SSL certificate is automatically provisioned by Vercel

### Option 2: Netlify

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign up
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Add Custom Domain:**
   - Go to "Site settings" → "Domain management"
   - Click "Add custom domain"
   - Follow Netlify's DNS setup instructions

### Option 3: Self-Hosted (VPS/Cloud Server)

For more control, you can deploy to a VPS (DigitalOcean, AWS, etc.):

1. **Build the production version:**
   ```bash
   npm run build
   ```

2. **Set up a Node.js server** (PM2 recommended):
   ```bash
   npm install -g pm2
   pm2 start npm --name "luxury-hotel" -- start
   pm2 save
   pm2 startup
   ```

3. **Set up Nginx as reverse proxy** (for domain and SSL)

4. **Configure SSL** with Let's Encrypt/Certbot

### Domain Purchase

If you don't have a domain yet:
- **Popular registrars:** Namecheap, GoDaddy, Google Domains, Cloudflare
- **Cost:** Typically $10-15/year for a `.com` domain
- **Recommendation:** Cloudflare offers domains at cost price with free privacy protection

### DNS Configuration Summary

Once you have your domain:
- **Nameservers approach (easiest):** Point your domain's nameservers to your hosting provider
- **DNS records approach:** Add A/CNAME records pointing to your hosting provider's IP/domain

### Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify SSL certificate is active (HTTPS)
- [ ] Update any hardcoded localhost URLs
- [ ] Test search functionality (if applicable)
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Configure environment variables if needed
- [ ] Set up custom 404 page (optional)
- [ ] Optimize images for web performance
- [ ] Test mobile responsiveness
- [ ] Set up email notifications (if needed)

### Quick Start Guide

**Fastest way to go live:**

1. Create a GitHub account (if you don't have one)
2. Create a new repository on GitHub
3. Push your code:
   ```bash
   cd C:\Users\44777\new-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
4. Go to [vercel.com](https://vercel.com) and sign up
5. Click "Add New Project" → Import your GitHub repo
6. Click "Deploy" (takes ~2 minutes)
7. Your site is live! (e.g., `your-project.vercel.app`)
8. Add your custom domain in Vercel settings

**Total time: ~15-20 minutes**

