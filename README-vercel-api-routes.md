# Vercel API Routes for Email Sending

This guide explains how to use Vercel API Routes for sending emails from your contact form.

## What Are Vercel API Routes?

Vercel API Routes allow you to create serverless functions that run on Vercel's infrastructure. These functions can handle API requests, process data, and interact with external services like email providers.

## How It Works

1. When a user submits the contact form, the form data is sent to the `/api/send-email` endpoint
2. The serverless function at that endpoint processes the request and sends an email using nodemailer
3. The function returns a response to the client indicating success or failure

## Files Implemented

1. `api/send-email.js` - The serverless function that handles email sending
2. Updated `vercel.json` - Configuration for Vercel deployment
3. Updated `src/pages/Contact.tsx` - Modified to use the new API endpoint

## Deployment Steps

### 1. Set Up Environment Variables in Vercel

When deploying to Vercel, you need to set up the following environment variables:

- `EMAIL_USER`: Your Gmail address (e.g., somanikhilsai13@gmail.com)
- `EMAIL_PASS`: Your Gmail app password
- `OWNER_EMAIL`: Email address to receive contact form submissions

To set these variables:

1. Go to your Vercel dashboard
2. Select your project
3. Go to "Settings" > "Environment Variables"
4. Add each variable with its value
5. Make sure to select "Production" and "Preview" environments

### 2. Deploy to Vercel

You can deploy your project to Vercel using the Vercel CLI or by connecting your GitHub repository:

#### Using Vercel CLI

```bash
# Install Vercel CLI if you haven't already
npm install -g vercel

# Login to Vercel
vercel login

# Deploy the project
vercel --prod
```

#### Using GitHub Integration

1. Push your code to a GitHub repository
2. Go to the Vercel dashboard and click "New Project"
3. Import your GitHub repository
4. Configure the build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add the environment variables mentioned above
6. Click "Deploy"

## Testing Your Deployment

After deployment:

1. Visit your deployed website
2. Navigate to the Contact page
3. Fill out the form and submit it
4. Check that you receive the confirmation message
5. Verify that the email is sent to the specified owner email

## Advantages of This Approach

1. **Simplified Architecture**: No need for a separate backend server
2. **Cost-Effective**: Serverless functions only run when needed
3. **Scalable**: Automatically scales with traffic
4. **Secure**: Environment variables are securely stored by Vercel
5. **Integrated**: Everything is deployed and managed in one place

## Troubleshooting

### CORS Issues

If you encounter CORS issues, check that the API route is properly setting CORS headers. The current implementation should handle this automatically.

### Email Not Sending

If emails aren't being sent:

1. Check Vercel logs for any errors
2. Verify that environment variables are correctly set
3. Make sure your Gmail account allows less secure apps or is set up with an app password

### 404 Errors

If you get 404 errors when submitting the form, make sure:

1. The API route path is correct in the Contact component
2. The vercel.json configuration is properly routing API requests
