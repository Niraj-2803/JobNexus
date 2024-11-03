import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const fetchJobs = async (jobType = '', location = '') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/jobs`, {
      params: { jobType, location },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};
