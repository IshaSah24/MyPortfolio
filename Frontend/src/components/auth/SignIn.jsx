import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/features/authSlice';
import { motion } from 'framer-motion';

const SignIn = ({ switchMode }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(signIn(formData));
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
      {error && (
        <div className="bg-red-500/20 text-red-300 p-3 rounded-lg mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <motion.button
          type="submit"
          className="w-full p-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </motion.button>
      </form>
      <p className="text-center mt-4 text-gray-400">
        Don't have an account?{' '}
        <button
          onClick={switchMode}
          className="text-blue-500 hover:text-blue-400"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default SignIn;
