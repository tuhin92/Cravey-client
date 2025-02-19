import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const result = await signIn(formData.email, formData.password);
            if (result.user) {
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome back!',
                    text: 'Sign in successful!',
                    showConfirmButton: false,
                    timer: 1500,
                    position: 'top-end',
                    toast: true
                });
                
                // Reset form
                setFormData({
                    email: '',
                    password: ''
                });
                
                navigate('/');
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
                position: 'top-end',
                toast: true,
                timer: 3000
            });
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className='min-h-screen max-w-7xl mx-auto flex items-center justify-center px-4'>
            <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-gray-900'>Sign In</h2>
                    <p className='mt-2 text-sm text-gray-600'>
                        Don't have an account?{' '}
                        <Link to='/sign-up' className='text-[#0393B7] hover:underline font-medium'>
                            Sign up
                        </Link>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div className='space-y-2'>
                        <label htmlFor='email' className='text-sm font-medium text-gray-700'>
                            Email address
                        </label>
                        <div className='relative'>
                            <Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={20} />
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0393B7] focus:border-transparent'
                                placeholder='Enter your email'
                                required
                            />
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor='password' className='text-sm font-medium text-gray-700'>
                            Password
                        </label>
                        <div className='relative'>
                            <Lock className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={20} />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id='password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0393B7] focus:border-transparent'
                                placeholder='Enter your password'
                                required
                            />
                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>
                    <button
                        type='submit'
                        className='w-full py-2 px-4 bg-[#0393B7] text-white font-medium rounded-lg hover:bg-[#027a9a] focus:outline-none focus:ring-2 focus:ring-[#0393B7] focus:ring-offset-2'
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;