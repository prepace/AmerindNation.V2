// app/dashboard/page.js

'use client';

import React, { useState } from 'react';
import Dashboard from '@/components/Dashboard';

const TEMP_PASSWORD = 'Chickasha';

export default function DashboardPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === TEMP_PASSWORD) {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password, please try again.');
    }
  };

  if (!authenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="p-8 bg-white rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Enter Password</h2>
          <input
            type="password"
            placeholder="Password"
            className="border px-4 py-2 mb-4 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  return <Dashboard />;
}
