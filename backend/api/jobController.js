const express = require('express');
const router = express.Router();
//const { scrapeIndeedJobs, scrapeGlassdoorJobs } = require('../services/puppeteerService');
const Job = require('../models/Jobs')

// Endpoint to get job listings
router.get('/', async (req, res) => {
    const { jobType, location } = req.query;

    let jobListings;

    // Fetch data from MongoDB if available
    jobListings = await Job.find();

    // Filter data if query params are provided
    if (jobType) {
        jobListings = jobListings.filter(job => job.jobType.toLowerCase() === jobType.toLowerCase());
    }

    if (location) {
        jobListings = jobListings.filter(job => job.location.toLowerCase().includes(location.toLowerCase()));
    }

    return res.json(jobListings);
});

/*
// Endpoint to scrape jobs and store in MongoDB
router.get('/scrape', async (req, res) => {
    try {
        // Scrape jobs
        const indeedJobs = await scrapeIndeedJobs();
        const glassdoorJobs = await scrapeGlassdoorJobs();

        // Add source for differentiation
        indeedJobs.forEach(job => job.source = 'Indeed');
        glassdoorJobs.forEach(job => job.source = 'Glassdoor');

        // Combine job listings and store in MongoDB
        const allJobs = [...indeedJobs, ...glassdoorJobs];

        // Insert jobs into MongoDB
        await Job.insertMany(allJobs);

        res.status(201).json({ message: 'Scraped and saved jobs to database', jobs: allJobs });
    } catch (error) {
        console.error('Error scraping or saving jobs:', error);
        res.status(500).json({ error: 'Failed to scrape jobs' });
    }
});
*/

module.exports = router;
