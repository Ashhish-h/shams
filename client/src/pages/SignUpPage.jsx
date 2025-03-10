import React, { useState } from "react";
import { Link } from "react-router";


export default function SignUpPage() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [age, setAge] = useState();
    // const [password, setPassword] = useState('');
    // const [mobileNo, setMobileNo] = useState();
    // const [error, setError] = useState('');
    const [role, setRole] = useState('patient');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        age: '',
        experience: '',
        clinic: '',
        password: '',
    });

    // // Here e is the event object that gets triggered by default whenever a submit is happen 
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // if user doesn't provide these (basic validation)
    //     if (!name || !email || !age || !password || mobileNo) {
    //         setError("Enter the required Fields");
    //         return;
    //     }

    //     // if all feilds are filled
    //     setError('')

    //     console.log("Name: ", name);
    //     console.log("age: ", age);
    //     console.log("email: ", email);
    // };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // API call to send signup data to the backend
        console.log(formData);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"> {/* Reduced padding and width */}
                <h2 className="text-xl font-semibold text-center mb-4">Sign Up</h2> {/* Smaller font size */}

                <form onSubmit={handleSubmit}>
                    {/* Role Selection */}
                    <div className="mb-3"> {/* Reduced margin */}
                        <label className="block text-gray-700 text-sm font-bold mb-1">Select Role:</label>
                        <select
                            className="block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={role}
                            onChange={handleRoleChange}
                        >
                            <option value="patient">Patient</option>
                            <option value="doctor">Doctor</option>
                        </select>
                    </div>

                    {/* Common Fields */}
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-1">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-1">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-1">Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-1">Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            required
                            className="block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-1">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            className="block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Doctor-Specific Fields */}
                    {role === 'doctor' && (
                        <>
                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-1">Years of Experience:</label>
                                <input
                                    type="number"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    required
                                    className="block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-1">Clinic:</label>
                                <input
                                    type="text"
                                    name="clinic"
                                    value={formData.clinic}
                                    onChange={handleInputChange}
                                    required
                                    className="block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="text-center mt-3">
                    <p className="text-sm text-gray-600">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
                </div>
            </div>
        </div>
    )
}