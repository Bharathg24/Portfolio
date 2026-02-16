# Email Templates for EmailJS

This folder contains HTML email templates for the contact form.

## Templates

### 1. admin-notification.html
**Template ID:** `template_1tescpa`  
**Purpose:** Notification sent to admin (bharathguna144@gmail.com) when someone submits the contact form

**Variables used:**
- `{{name}}` - Name of the person who sent the message
- `{{email}}` - Email address of the sender
- `{{mobile}}` - Mobile number of the sender
- `{{message}}` - The message content
- `{{time}}` - Timestamp (India Standard Time)

### 2. user-confirmation.html
**Template ID:** `template_jz2h3yb`  
**Purpose:** Confirmation email sent to the user after they submit the contact form

**Variables used:**
- `{{name}}` - Name of the person who sent the message
- `{{email}}` - Email address of the sender
- `{{mobile}}` - Mobile number of the sender
- `{{message}}` - The message content

## EmailJS Configuration

- **Service ID:** `service_uj1xnlx`
- **Public Key:** `pjZINLDJidXJFx3zT`
- **Admin Email:** bharathguna144@gmail.com

## How to Use

1. Copy the HTML content from these files
2. Go to your EmailJS dashboard (https://dashboard.emailjs.com/)
3. Navigate to Email Templates
4. Create or edit templates with the corresponding Template IDs
5. Paste the HTML code into the template editor
6. Make sure all variables ({{name}}, {{email}}, etc.) are properly mapped

## Design Features

Both templates feature:
- Modern dark theme with cyan accents
- Responsive design for mobile devices
- Professional layout
- Gradient backgrounds
- Clean typography using Inter font
- Smooth hover effects on buttons
