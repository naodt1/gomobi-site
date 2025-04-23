"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';

interface Props {}

const AdminPage: React.FC<Props> = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    // Check if already authenticated (e.g., using a session or cookie)
    // For simplicity in this example, we'll just rely on the current session
  }, []);

  const handlePasswordSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage('');

    console.log(password,  process.env.NEXT_PUBLIC_ADMIN_PASSCODE); // Debugging line to check the password input
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSCODE) {
      setIsAuthenticated(true);
      // Potentially store a session or cookie here for future visits
    } else {
      setErrorMessage('Incorrect passcode.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <Head>
          <title>Admin Login</title>
        </Head>
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Admin Login</h2>
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Passcode:
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter 6-digit passcode"
                maxLength={6}
              />
            </div>
            {errorMessage && <p className="text-red-500 text-sm mb-2">{errorMessage}</p>}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // If authenticated, show the admin content here
  return (
    <div className="p-6">
      <Head>
        <title>Admin Panel</title>
      </Head>
      <h1 className="text-3xl font-semibold mb-4 text-gray-800">Admin Panel</h1>
      <p>Welcome, Admin! You are now authorized to edit the project data.</p>
      {/* We'll add the project data display and editing here */}
    </div>
  );
};

export default AdminPage;