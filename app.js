// app.js (ES Module Version)
import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/save-contact', (req, res) => {
    const { name, email, message } = req.body;
    const contactData = `Name: ${name}, Email: ${email}, Message: ${message}\n`;

    fs.appendFile('contacts.txt', contactData, (err) => {
        if (err) {
            console.error('Failed to save contact:', err);
            return res.status(500).json({ message: 'Error saving contact' });
        }
        res.status(200).json({ message: 'Contact saved successfully!' });
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});