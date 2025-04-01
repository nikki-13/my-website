import express from 'express';
import fs from 'fs';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

// CORS Middleware (Fix for Preflight Requests)
const allowedOrigins = [
    'https://nikhilsai.me', 'http://localhost:5001',"http://localhost:5173/"];

app.use(cors({
    origin: allowedOrigins,
    methods: ['POST', 'GET', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Access-Control-Allow-Origin'],
    optionsSuccessStatus: 200
}));

// Explicitly handle OPTIONS requests for preflight
app.options('*', cors());

// Middleware to parse JSON requests
app.use(express.json());

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,  // Use environment variable
        pass: process.env.EMAIL_PASS   // Use environment variable
    }
});

// Health Check Endpoint
app.get('/', (req, res) => {
    res.status(200).send('Server is running');
});

// Contact Form Endpoint
app.post('/save-contact', async (req, res) => {
    // Set CORS headers specifically for nikhilsai.me
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
        return res.sendStatus(200); // Preflight request response
    }

    const { name, email, message } = req.body;
    const contactData = `Name: ${name}, Email: ${email}, Message: ${message}\n`;

    try {
        // Save contact details to a file (Optional)
        if (process.env.SAVE_TO_FILE === 'true') {
            fs.appendFile('contacts.txt', contactData, (err) => {
                if (err) console.error('Failed to save contact to file:', err);
            });
        }

        // Send email to website owner
        const ownerMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.OWNER_EMAIL, 
            subject: 'New Contact Form Submission',
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        };

        // Send email to website owner only
        await transporter.sendMail(ownerMailOptions);

        res.status(200).json({ message: 'Your message has been sent successfully!' });
    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({ message: 'Failed to send the message. Please try again.' });
    }
});

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
