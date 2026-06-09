const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'HealthConnect AI Backend is running' });
});

// Authentication Routes
app.post('/api/auth/login', (req, res) => {
  const { email, password, role } = req.body;
  // TODO: Validate credentials against database
  const token = jwt.sign(
    { id: 'user123', email, role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE }
  );
  res.json({ token, user: { id: 'user123', email, role } });
});

app.post('/api/auth/signup', (req, res) => {
  const { email, password, name, role } = req.body;
  // TODO: Create user in database
  res.json({ message: 'User created successfully' });
});

// AI Chat Routes
app.post('/api/chat/message', (req, res) => {
  const { message } = req.body;
  // TODO: Integrate with OpenAI API
  res.json({ response: 'AI response placeholder' });
});

// Symptom Checker Routes
app.post('/api/symptom-checker', (req, res) => {
  const { age, gender, symptoms, duration, conditions } = req.body;
  // TODO: AI analysis
  res.json({
    severity: 'yellow',
    conditions: ['Common condition'],
    recommendations: ['Rest', 'Hydrate'],
  });
});

// Doctor Routes
app.get('/api/doctors', (req, res) => {
  // TODO: Fetch doctors from database
  res.json({ doctors: [] });
});

app.get('/api/doctors/:id', (req, res) => {
  // TODO: Fetch specific doctor
  res.json({ doctor: {} });
});

// Appointment Routes
app.post('/api/appointments', (req, res) => {
  // TODO: Create appointment
  res.json({ appointment: {} });
});

app.get('/api/appointments', (req, res) => {
  // TODO: Fetch user appointments
  res.json({ appointments: [] });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`HealthConnect AI Backend running on port ${PORT}`);
});
