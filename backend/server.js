const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const nodemailer = require('nodemailer');
const Contact = require('./models/contact'); // Import the contact model

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB:', err));

// POST route to handle contact form submission
app.post('/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Validation: Ensure all fields are provided
    if (!name || !email || !phone || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
        // Save the contact data to MongoDB
        const newContact = new Contact({ name, email, phone, message });
        await newContact.save();

        // Set up Nodemailer to send an email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECIPIENT_EMAIL, // Send the email to the recipient
            subject: 'New Contact Form Submission',
            text: `
                You have received a new message from the contact form:

                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ success: false, message: 'Failed to send email.' });
            }
            console.log('Email sent:', info.response);
            res.status(200).json({ success: true, message: 'Message sent successfully!' });
        });

    } catch (err) {
        console.error('Error saving contact data:', err);
        res.status(500).json({ success: false, message: 'Failed to save contact data.' });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
