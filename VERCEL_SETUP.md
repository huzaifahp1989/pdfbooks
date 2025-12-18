# Vercel Deployment Setup Guide

## Automatic Deployment to Vercel

Your Islamic Books Library is now configured for automatic deployment to Vercel every time you push to GitHub!

### Step 1: Sign Up on Vercel
1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Repository
1. After signing in, click "New Project"
2. Select "Import Git Repository"
3. Find and select `huzaifahp1989/pdfbooks`
4. Click "Import"

### Step 3: Configure Project
- **Project Name**: pdfbooks (or your preferred name)
- **Framework Preset**: Other (it's a static site)
- **Root Directory**: Leave as is
- Click "Deploy"

### Step 4: Automatic Deployments Enabled!
✅ Every time you push to GitHub, Vercel will automatically:
- Detect the changes
- Build your site
- Deploy to production
- Provide a live URL

### Access Your Live Site
Once deployed, you'll get a URL like:
- `https://pdfbooks.vercel.app` (or your custom domain)

### How It Works

**Workflow:**
```
You make changes locally
         ↓
git add . && git commit -m "message" && git push
         ↓
GitHub receives the push
         ↓
Vercel detects the change
         ↓
Vercel automatically deploys
         ↓
Your site is live! 🚀
```

### Configuration Files Included

**vercel.json** - Contains deployment settings:
- Clean URLs (remove .html extensions)
- Caching headers
- URL rewrites for SPA routing
- Build configuration

### Custom Domain (Optional)
1. In Vercel Dashboard → Your Project → Settings
2. Go to "Domains"
3. Add your custom domain
4. Follow DNS instructions

### Environment Variables (If Needed Later)
1. Project Settings → Environment Variables
2. Add any sensitive data (API keys, etc.)

### Monitoring Deployments
1. Go to https://vercel.com/dashboard
2. Select your project
3. View deployment history and logs
4. See real-time deployment status

---

**That's it!** Your site is now continuously deployed. Just push to GitHub and Vercel handles the rest! 🎉
