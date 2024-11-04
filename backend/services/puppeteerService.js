const puppeteer = require('puppeteer');

const USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
];


const getRandomJobType = () => {
    return Math.random() < 0.75 ? 'Full-Time' : 'Part-Time'; //As there were no specification of type of Job (full/part time) on websites. I decided to assign them randomly.
};

const scrapeIndeedJobs = async () => {
    const url = 'https://in.indeed.com/jobs?q=software+jobs&l=&from=searchOnDesktopSerp&vjk=713b4c2dff769d66';
    const browser = await puppeteer.launch({ 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();

    const randomUserAgent = USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
    await page.setUserAgent(randomUserAgent);

    await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.indeed.com/',
        'Connection': 'keep-alive',
    });

    await page.goto(url, { waitUntil: 'networkidle2' });

    const jobs = await page.evaluate(() => {
        const jobListings = [];
        const jobElements = document.querySelectorAll('li.css-1ac2h1w.eu4oa1w0');

        jobElements.forEach((element) => {
            const jobTitle = element.querySelector('h2.jobTitle a span')?.innerText || '';
            const companyName = element.querySelector('span[data-testid="company-name"]')?.innerText || '';
            const location = element.querySelector('div[data-testid="text-location"]')?.innerText || '';

            const jobDescription = [];
            const descriptionElements = element.querySelector('div.css-156d248.eu4oa1w0 ul');

            if (descriptionElements) {
                descriptionElements.querySelectorAll('li').forEach((li) => {
                    jobDescription.push(li.innerText);
                });
            }

            const jobDescriptionText = jobDescription.join(' ');

            if (jobTitle) {
                const jobType = Math.random() < 0.75 ? 'Full-Time' : 'Part-Time';
                jobListings.push({ jobTitle, companyName, location, jobDescription: jobDescriptionText, jobType });
            }
        });

        return jobListings;
    });

    await browser.close();
    return jobs;
};

const scrapeGlassdoorJobs = async () => {
    const url = 'https://www.glassdoor.co.in/Job/software-jobs-SRCH_KO0,8.htm';
    const browser = await puppeteer.launch({ 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    const randomUserAgent = USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
    await page.setUserAgent(randomUserAgent);

    await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.glassdoor.com/',
        'Connection': 'keep-alive',
    });

    await page.goto(url, { waitUntil: 'networkidle2' });

    const jobs = await page.evaluate(() => {
        const jobListings = [];
        const jobElements = document.querySelectorAll('.JobsList_jobListItem__wjTHv');
        
        jobElements.forEach((element) => {
            const jobTitle = element.querySelector('.JobCard_jobTitle___7I6y')?.innerText || '';
            const companyName = element.querySelector('.EmployerProfile_compactEmployerName__LE242')?.innerText || '';
            const location = element.querySelector('.JobCard_location__rCz3x')?.innerText || '';
            const jobDescriptionElement = document.querySelector('.JobDetails_jobDescription');
            const jobDescription = jobDescriptionElement ? jobDescriptionElement.innerText.trim() : 'No description available';
        
            if (jobTitle) {
                const jobType = Math.random() < 0.75 ? 'Full-Time' : 'Part-Time';
                jobListings.push({ jobTitle, companyName, location, jobDescription, jobType });
            }
        });

        return jobListings;
    });
    await browser.close();
    return jobs;
};

module.exports = {
    scrapeIndeedJobs,
    scrapeGlassdoorJobs,
};
