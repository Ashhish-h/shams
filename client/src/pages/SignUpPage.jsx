import React, { useState } from "react";
import { Link } from "react-router";


export default function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState();
    const [password, setPassword] = useState('');
    const [mobileNo, setMobileNo] = useState();
    const [error, setError] = useState('');

    // Here e is the event object that gets triggered by default whenever a submit is happen 
    const handleSubmit = (e) => {
        e.preventDefault();

        // if user doesn't provide these (basic validation)
        if (!name || !email || !age || !password || mobileNo) {
            setError("Enter the required Fields");
            return;
        }

        // if all feilds are filled
        setError('')

        console.log("Name: ", name);
        console.log("age: ", age);
        console.log("email: ", email);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name: </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter you name"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email: </label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ex - email@email.com"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mobile-no" className="block text-sm font-medium text-gray-700">Mobile: </label>
                        <input
                            type="number"
                            id="mobile-no"
                            value={mobileNo}
                            onChange={(e) => setMobileNo(e.target.value)}
                            placeholder="ex - 9198645161"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age: </label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Enter you age"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password: </label>
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
                    <button type="submit" className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                        Signup
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600 mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-500 hover:underline"> Login here</Link>
                </p>
            </div>

        </div>
    )
}