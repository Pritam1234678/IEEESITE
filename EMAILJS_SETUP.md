# EmailJS Setup Instructions

## 🚀 Automated Email Setup for IEEE Website

Your contact form is now configured to send emails automatically from the website directly to `mandalpritam765@gmail.com`.

## 📋 Setup Steps:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up with your email (use mandalpritam765@gmail.com)
3. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended)
4. Connect your Gmail account (mandalpritam765@gmail.com)
5. Note down the **Service ID** (e.g., `service_xyz123`)

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New IEEE Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
Sent from IEEE Computer Society Website
```

4. Note down the **Template ID** (e.g., `template_abc456`)

### 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., `user_def789`)

### 5. Update Code
Replace these values in `Support.jsx`:

```javascript
// Replace these with your actual EmailJS credentials:
'YOUR_SERVICE_ID'   → 'service_xyz123'    // Your Gmail service ID
'YOUR_TEMPLATE_ID'  → 'template_abc456'   // Your template ID  
'YOUR_PUBLIC_KEY'   → 'user_def789'       // Your public key
```

## 🔧 Alternative Backend Options

If you prefer a backend solution, here are other options:

### Option 1: Netlify Forms (if hosting on Netlify)
- Add `netlify` attribute to form
- Automatically handles form submissions
- Free tier available

### Option 2: Formspree
- Simple form backend service
- Just change form action to Formspree endpoint
- Free tier: 50 submissions/month

### Option 3: Node.js + Nodemailer
- Full backend control
- Requires server hosting
- More complex setup

## 📧 Current Form Features:
- ✅ Name, Email, Phone, Message fields
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Responsive design
- ✅ Matches IEEE branding

## 🎯 Once Setup Complete:
1. Users fill out the contact form
2. Form data is sent automatically to your email
3. You receive formatted emails with all details
4. No user email client required!

## 🚨 Security Note:
EmailJS keys are safe to use in frontend as they have domain restrictions and rate limiting built-in.
