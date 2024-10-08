const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://f56373550:JyO83Jk1PaZ7TE6E@cluster0.wvpmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
