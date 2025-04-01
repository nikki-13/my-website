# Contact Form Email Functionality

This document explains how to set up and use the contact form email functionality for your website.

## Setup Instructions

### 1. Email Configuration

The contact form is configured to send emails using Gmail. You need to set up your Gmail account to work with the application:

1. **Create App Password for Gmail**:
   - Go to your Google Account settings: https://myaccount.google.com/
   - Navigate to "Security" > "2-Step Verification" (make sure it's enabled)
   - Scroll down and click on "App passwords"
   - Select "Mail" as the app and "Other" as the device (name it something like "My Website")
   - Click "Generate" and copy the 16-character password

2. **Update .env File**:
   Edit the `.env` file in the root directory of your project with your email credentials:
   ```
   EMAIL_USER=your-gmail-address@gmail.com
   EMAIL_PASS=your-16-character-app-password
   OWNER_EMAIL=email-to-receive-notifications@example.com
   ```

### 2. Running the Servers

You have multiple options to run the application:

#### Option 1: Run both servers with a single command

```bash
npm run start
```

This will start both the frontend and backend servers simultaneously.

#### Option 2: Run servers separately

To run only the backend server:

```bash
npm run server
```

To run only the frontend development server:

```bash
npm run dev
```

The backend server runs on http://localhost:5000 and the frontend development server typically runs on http://localhost:5173.

## How It Works

When a user submits the contact form:

1. The form data is sent to the server at the `/save-contact` endpoint
2. The server saves the contact information to a `contacts.txt` file (if SAVE_TO_FILE is set to 'true')
3. The server sends an email to you (the website owner) with the contact details

## Customization

You can customize the email template by editing the HTML in the `app.js` file:

- `ownerMailOptions` - The email sent to you with contact form details

## Troubleshooting

If emails are not being sent:

1. Check that your Gmail app password is correct
2. Make sure 2-Step Verification is enabled on your Google account
3. Check the server console for any error messages
4. Verify that your Gmail account doesn't have any security restrictions blocking the application
