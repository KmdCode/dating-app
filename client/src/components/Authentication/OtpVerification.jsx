import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OtpVerification = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [otp, setOtp] = useState();
    const {email} = location.state || {}
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

     const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/v1/auth/verify', {
                email,
                otp: otp
            });

            if (res.data.status === 'success') {
                setMessage(res.data.message);
                setError('');
                navigate('/create-profile')
            } else {
                setError(res.data.message);
                setMessage('');
            }
        } catch (err) {
            setError('An error occurred while verifying the OTP.');
            setMessage('');
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">OTP Verification</h2>
                 {message && <p className="text-green-600 text-center mb-4">{message}</p>}
                {error && <p className="text-red-600 text-center mb-4">{error}</p>} 
                <form  onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="otp" className="block text-gray-700 font-semibold mb-2">
                            Enter OTP
                        </label>
                        <input
                            type="number"
                            id="otp"
                            value={otp}
                            onChange={handleOtpChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Verify OTP
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OtpVerification;
