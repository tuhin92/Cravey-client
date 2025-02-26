import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer 
} from 'recharts';
import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';
import HelmetWrapper from '../../components/HelmetWrapper';

const Dashboard = () => {
    // Dummy data for sales overview
    const salesData = [
        { month: 'Jan', sales: 4000, orders: 240 },
        { month: 'Feb', sales: 3000, orders: 198 },
        { month: 'Mar', sales: 5000, orders: 305 },
        { month: 'Apr', sales: 2780, orders: 189 },
        { month: 'May', sales: 1890, orders: 129 },
        { month: 'Jun', sales: 6390, orders: 389 },
    ];

    const categoryData = [
        { name: 'Electronics', value: 400 },
        { name: 'Fashion', value: 300 },
        { name: 'Home', value: 300 },
        { name: 'Books', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className="p-6">
            <HelmetWrapper title="Cravey | Dashboard" />
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Total Sales</p>
                            <h3 className="text-2xl font-bold mt-1">$23,059</h3>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-full">
                            <DollarSign className="w-6 h-6 text-blue-500" />
                        </div>
                    </div>
                    <p className="text-xs text-green-500 mt-2">+12.5% from last month</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Total Orders</p>
                            <h3 className="text-2xl font-bold mt-1">1,450</h3>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-full">
                            <ShoppingBag className="w-6 h-6 text-purple-500" />
                        </div>
                    </div>
                    <p className="text-xs text-green-500 mt-2">+8.2% from last month</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Total Customers</p>
                            <h3 className="text-2xl font-bold mt-1">892</h3>
                        </div>
                        <div className="p-3 bg-orange-50 rounded-full">
                            <Users className="w-6 h-6 text-orange-500" />
                        </div>
                    </div>
                    <p className="text-xs text-green-500 mt-2">+5.3% from last month</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Conversion Rate</p>
                            <h3 className="text-2xl font-bold mt-1">2.4%</h3>
                        </div>
                        <div className="p-3 bg-green-50 rounded-full">
                            <TrendingUp className="w-6 h-6 text-green-500" />
                        </div>
                    </div>
                    <p className="text-xs text-red-500 mt-2">-1.8% from last month</p>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sales Chart */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="sales" stroke="#0088FE" />
                            <Line type="monotone" dataKey="orders" stroke="#00C49F" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Category Distribution */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Category Distribution</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={categoryData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {categoryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;