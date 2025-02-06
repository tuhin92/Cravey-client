import React from 'react';
import { Search, Bike, ShoppingBag, Utensils } from 'lucide-react';

const Banner = () => {
    return (
        <div className="hero md:-mt-20 mt-0 min-h-[600px]">
            <div className="mt-0 md:mt-20 hero-content flex-col lg:flex-row text-[#3d3c3c]">
                <div className='max-w-full lg:max-w-sm px-4' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                    <h1 className="text-3xl md:text-6xl font-extrabold">Fastest <span className='text-[#0393b7]'>Delivery</span> & Easy <span className='text-[#0393b7]'>Pickup</span></h1>
                    <p className="py-6 max-w-sm">
                        Cravey is an online food-making and delivery service, offering fresh, delicious meals delivered straight to your door for a convenient and tasty dining experience.
                    </p>
                    <button className="btn bg-[#e66611] text-white border-none"><Search className='mr-2' size={20} />Find Restaurants</button>
                </div>
                <img
                    src="https://i.ibb.co/fMmr535/Screenshot-2024-09-06-001702-removebg-preview.png"
                    className="max-w-xs md:max-w-lg " />

                <div className='grid gap-4 md:gap-8 px-8'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-gray-200 p-2 rounded-full flex items-center justify-center'>
                            <Bike className='h-8 w-8' />
                        </div>
                        <div>
                            <h2 style={{ fontFamily: 'Josefin Sans, sans-serif' }} className='text-lg font-bold'>Fastest Delivery</h2>
                            <p className='font-semibold text-sm text-[#7d7c7c]'>Promise to deliver within 30 minutes</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className='bg-gray-200 p-2 rounded-full flex items-center justify-center'>
                            <ShoppingBag className='h-8 w-8' />
                        </div>
                        <div>
                            <h2 style={{ fontFamily: 'Josefin Sans, sans-serif' }} className='text-lg font-bold'>Pick Up</h2>
                            <p className='font-semibold text-sm text-[#7d7c7c]'>Pick up delivery at your doorstep</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className='bg-gray-200 p-2 rounded-full flex items-center justify-center'>
                            <Utensils className='h-8 w-8' />
                        </div>
                        <div>
                            <h2 style={{ fontFamily: 'Josefin Sans, sans-serif' }} className='text-lg font-bold'>Fresh Meals</h2>
                            <p className='font-semibold text-sm text-[#7d7c7c]'>Delicious food, made fresh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
