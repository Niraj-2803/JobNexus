const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobTitle: String,
    companyName: String,
    location: String,
    jobDescription: String,
    jobType: String,
    source: String,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
