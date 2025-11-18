# Booking Form Setup Guide

## How Bookings Are Forwarded to You

The booking form sends data to `/api/book` endpoint. Here are several options to receive bookings:

### Option 1: EmailJS (Easiest - Free)

1. **Sign up at [EmailJS](https://www.emailjs.com/)** (free tier available)
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template**
4. **Get your credentials:**
   - Service ID
   - Template ID
   - Public Key

5. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```

6. **Update the booking form** to use EmailJS directly (I can help with this)

### Option 2: Resend (Recommended for Production)

1. **Sign up at [Resend](https://resend.com/)** (free tier: 3,000 emails/month)
2. **Get your API key**
3. **Install Resend:**
   ```bash
   npm install resend
   ```

4. **Create `.env.local` file:**
   ```
   RESEND_API_KEY=your_api_key_here
   ```

5. **Update `app/api/book/route.ts`** with the Resend code (already included as comments)

### Option 3: Formspree (No Backend Needed)

1. **Sign up at [Formspree](https://formspree.io/)** (free tier available)
2. **Create a form** and get your form endpoint
3. **Update the form** to POST directly to Formspree

### Option 4: Nodemailer (Self-Hosted)

1. **Install Nodemailer:**
   ```bash
   npm install nodemailer
   ```

2. **Set up email service** (Gmail, SMTP, etc.)
3. **Configure in API route**

### Option 5: Database + Email Notification

Store bookings in a database (Supabase, MongoDB, etc.) and send email notifications.

## Quick Setup with EmailJS (Recommended for Quick Start)

1. Go to https://www.emailjs.com/
2. Create account (free)
3. Add email service (Gmail recommended)
4. Create email template with variables:
   - `{{customer_name}}`
   - `{{hotel}}`
   - `{{location}}`
   - `{{email}}`
   - `{{phone_number}}`
5. Get your Service ID, Template ID, and Public Key
6. Let me know and I'll update the form to use EmailJS

## Current Setup

Currently, bookings are logged to the console. To receive actual emails, choose one of the options above and I can help implement it.

