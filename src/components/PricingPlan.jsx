import React from 'react'
import { useNavigate } from 'react-router-dom'

function PricingPlan() {
    const navigate = useNavigate()
    const handleSelectPlan = (plan)=>{
        navigate('/register',{state:{selectedPlan:plan}})
    }
    return (
        <div className='p-5'>
            <div className='text-center mt-4 mb-4 text-white'>
                <h2 className='font-bold text-xl'>Our Package Plans</h2>
                <p className='text-white-600'>Ready to take your business to the next level</p>
            </div>
            <div className='grid gap-6 md:grid-cols-3 sm:grid-cols-1 '>
                <div className='bg-white rounded-2xl shadow-lg p-8 transition hover:scale-102'>
                    <h2 className='text-xl font-semibold mb-4'>Basic</h2>
                    <p className='text-4xl font-bold mb-4'>$15.09
                        <span className='text-lg text-black-500'>/month</span>
                    </p>
                    <ul className='space-y-4 mb-4'>
                        <li className='flex items-center gap-2 text-black-600'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                class="size-5 text-green-400 flex-shrink">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clip-rule="evenodd" />
                            </svg>
                            AI Advisor for a day
                        </li>
                        <li className='flex items-center gap-2 text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                class="size-5 text-green-400 flex-shrink">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clip-rule="evenodd" />
                            </svg>
                            Two Auto tracking system
                        </li>
                        <li className='flex items-center gap-2 text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                class="size-5 text-green-400 flex-shrink">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clip-rule="evenodd" />
                            </svg>
                            7 Day Transaction clear
                        </li>
                        <li className='flex items-center gap-2 text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                class="size-5 text-green-400 flex-shrink">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clip-rule="evenodd" />
                            </svg>
                            24/7 Customer Support
                        </li>
                        <li className='flex items-center gap-2 text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                class="size-5 text-green-400 flex-shrink">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clip-rule="evenodd" />
                            </svg>
                            Basic Security Service
                        </li>
                    </ul>
                    <button onClick={()=>handleSelectPlan('Basic')}
                    className='bg-black text-white p-4 rounded-xl flex items-center gap-2
                    hover:bg-gray-800 transition-300 ease-in-out cursor-pointer'>Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="size-5 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                    </button>
                </div>
                <div className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                text-white rounded-2xl shadow-2xl p-10 
                transform scale-105'>
                    <h2 className='text-xl font-semibold mb-4'>Premium</h2>
                    <p className='text-4xl font-bold mb-4'>$50.00
                        <span className='text-lg text-white-500'>/month</span>
                    </p>
                    <ul className='space-y-4 mb-4'>
                        <li className='flex items-center gap-2 text-white-600'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                class="size-5 text-green-400 flex-shrink">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clip-rule="evenodd" />
                            </svg>
                            AI Advisor for a day
                        </li>
                        <li className='flex items-center gap-2 text-white-600'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                class="size-5 text-green-400 flex-shrink">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clip-rule="evenodd" />
                            </svg>
                            Two Auto tracking system
                        </li>
                        <li className='flex items-center gap-2 text-white-600'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                class="size-5 text-green-400 flex-shrink">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clip-rule="evenodd" />
                            </svg>
                            7 Day Transaction clear
                        </li>
                        <li className='flex items-center gap-2 text-white-600'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                class="size-5 text-green-400 flex-shrink">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clip-rule="evenodd" />
                            </svg>
                            24/7 Customer Support
                        </li>
                        <li className='flex items-center gap-2 text-white-600'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                class="size-5 text-green-400 flex-shrink">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clip-rule="evenodd" />
                            </svg>
                            Basic Security Service
                        </li>
                    </ul>
                    <button onClick={()=>handleSelectPlan('Premium')}
                    className='bg-black text-white p-4 rounded-xl flex items-center gap-2
                    hover:bg-gray-800 transition-300 ease-in-out cursor-pointer'>Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="size-5 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                    </button>
                </div>
                <div className='bg-white rounded-2xl shadow-lg p-8 transition hover:scale-102'>
                    <h2 className='text-xl font-semibold mb-4'>Standard</h2>
                    <p className='text-4xl font-bold mb-4'>$30.04
                        <span className='text-lg text-black-500'>/month</span>
                    </p>
                    <ul className='space-y-4 mb-4'>
                        <li className='flex items-center gap-2 text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                class="size-5 text-green-400 flex-shrink">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clip-rule="evenodd" />
                            </svg>
                            AI Advisor for a day
                        </li>
                        <li className='flex items-center gap-2 text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                class="size-5 text-green-400 flex-shrink">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clip-rule="evenodd" />
                            </svg>
                            Two Auto tracking system
                        </li>
                        <li className='flex items-center gap-2 text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                class="size-5 text-green-400 flex-shrink">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clip-rule="evenodd" />
                            </svg>
                            7 Day Transaction clear
                        </li>
                        <li className='flex items-center gap-2 text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                class="size-5 text-green-400 flex-shrink">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clip-rule="evenodd" />
                            </svg>
                            24/7 Customer Support
                        </li>
                        <li className='flex items-center gap-2 text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                class="size-5 text-green-400 flex-shrink">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clip-rule="evenodd" />
                            </svg>
                            Basic Security Service
                        </li>
                    </ul>
                    <button onClick={()=>handleSelectPlan('Standard')}
                    className='bg-black text-white p-4 rounded-xl flex items-center gap-2
                    hover:bg-gray-800 transition-300 ease-in-out cursor-pointer'>
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="size-5 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default PricingPlan