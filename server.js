const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const calculateRoutes = require('./routes/calculate');
const userRoutes = require('./routes/users');

// Directly define your MongoDB URI and port here
const MONGO_URI = 'mongodb+srv://nurikmirzaev1747:xoS1mBTncpjRGQJk@cluster0.7jv7r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const PORT = process.env.PORT || 5002; // Dinamik port uchun process.env.PORT qo‘shildi

const app = express();

// Connect to MongoDB using the URI defined above
connectDB(MONGO_URI);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/calculate', calculateRoutes);
app.use('/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
