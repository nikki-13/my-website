# Website Deployment Guide

This guide will help you deploy your website with a working contact form.

## Overview

Your website consists of two parts:
1. **Frontend**: The React website hosted on GitHub Pages
2. **Backend**: A Node.js server that handles the contact form submissions

## Step 1: Deploy the Backend

### Option 1: Deploy to Render.com (Recommended)

1. Create a GitHub repository for the backend code
   - Copy all files from `/tmp/my-website-backend` to your new repository
   - Push the repository to GitHub

2. Sign up for a free account at [Render.com](https://render.com/)

3. Deploy the backend:
   - Click on "New +" and select "Web Service"
   - Connect your GitHub repository
   - Configure the service:
     - Name: my-website-backend (or any name you prefer)
     - Environment: Node
     - Build Command: `npm install`
     - Start Command: `npm start`
     - Select the Free plan
   - Add environment variables:
     - EMAIL_USER: somanikhilsai13@gmail.com
     - EMAIL_PASS: bishhbmgznglxybb
     - OWNER_EMAIL: somanikhilsai13@gmail.com
     - SAVE_TO_FILE: false
   - Click "Create Web Service"

4. Note the URL of your deployed backend (e.g., https://my-website-backend.onrender.com)

### Option 2: Deploy to Vercel

If you prefer to use Vercel, follow the instructions in `README-vercel-deployment.md`.

## Step 2: Update Frontend Configuration

1. Update the `.env.production` file with your backend URL:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com
   ```
   Replace `https://your-backend-url.onrender.com` with your actual backend URL from Step 1.

2. Build and deploy the frontend:
   ```
   npm run build
   npm run deploy
   ```

## Step 3: Test the Deployment

1. Visit your website at https://nikhilsai.me
2. Navigate to the Contact page
3. Fill out the form and submit it
4. Verify that you receive the confirmation message and email notification

## Troubleshooting

### CORS Errors

If you see CORS errors in the browser console:

1. Check that your backend's CORS configuration includes your frontend domain
2. Update the `allowedOrigins` array in `app.js` to include your frontend domain
3. Redeploy the backend

### Email Issues

If emails aren't being sent:

1. Check that your Gmail app password is correct
2. Make sure 2-Step Verification is enabled on your Google account
3. Check the server logs for any error messages

### 404 Errors

If you get 404 errors when submitting the form:

1. Make sure the API URL in your frontend is correct
2. Check that the backend server is running
3. Verify that the `/save-contact` endpoint is accessible
