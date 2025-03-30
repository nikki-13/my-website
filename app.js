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
  origin: ['https://nikhilsai.me', 'https://vercel.com/nikhils-projects-d0cb4601/my-website-qa47/6tHh6FbXXJ6eyXfgfAiZGRFfBxUm'],
  methods: ['POST', 'GET'],
  credentials: true
}));
app.use(express.json());

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'somanikhilsai13@gmail.com', // Replace with your email or use environment variable
        pass: process.env.EMAIL_PASS || 'bishhbmgznglxybb' // Replace with your app password or use environment variable
    }
});

// Add a simple health check endpoint
app.get('/', (req, res) => {
    res.status(200).send('Server is running');
});

app.post('/save-contact', async (req, res) => {
    const { name, email, message } = req.body;
    const contactData = `Name: ${name}, Email: ${email}, Message: ${message}\n`;

    try {
        // Save to file (optional for production environments with ephemeral filesystem)
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
            to: process.env.OWNER_EMAIL || 'somanikhilsai13@gmail.com', // Replace with your email
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
                <p>Best regards,<br>Your Name</p>
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

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
