import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JobFilter from './JobFilter';
import JobList from './JobList';
import { fetchJobs } from '../services/jobService';

const Jobs = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ jobType: '', location: '' });
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const loadJobs = async () => {
      const fetchedJobs = await fetchJobs(filters.jobType, filters.location);
      setJobs(fetchedJobs);
    };
    loadJobs();
  }, [filters]);

  return (
    <div className="p-5 text-center text-white">
      <button onClick={() => navigate('/')} className="absolute top-5 left-5 text-sm text-[#76ABAE] hover:underline">
        &#8592; Back
      </button>
      <button onClick={() => navigate('/')} className="absolute top-3 right-20 text-sm text-gray-300 hover:text-[#8e8571] border border-[#8e8571] px-2 py-1 rounded transition duration-300">
        Home
      </button>
      <a href="#about" className="absolute top-3 right-4 text-sm text-gray-300 hover:text-[#8e8571] border border-[#8e8571] px-2 py-1 rounded transition duration-300">
        About
      </a>

      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#9f957f] mb-4">Explore Job Listings</h2>
        <p className="text-base md:text-lg mb-6 text-gray-300">Find jobs that match your skills and location.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <JobFilter setFilters={setFilters} dropdownStyle="bg-[#D4B783] text-gray-800 w-full" />
        </div>
        <div className="w-full md:w-1/3 md:ml-auto mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search by location..."
            className="w-full px-4 py-2 rounded-lg bg-[#060417] border border-gray-500"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          />
        </div>
      </div>

      <JobList jobs={jobs} />
    </div>
  );
};

export default Jobs;
