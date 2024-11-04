const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jobRoutes = require('./api/jobController');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/', jobRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
