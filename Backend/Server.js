const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect('mongodb+srv://alok08996:alok123@recipe-finder-app.a4oes.mongodb.net/')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
  });

// Mongoose Schema and Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const contact = mongoose.model('Contact', contactSchema);

// Routes
app.post('/api/contact', async (req, res) => {
  const { name, email, number, subject, message } = req.body;

  try {
    const newMessage = new contact({ name, email, number, subject, message });
    await newMessage.save();
    res.status(201).json({ message: 'Message saved successfully!' });
  } catch (err) {
    console.error('Error saving message:', err);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
