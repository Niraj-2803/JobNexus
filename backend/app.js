const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const jobRoutes = require('./api/jobController');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

app.use(cors());
app.use(express.json());

app.use('/', jobRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

