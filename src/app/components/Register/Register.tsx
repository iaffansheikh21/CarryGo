'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState({ name: '',email: '', password: '', repeatPassword:'' });

  const validateForm = () => {
    let valid = true;
    const newErrors = {name: '',email: '', password: '', repeatPassword:'' };

    // Email validation
    if (!name) {
      newErrors.name = 'Name  is required';
      valid = false;
    }
    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
      valid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    }
    if (!repeatPassword) {
      newErrors.repeatPassword = 'Repeat Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission (e.g., call an API)
      console.log('Form submitted:', {name, email, password , repeatPassword});
    }
  };

  return (
    <div className="flex flex-col items-center justify-center flex-grow px-4 md:px-0 bg-[#F2F2F2]">
      <div className="w-full max-w-md p-6 ">
        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name<span className="text-red-500">*</span>
            </label>
            <input
              placeholder='Your Name'
              id="name"
              name="name"
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              placeholder='Your Email'
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password<span className="text-red-500">*</span>
            </label>
            <input
            placeholder='Password'
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
             Repeat Password<span className="text-red-500">*</span>
            </label>
            <input
              placeholder='Repeat Password'
              id="repeatPassword"
              name="repeatPassword"
              type="repeatPassword"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
            {errors.repeatPassword && <p className="mt-1 text-sm text-red-500">{errors.repeatPassword}</p>}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="newsletter"
                name="newsletter"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-900 cursor-pointer">
                Receive Newsletter
              </label>
            </div>
            <div>
              <button
                type="submit"
                className=" h-12 px-4 py-2 font-medium text-white bg-red-600 hover:shadow-2xl rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-500"
              >
                Register
              </button>
            </div>
          </div>
          <hr className="w-full border-[#E1E1E1] my-4" />
        </form>
      </div>

      <div className="mt-0 text-xs text-center text-gray-600">
        <p>
          By clicking &quot;Register&quot; button, you agree with our 
          <Link href="#" legacyBehavior>
            <a className="font-medium text-red-400 hover:text-red-600"> Terms & Conditions</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
