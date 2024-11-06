import axios from 'axios';

const API_BASE_URL = 'https://jobnexus-4x2g.onrender.com';

export const fetchJobs = async (jobType = '', location = '') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/`, {
      params: { jobType, location },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};
