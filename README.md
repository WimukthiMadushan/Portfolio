# Portfolio

## Local SMTP Server for Contact Form

This repository includes a small example SMTP server to allow sending emails from the contact form using Gmail (via Nodemailer).

Steps to run the server locally (PowerShell):

1. Create an app password for your Gmail account (recommended) and copy the value.

2. Copy `.env.example` to `.env` and set the values:

```powershell
copy .env.example .env
# then edit .env and set GMAIL_USER and GMAIL_PASS
```

3. Install server dependencies and run the server:

```powershell
cd server
npm init -y
npm install express cors nodemailer dotenv
node sendEmail.js
```

4. Start your frontend (Vite) dev server as usual (`npm run dev`). The contact form will POST to `http://localhost:4000/send-email`.

Notes:

- Use an App Password or OAuth for Gmail; normal account passwords will usually be rejected.
- Do not commit your `.env` file.
