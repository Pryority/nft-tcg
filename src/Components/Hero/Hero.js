import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <section className="px-1 py-32 md:px-0 tails-selected-element">
            <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                <div className="grid md:grid-cols-2 items-center justify-center">
                    <div className="w-full md:px-3 animate-fade-in-up">
                        <div className="w-full pb-6 space-y-6 md:w-full lg:max-w-lg md:space-y-4 lg:space-y-8 items-center xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                            <h1 className="text-4xl md:w-full font-extrabold tracking-tight text-white sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                <span className="block xl:inline text-stone-900 dark:text-white text-center md:text-start">A website for </span>
                                <span className="block text-teal-500 dark:text-teal-300 xl:inline text-center md:text-start" data-primary="indigo-600">NFT Trading Card Games</span>
                            </h1>
                            <div className="relative grid md:grid-cols-2 w-full space-y-2 md:space-y-0 md:space-x-2 justify-center">
                                <Link to='/games' className="flex items-center space-x-2 w-[288px] md:w-5/6  justify-center text-lg font-medium text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg hover:from-teal-500  hover:to-teal-600 border-[1.62px] p-[1.62px]"
                                    onClick={() => console.log('clicked')}
                                    data-primary="indigo-600" data-rounded="rounded-lg">
                                    <p>Games</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </Link>
                                <Link to='/market' className="flex w-[288px] md:w-5/6 justify-center items-center text-gray-600 font-medium space-x-2 bg-gray-200 rounded-lg hover:bg-gray-400 hover:text-gray-200 border-[1.62px] border-gray-300 p-[1.62px] hover:border-border-gray-200" data-rounded="rounded-lg">
                                    <p>Market</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 animate-slow-fade-in-up">
                        <div className="w-full h-auto overflow-hidden rounded-md shadow-md sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                            <img src="https://www.techbooky.com/wp-content/uploads/2021/09/social-picture.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero