# 📧 Email Setup Guide for Portfolio Contact Form

## 🚀 Quick Setup Instructions

Your contact form is now ready to send real emails! Follow these steps to complete the setup:

### **Step 1: Create EmailJS Account**
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### **Step 2: Connect Your Email Service**
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail** (recommended)
4. Follow the OAuth setup to connect your `vinay.sagar.btech@gmail.com` account

### **Step 3: Create Email Template**
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```html
Subject: New Portfolio Contact - {{from_name}}

From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Project Type: {{project_type}}
Budget: {{budget}}
Timeline: {{timeline}}

Message:
{{message}}

---
Submission Details:
- ID: {{submission_id}}
- Time: {{submission_time}}
- Source: {{referrer_source}}
- Newsletter Signup: {{newsletter_signup}}
- User Agent: {{user_agent}}
```

4. Save the template and note down the **Template ID**

### **Step 4: Configure the Code**
1. Open `assets/js/script.js`
2. Replace the placeholder values:

```javascript
// Line 300: Replace with your EmailJS Public Key
emailjs.init('YOUR_PUBLIC_KEY_HERE');

// Line 340: Replace with your Service ID and Template ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

### **Step 5: Get Your IDs**
- **Public Key**: Found in EmailJS dashboard → Account → General
- **Service ID**: Found in Email Services section
- **Template ID**: Found in Email Templates section

### **Step 6: Test the Form**
1. Open your portfolio
2. Fill out the contact form
3. Submit it
4. Check your `vinay.sagar.btech@gmail.com` for the email

## 🎯 Features Included

✅ **Real Email Delivery** - Direct to vinay.sagar.btech@gmail.com
✅ **Professional Templates** - Clean, formatted emails
✅ **Submission Tracking** - Unique IDs for each submission  
✅ **Error Handling** - Graceful failure management
✅ **Success Animations** - Confetti and notifications
✅ **Mobile Optimized** - Perfect on all devices
✅ **Spam Protection** - Built-in rate limiting
✅ **Analytics** - Track submission metadata

## 🔧 Advanced Configuration

### Custom Email Template Variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{phone}}` - Phone number
- `{{project_type}}` - Selected project type
- `{{budget}}` - Project budget
- `{{timeline}}` - Expected timeline
- `{{message}}` - Main message content
- `{{submission_id}}` - Unique submission identifier
- `{{submission_time}}` - When the form was submitted
- `{{referrer_source}}` - Where the visitor came from
- `{{newsletter_signup}}` - Newsletter preference
- `{{user_agent}}` - Browser/device information

### Rate Limiting (Optional):
EmailJS free plan includes:
- 200 emails/month
- 50 emails/day
- Built-in spam protection

## 🆘 Troubleshooting

**Problem**: Emails not sending
- **Solution**: Check your EmailJS service is connected properly
- **Check**: Console for error messages

**Problem**: Emails going to spam
- **Solution**: Use proper subject line and sender verification

**Problem**: Template not working
- **Solution**: Ensure all variable names match exactly

## 📞 Support

If you need help setting this up:
1. Check EmailJS documentation
2. Verify all IDs are correct
3. Test with a simple template first
4. Check browser console for errors

**Your form is now enterprise-ready with real email functionality!** 🎉