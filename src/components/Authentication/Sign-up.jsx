// src/components/SignIn.js
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    
    <div className="relative h-screen">
    <div className="absolute inset-0 bg-landing"></div>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 flex flex-col justify-center items-center h-full">
      <div className="flex flex-col items-center mb-8 ">
        <img src="logo.png" alt="" className="w-36 h-36" />
        <h1 className="font-edu-hand text-white text-5xl font-bold ">Unimate</h1>
      </div>        
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
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input type="password" className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <Link to="/create-profile"><button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-lg w-full hover:bg-black">Sign Up</button></Link>          
      </form>
      <p className="mt-4 text-center">Already have an account? <Link to="/sign-in" className="text-blue-500">Login</Link></p>
    </div>
  </div>
</div>
  );
};

export default SignUp;
