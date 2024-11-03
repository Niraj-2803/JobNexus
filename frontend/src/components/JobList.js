import React from 'react';
import { FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';

function JobList({ jobs }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.length > 0 ? (
        jobs.map((job, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 text-white rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-l font-bold mb-2 text-[#76ABAE] text-left">{job.jobTitle}</h2>

            <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
              <div className="flex items-center">
                <FaBuilding className="mr-1" />
                <span>{job.companyName}</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-1" />
                <span>{job.location}</span>
              </div>
            </div>
            <p className="text-sm text-justify text-gray-300 mb-4 line-clamp-3">{job.jobDescription}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs bg-gray-700 bg-opacity-50 px-2 py-1 rounded">{job.jobType}</span>
              <button className="bg-[#2b8e93] text-white px-4 py-1 rounded-lg hover:bg-[#76ABAE] transition duration-300">
                Apply
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-400">Scraping Jobs...</p>
      )}
    </div>
  );
}

export default JobList;
