const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files (resume.pdf, etc.) from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Dedicated resume route — redirects to the static file
app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resume.pdf'));
});

// Basic health check route
app.get('/api/health', (req, res) => {
    res.status(200).json({ message: 'Server is healthy' });
});

// Mock Contact endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received contact form submission from ${name} (${email}): ${message}`);
    
    // Here you would integrate nodemailer or another email service
    // to actually send the email to subhankarsahoo615@gmail.com
    
    res.status(200).json({ success: true, message: 'Message received successfully.' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
