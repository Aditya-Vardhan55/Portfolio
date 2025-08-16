# EmailJS Setup Guide for Contact Form

Your contact form is now functional but needs EmailJS configuration to send emails. Follow these steps:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your email account
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

Hello Aditya,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (starts with something like "user_...")
3. Copy this key

## Step 5: Update Your Code

1. Open `src/components/Contact.tsx`
2. Find these lines around line 28-30:
```javascript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

3. Replace with your actual values:
```javascript
const serviceId = 'service_abc123';      // Your actual service ID
const templateId = 'template_xyz789';    // Your actual template ID
const publicKey = 'user_def456';         // Your actual public key
```

## Step 6: Test the Form

1. Save the file and the dev server will automatically reload
2. Fill out the contact form on your website
3. Click "Let's Work Together"
4. Check your email (vardhanaditya04.aec@gmail.com) for the message

## 🔧 Troubleshooting

**Form not sending emails?**
- Check browser console for error messages
- Verify all three IDs are correct in the code
- Ensure your EmailJS service is active
- Check EmailJS dashboard for delivery status

**Emails going to spam?**
- This is normal for new EmailJS accounts
- Check your spam folder
- EmailJS reputation improves over time

**Rate limiting?**
- Free plan allows 200 emails/month
- Upgrade to paid plan if needed

## 🎯 Current Form Features

✅ **Form validation** - All fields are required
✅ **Loading states** - Shows "Sending..." with spinner
✅ **Success feedback** - Green message when email sent
✅ **Error handling** - Red message if sending fails
✅ **Form reset** - Clears form after successful submission
✅ **Responsive design** - Works on all devices

Once you complete the EmailJS setup, your contact form will be fully functional and you'll receive emails whenever someone contacts you through your portfolio!