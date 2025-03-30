# Backend Server Deployment Guide

This guide will help you deploy your backend server to Render.com, which offers free hosting for Node.js applications.

## Why You Need to Deploy the Backend

Your website is currently hosted on GitHub Pages, which only supports static content. The contact form on your website needs a backend server to process form submissions and send emails. By deploying your backend server separately, you can make the contact form fully functional.

## Step 1: Prepare Your Backend Code

1. Create a new GitHub repository for your backend server (e.g., `my-website-backend`)
2. Add the following files to the repository:

### app.js
```javascript
// app.js (ES Module Version)
import express from 'express';
import fs from 'fs';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors({
  origin: ['https://nikhilsai.me', 'http://localhost:5173'],
  methods: ['POST'],
  credentials: true
}));
app.use(express.json());

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
});

app.post('/save-contact', async (req, res) => {
    const { name, email, message } = req.body;
    const contactData = `Name: ${name}, Email: ${email}, Message: ${message}\n`;

    try {
        // Save to file (optional for production)
        if (process.env.SAVE_TO_FILE === 'true') {
            fs.appendFile('contacts.txt', contactData, (err) => {
                if (err) {
                    console.error('Failed to save contact to file:', err);
                    // Continue with email sending even if file save fails
                }
            });
        }

        // Send email to website owner
        const ownerMailOptions = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: process.env.OWNER_EMAIL || 'your-email@gmail.com',
            subject: 'New Contact Form Submission',
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        };

        // Send email to the person who submitted the form
        const userMailOptions = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: email,
            subject: 'Thank you for contacting us',
            html: `
                <h2>Thank you for contacting us!</h2>
                <p>Dear ${name},</p>
                <p>We have received your message and will respond soon.</p>
                <p>Here's a copy of your message:</p>
                <p>${message}</p>
                <p>Best regards,<br>Nikhil Sai</p>
            `
        };

        // Send both emails
        await transporter.sendMail(ownerMailOptions);
        await transporter.sendMail(userMailOptions);

        res.status(200).json({ message: 'Your message has been sent successfully!' });
    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({ message: 'Failed to send the message. Please try again.' });
    }
});

// Add a simple health check endpoint
app.get('/', (req, res) => {
    res.status(200).send('Server is running');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

### package.json
```json
{
  "name": "my-website-backend",
  "version": "1.0.0",
  "type": "module",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "nodemailer": "^6.10.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### .gitignore
```
node_modules/
.env
contacts.txt
```

## Step 2: Deploy to Render.com

1. Sign up for a free account at [Render.com](https://render.com/)
2. Click on "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - Name: my-website-backend (or any name you prefer)
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Select the Free plan
5. Add environment variables:
   - EMAIL_USER: somanikhilsai13@gmail.com
   - EMAIL_PASS: bishhbmgznglxybb
   - OWNER_EMAIL: somanikhilsai13@gmail.com
   - SAVE_TO_FILE: false
6. Click "Create Web Service"

## Step 3: Update Your Frontend Code

After your backend is deployed, you'll need to update the URL in your Contact.tsx file to point to your deployed backend. You've already updated the file to use a placeholder URL, but you'll need to replace it with your actual Render.com URL.

1. Get your Render.com URL (it will look like `https://my-website-backend.onrender.com`)
2. Update the URL in your Contact.tsx file:

```typescript
const response = await axios.post('https://your-backend-server.onrender.com/save-contact', form);
// Replace with your actual URL:
// const response = await axios.post('https://my-website-backend.onrender.com/save-contact', form);
```

3. Commit and push these changes to GitHub
4. Redeploy your frontend with `npm run deploy`

## Testing Your Deployment

After completing these steps, your contact form should be fully functional. Test it by:

1. Visiting your website at https://nikhilsai.me
2. Navigating to the Contact page
3. Filling out the form and submitting it
4. Checking that you receive the confirmation email

## Troubleshooting

- If you encounter CORS errors, make sure your backend's CORS configuration includes your website's domain
- If emails aren't being sent, check your Gmail settings to ensure less secure apps are allowed or that you're using an app password
- Check the Render.com logs for any server errors
