// src/components/SignIn.js
import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-lg w-full hover:bg-black">Sign In</button>
        </form>
        <p className="mt-4 text-center">Don't have an account? <Link to="/sign-up" className="text-blue-500">Join Now</Link></p>
      </div>
    </div>
  );
};

export default SignIn;
