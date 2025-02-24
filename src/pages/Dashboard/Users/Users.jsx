import React, { useState, useEffect } from 'react';
import { User, Loader2, UserCheck, Search } from 'lucide-react';
import Swal from 'sweetalert2';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch users
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:5000/users');
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching users:', error);
            setLoading(false);
        }
    };

    // Handle make admin
    const handleMakeAdmin = async (userId, email) => {
        try {
            const response = await fetch(`http://localhost:5000/users/admin/${email}`, {
                method: 'PATCH'
            });
            const data = await response.json();

            if (data.modifiedCount > 0) {
                fetchUsers(); // Refresh user list
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'User has been made admin',
                    showConfirmButton: false,
                    timer: 1500,
                    position: 'top-end',
                    toast: true
                });
            }
        } catch (error) {
            console.error('Error making admin:', error);
        }
    };

    // Filter users based on search
    const filteredUsers = users.filter(user => 
        user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-8 h-8 animate-spin text-[#0393B7]" />
            </div>
        );
    }

    return (
        <div className="container mx-auto p-2 sm:p-4">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                {/* Update header section for better mobile responsiveness */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Users Management</h2>
                    <div className="relative w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="w-full sm:w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0393B7]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>

                {/* Make table responsive */}
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                    <div className="inline-block min-w-full align-middle">
                        <table className="min-w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="py-3 px-4 text-left text-xs sm:text-sm font-semibold text-gray-600">User</th>
                                    <th className="py-3 px-4 text-left text-xs sm:text-sm font-semibold text-gray-600 hidden sm:table-cell">Email</th>
                                    <th className="py-3 px-4 text-left text-xs sm:text-sm font-semibold text-gray-600">Role</th>
                                    <th className="py-3 px-4 text-left text-xs sm:text-sm font-semibold text-gray-600 hidden md:table-cell">Joined</th>
                                    <th className="py-3 px-4 text-left text-xs sm:text-sm font-semibold text-gray-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredUsers.map((user) => (
                                    <tr key={user._id} className="hover:bg-gray-50">
                                        <td className="py-3 px-4">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0">
                                                    {user.photoURL ? (
                                                        <img
                                                            src={user.photoURL}
                                                            alt={user.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="bg-[#0393B7] w-full h-full flex items-center justify-center">
                                                            <User className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2">
                                                    <span className="font-medium text-sm sm:text-base text-gray-900">{user.name}</span>
                                                    <span className="text-xs text-gray-500 sm:hidden">{user.email}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-gray-500 hidden sm:table-cell">
                                            <span className="text-sm">{user.email}</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                                                user.role === 'admin' 
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-gray-100 text-gray-800'
                                            }`}>
                                                {user.role || 'user'}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-gray-500 hidden md:table-cell">
                                            <span className="text-sm">{new Date(user.createdAt).toLocaleDateString()}</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            {user.role !== 'admin' && (
                                                <button
                                                    onClick={() => handleMakeAdmin(user._id, user.email)}
                                                    className="text-[#0393B7] hover:text-[#0381A1] font-medium flex items-center gap-1 text-sm"
                                                >
                                                    <UserCheck size={16} />
                                                    <span className="hidden sm:inline">Make Admin</span>
                                                    <span className="sm:hidden">Admin</span>
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;