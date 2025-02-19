import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [passwordChecks, setPasswordChecks] = useState({
        hasLower: false,
        hasUpper: false,
        hasNumber: false,
        hasSpecial: false,
        hasMinLength: false
    });
    const [showErrors, setShowErrors] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    // Update the validatePassword function
    const validatePassword = (password) => {
        const checks = {
            hasLower: /[a-z]/.test(password),
            hasUpper: /[A-Z]/.test(password),
            hasNumber: /[0-9]/.test(password),
            hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
            hasMinLength: password.length >= 8
        };
        setPasswordChecks(checks);
        return Object.values(checks).every(Boolean);
    };

    // Update handleChange function
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData(prev => {
            const newFormData = { ...prev, [name]: value };
            
            // Only validate password if it's being changed
            if (name === 'password') {
                validatePassword(value);
                // Check if passwords match
                if (newFormData.confirmPassword) {
                    setPasswordsMatch(value === newFormData.confirmPassword);
                }
            }
            
            // Check if passwords match when typing confirm password
            if (name === 'confirmPassword') {
                setPasswordsMatch(value === newFormData.password);
            }
            
            return newFormData;
        });
    };

    // Update handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowErrors(true);

        // Validate all requirements
        const isPasswordValid = validatePassword(formData.password);
        const doPasswordsMatch = formData.password === formData.confirmPassword;

        if (!isPasswordValid || !doPasswordsMatch) {
            setPasswordsMatch(doPasswordsMatch);
            return;
        }

        // If validation passes, proceed with form submission
        try {
            console.log('Form submitted successfully:', formData);
            
            // Reset form and states
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            setShowErrors(false);
            setPasswordChecks({
                hasLower: false,
                hasUpper: false,
                hasNumber: false,
                hasSpecial: false,
                hasMinLength: false
            });
            setPasswordsMatch(true);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    // Update the renderPasswordValidation function
    const renderPasswordValidation = () => {
        if (!showErrors && !formData.password) return null;

        const checks = [
            { key: 'hasMinLength', label: 'At least 8 characters' },
            { key: 'hasLower', label: 'Lowercase letter' },
            { key: 'hasUpper', label: 'Uppercase letter' },
            { key: 'hasNumber', label: 'Number' },
            { key: 'hasSpecial', label: 'Special character' }
        ];

        return (
            <div className="mt-2 space-y-1 text-sm">
                {checks.map(({ key, label }) => (
                    <p 
                        key={key}
                        className={`flex items-center gap-2 ${
                            passwordChecks[key] ? 'text-green-600' : 'text-red-500'
                        }`}
                    >
                        {passwordChecks[key] ? '✓' : '✗'} {label}
                    </p>
                ))}
            </div>
        );
    };

    return (
        <div className='min-h-screen max-w-7xl mx-auto flex items-center justify-center px-4'>
            <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-gray-900'>Sign Up</h2>
                    <p className='mt-2 text-sm text-gray-600'>
                        Already have an account?{' '}
                        <Link to='/sign-in' className='text-[#0393B7] hover:underline font-medium'>
                            Sign in
                        </Link>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div className='space-y-2'>
                        <label htmlFor='name' className='text-sm font-medium text-gray-700'>
                            Name
                        </label>
                        <div className='relative'>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0393B7] focus:border-transparent'
                                placeholder='Enter your name'
                                required
                            />
                        </div>
                    </div>

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
                                className={`w-full pl-10 pr-10 py-2 border ${
                                    showErrors && !validatePassword(formData.password) 
                                        ? 'border-red-500' 
                                        : 'border-gray-300'
                                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0393B7] focus:border-transparent`}
                                placeholder='Enter your password'
                                required
                            />
                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {renderPasswordValidation()}
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor='confirmPassword' className='text-sm font-medium text-gray-700'>
                            Confirm Password
                        </label>
                        <div className='relative'>
                            <Lock className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={20} />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id='confirmPassword'
                                name='confirmPassword'
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className='w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0393B7] focus:border-transparent'
                                placeholder='Confirm your password'
                                required
                            />
                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {showErrors && !passwordsMatch && (
                            <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                        )}
                    </div>

                    <button
                        type='submit'
                        className='w-full py-2 px-4 bg-[#0393B7] hover:bg-[#0381A1] text-white font-semibold rounded-lg transition duration-200'
                    >
                        Sign Up
                    </button>
                </form>

                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>

                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-600 font-medium border border-gray-300 rounded-lg px-4 py-2 transition duration-200"
                >
                    <img 
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                        alt="Google" 
                        className="w-5 h-5"
                    />
                    Sign up with Google
                </button>
            </div>
        </div>
    );
};

export default SignUp;