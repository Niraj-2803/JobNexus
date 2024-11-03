import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url('/bg-image.jpg')`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#C1B59B] text-center">Welcome to JobNexus</h2>
      <p className="text-base md:text-lg mb-8 text-gray-200 text-center max-w-md">
        Explore and find your dream job with ease
      </p>
      <button
        onClick={() => navigate('/jobs')}
        className="flex items-center gap-2 px-9 py-2 font-semibold bg-orange-500 rounded-full hover:bg-orange-600 transition duration-300">
        Explore Jobs
        <span className="bg-white text-orange-500 rounded-full px-3 py-1">&#10142;</span>
      </button>
    </div>
  );
};

export default Home;
