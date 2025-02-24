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
        <div className="container mx-auto p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Users Management</h2>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0393B7]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="py-3 px-4 text-left">User</th>
                                <th className="py-3 px-4 text-left">Email</th>
                                <th className="py-3 px-4 text-left">Role</th>
                                <th className="py-3 px-4 text-left">Joined</th>
                                <th className="py-3 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredUsers.map((user) => (
                                <tr key={user._id} className="hover:bg-gray-50">
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                                {user.photoURL ? (
                                                    <img
                                                        src={user.photoURL}
                                                        alt={user.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="bg-[#0393B7] w-full h-full flex items-center justify-center">
                                                        <User className="w-6 h-6 text-white" />
                                                    </div>
                                                )}
                                            </div>
                                            <span className="font-medium text-gray-900">{user.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-gray-500">{user.email}</td>
                                    <td className="py-3 px-4">
                                        <span className={`px-3 py-1 rounded-full text-sm ${
                                            user.role === 'admin' 
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-gray-100 text-gray-800'
                                        }`}>
                                            {user.role || 'user'}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-gray-500">
                                        {new Date(user.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="py-3 px-4">
                                        {user.role !== 'admin' && (
                                            <button
                                                onClick={() => handleMakeAdmin(user._id, user.email)}
                                                className="text-[#0393B7] hover:text-[#0381A1] font-medium flex items-center gap-1"
                                            >
                                                <UserCheck size={16} />
                                                Make Admin
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
    );
};

export default Users;