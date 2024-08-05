import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center mb-8">
        <img src="ffff2.jpg" alt="" className="w-60 h-60 mb-4" />
        <h1 className="font-edu-hand  text-white text-5xl font-bold mb-4">Unimate</h1>
      </div>
      <div className="flex space-x-4">
        <Link to="/sign-in">
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black">Sign In</button>
        </Link>
        <Link to="/sign-up">
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
