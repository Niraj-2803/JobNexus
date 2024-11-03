import React, { useState } from 'react';
import '../index.css';
import '../style.css';

function JobFilter({ setFilters }) {
  const [jobType, setJobType] = useState('');

  const handleFilterChange = (newJobType) => {
    setJobType(newJobType);
    setFilters({ jobType: newJobType });
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 w-full dropdown-container">
      <div className="relative w-full">
        <select
          value={jobType}
          onChange={(e) => {
            setJobType(e.target.value);
            handleFilterChange(e.target.value);
          }}
          className="w-full px-4 py-2 rounded-lg text-gray-400 bg-[#030308] border border-gray-500"
          style={{
            zIndex: 20,
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          <option value="">All Jobs</option>
          <option value="Full-Time">Full-Time Jobs</option>
          <option value="Part-Time">Part-Time Jobs</option>
        </select>
      </div>
    </div>
  );
}

export default JobFilter;
