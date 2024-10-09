import { useState } from 'react';
import AddNewModal from '../components/AddNewModal';

export default function AccountTable() {
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // State for toggling modal

    // Sample account data with multiple statuses
    const accounts = [
        { website: 'Google', email: 'john@example.com', status: ['Breached', 'Weak', 'Reused', 'Expired'], isBreached: true, isWeak: true },
        { website: 'Facebook', email: 'oscar@example.com', status: ['Reused'], isReused: true },
        { website: 'Twitter', email: 'george@example.com', status: ['Weak'], isWeak: true },
        { website: 'Instagram', email: 'charlie@example.com', status: ['Expired'], isExpired: true },
        { website: 'Google', email: 'john@example.com', status: ['Breached', 'Weak', 'Reused', 'Expired'], isBreached: true, isWeak: true },
        { website: 'Facebook', email: 'oscar@example.com', status: ['Reused'], isReused: true },
        { website: 'Twitter', email: 'george@example.com', status: ['Weak'], isWeak: true },
        { website: 'Instagram', email: 'charlie@example.com', status: ['Expired'], isExpired: true },
    ];

    // Filter accounts based on status
    const filteredAccounts = accounts.filter((account) => {
        if (filter === 'all') return true;
        return account.status.some((s) => s.toLowerCase() === filter);
    });

    const openAddNewModal = () => setIsModalOpen(true);
    const closeAddNewModal = () => setIsModalOpen(false);

    return (
        <div className="p- bg-gray-10 min-h-screen">
            {/* Search, Filter, and Create New */}
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Search accounts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 mr-2 border border-gray-300 rounded-md shadow-sm w-1/3"
                />
                <div className="flex space-x-4">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="p-2 pl-3 pr-7 border border-gray-300 rounded-md"
                    >
                        <option value="all">All</option>
                        <option value="breached">Breached</option>
                        <option value="reused">Reused</option>
                        <option value="weak">Weak</option>
                        <option value="expired">Expired</option>
                    </select>
                    <button onClick={openAddNewModal} className="p-2 bg-blue-600 text-white rounded-md">Create New</button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white shadow-md rounded-md overflow-hidden">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Website</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Username/Email</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                            <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Edit</th>
                        </tr>
                    </thead>
                </table>
                {/* Scrollable tbody */}
                <div className="overflow-y-auto" style={{ maxHeight: '400px' }}>
                    <table className="min-w-full table-auto">
                        <tbody>
                            {filteredAccounts
                                .filter((account) =>
                                    account.website.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    account.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    account.status.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))
                                )
                                .map((account, idx) => (
                                    <tr key={idx} className="border-t">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{account.website}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{account.email}</td>
                                        <td className="px- py-4 text-sm">
                                            {account.status.map((status, statusIdx) => (
                                                <span
                                                    key={statusIdx}
                                                    className={`px-2 py-1 mt-1 inline-flex text-xs leading-5 font-semibold rounded-full ml-2 ${status === 'Breached' ? 'bg-red-100 text-red-800' :
                                                        status === 'Reused' ? 'bg-yellow-100 text-yellow-800' :
                                                            status === 'Weak' ? 'bg-orange-100 text-orange-800' :
                                                                status === 'Expired' ? 'bg-gray-100 text-gray-800' : ''
                                                        }`}
                                                >
                                                    {status}
                                                </span>
                                            ))}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-blue-600 hover:text-blue-900">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                <AddNewModal isOpen={isModalOpen} onClose={closeAddNewModal} />
            </div>
        </div>
    );
}
