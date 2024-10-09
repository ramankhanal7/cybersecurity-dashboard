import React, { useState } from 'react';
import { generatePassword } from '../utils/passwordUtils';

export default function AddNewModal({ isOpen, onClose }) {
    const [websiteTitle, setWebsiteTitle] = useState('');
    const [usernameEmail, setUsernameEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lastPasswordChange, setLastPasswordChange] = useState('');
    const [notes, setNotes] = useState('');

    function handleClose() {
        // Clear all form fields
        setWebsiteTitle('');
        setUsernameEmail('');
        setPassword('');
        setLastPasswordChange('');
        setNotes('');
        onClose(); // Trigger modal close
    }

    if (!isOpen) return null; // Don't render if the modal is not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-5/6 p-6 relative">
                <button onClick={handleClose} className="absolute top-2 right-3 text-gray-500 hover:text-gray-700">
                    X
                </button>
                <h2 className="text-xl font-bold mb-4">Add New Account</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Website Title</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter website title"
                            value={websiteTitle}
                            onChange={(e) => setWebsiteTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username/Email</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter username or email"
                            value={usernameEmail}
                            onChange={(e) => setUsernameEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <div className="flex">
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setPassword(generatePassword())}
                                className="ml-2 p-2 bg-gray-300 text-gray-700 rounded-md"
                            >
                                Generate
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Last Password Change</label>
                        <input
                            type="date"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={lastPasswordChange}
                            onChange={(e) => setLastPasswordChange(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Notes</label>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md">
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}
