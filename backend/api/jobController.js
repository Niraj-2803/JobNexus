const express = require('express');
const router = express.Router();
const { scrapeIndeedJobs, scrapeGlassdoorJobs } = require('../services/puppeteerService');

let jobListings = [];

router.get('/', async (req, res) => {
    const { jobType, location } = req.query;

    if (jobListings.length === 0) {
        const indeedJobs = await scrapeIndeedJobs();
        const glassdoorJobs = await scrapeGlassdoorJobs();
        jobListings = [...indeedJobs, ...glassdoorJobs];
    }

    let filteredJobs = jobListings;

    if (jobType) {
        filteredJobs = filteredJobs.filter(job => job.jobType.toLowerCase() === jobType.toLowerCase());
    }

    if (location) {
        filteredJobs = filteredJobs.filter(job => job.location.toLowerCase().includes(location.toLowerCase()));
    }

    return res.json(filteredJobs);
});

module.exports = router;
