const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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
