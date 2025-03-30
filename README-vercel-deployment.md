# Vercel Deployment Guide

This guide will help you deploy both your frontend and backend to Vercel.

## Why Deploy to Vercel?

Vercel is a cloud platform for static sites and serverless functions that enables developers to host websites and web services that deploy instantly and scale automatically – all without any configuration.

## Step 1: Prepare Your Project

You've already completed this step! Your project is now configured for Vercel deployment with:

1. A `vercel.json` file for the backend configuration
2. Environment variables set up in `.env` and `.env.local`
3. The Contact component updated to use the API URL from environment variables

## Step 2: Deploy the Backend

1. **Create a new GitHub repository for your backend** (optional but recommended)
   - This step is optional because you can deploy directly from your local files
   - If you choose to create a separate repo, copy `app.js`, `package.json`, and `vercel.json` to it

2. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

3. **Login to Vercel**
   ```bash
   vercel login
   ```

4. **Deploy the Backend**
   - Navigate to your project directory (or backend directory if separated)
   ```bash
   vercel
   ```
   - Follow the prompts:
     - Set up and deploy? `y`
     - Which scope? Select your account
     - Link to existing project? `n`
     - What's your project name? `my-website-backend` (or any name you prefer)
     - In which directory is your code located? `./` (or specify the backend directory)
     - Want to override settings? `n`

5. **Set Environment Variables**
   - After deployment, go to the Vercel dashboard
   - Select your backend project
   - Go to "Settings" > "Environment Variables"
   - Add the following variables:
     - `EMAIL_USER`: somanikhilsai13@gmail.com
     - `EMAIL_PASS`: bishhbmgznglxybb
     - `OWNER_EMAIL`: somanikhilsai13@gmail.com
     - `SAVE_TO_FILE`: false

6. **Redeploy with Environment Variables**
   ```bash
   vercel --prod
   ```

7. **Note Your Backend URL**
   - After deployment, Vercel will provide a URL for your backend
   - It will look something like `https://my-website-backend.vercel.app`
   - Copy this URL for the next step

## Step 3: Update Frontend Configuration

1. **Update `.env.local` with your backend URL**
   ```
   VITE_API_URL=https://your-backend-url.vercel.app
   ```
   Replace `https://your-backend-url.vercel.app` with your actual backend URL from Step 2.

2. **Update CORS Configuration in Backend**
   - If you've already deployed the backend, you'll need to update the CORS configuration to allow requests from your frontend domain
   - Edit `app.js` to include your frontend domain in the CORS configuration:
   ```javascript
   app.use(cors({
     origin: ['https://nikhilsai.me', 'http://localhost:5173', 'https://your-frontend-url.vercel.app'],
     methods: ['POST', 'GET'],
     credentials: true
   }));
   ```
   - Redeploy the backend with `vercel --prod`

## Step 4: Deploy the Frontend

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. **Deploy the Frontend**
   ```bash
   vercel
   ```
   - Follow the prompts similar to the backend deployment
   - When asked for the build command, use `npm run build`
   - When asked for the output directory, use `dist`

3. **Set Environment Variables**
   - After deployment, go to the Vercel dashboard
   - Select your frontend project
   - Go to "Settings" > "Environment Variables"
   - Add the environment variable:
     - `VITE_API_URL`: https://your-backend-url.vercel.app

4. **Redeploy with Environment Variables**
   ```bash
   vercel --prod
   ```

## Step 5: Test Your Deployment

1. Visit your deployed frontend URL
2. Navigate to the Contact page
3. Fill out the form and submit it
4. Check that you receive the confirmation email
5. Check that the website owner receives the notification email

## Troubleshooting

- **CORS Errors**: If you see CORS errors in the browser console, make sure your backend's CORS configuration includes your frontend domain
- **Email Issues**: If emails aren't being sent, check the Vercel logs for your backend to see if there are any errors
- **404 Errors**: If you get 404 errors when submitting the form, make sure the API URL in your frontend is correct

## Automating Deployments

For future updates, you can connect your GitHub repositories to Vercel for automatic deployments:

1. Push your code to GitHub
2. In the Vercel dashboard, go to your project settings
3. Under "Git Integration", connect your repository
4. Configure the build settings
5. Now, whenever you push changes to your repository, Vercel will automatically deploy them

## Conclusion

Your website is now fully deployed on Vercel with a working contact form! The frontend and backend are hosted separately but work together seamlessly.
