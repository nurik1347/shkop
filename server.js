const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const UserRouter = require('./routes/users');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use('/user', UserRouter);

const PORT = process.env.PORT || 5002

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
