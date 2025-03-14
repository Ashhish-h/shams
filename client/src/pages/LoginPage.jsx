import React, { useState } from "react";
import { Link } from "react-router";
import axios from 'axios';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();


        const loginUser = {
            "userEmail": email,
            "userPassword": password
        }

        // is user doesn't provide these show error
        if (!email || !password) {
            setError('Please enter vaild credentials');
            return;
        }

        // api calling
        try {
            const response = await axios.post('http://localhost:8080/api/user/login', loginUser)
            if (response.status === 200) {
                console.log(email, password, response.data);
                alert('Login Successfull');
            } else {
                setError('Invalid credentials');
            }
        } catch (error) {
            setError('Something went wrong');
            
        }
        // console.log(response.data);
    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button
                            type="submit"
                            className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-sm text-center text-gray-600 mt-4">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-blue-500 hover:underline">
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}