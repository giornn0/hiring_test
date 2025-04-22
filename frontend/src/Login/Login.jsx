import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { APP_NAME, BASE_API_URL } from '../constants';
import StarBackground from './StarBackground';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_API_URL}/api/users/login`, formData);

      onLogin(response.data);
      navigate('/play');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError('User not found. Please register first.');
      } else {
        setError(error.response?.data.message || 'Error logging in');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 overflow-hidden">


      <StarBackground />

      <div className="relative z-10 w-full max-w-lg mx-4">
        <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-purple-500 border-opacity-30">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              style={{ fontFamily: '"Press Start 2P", cursive' }}>
              {APP_NAME}
            </h1>
            <p className="text-purple-200 text-sm sm:text-base">Match the planets across the galaxy!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-purple-100 mb-1">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-purple-500 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
                placeholder="Username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-purple-100 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-purple-500 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
              style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.9rem' }}
            >
              LAUNCH
            </button>
          </form>

          <div className="mt-6 text-center">
            <button onClick={handleRegisterRedirect} className="text-purple-300 hover:text-purple-100 text-sm font-medium transition-colors">
              Need an account? Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );;
};

export default Login;
