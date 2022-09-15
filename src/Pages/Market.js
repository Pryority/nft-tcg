import { ExternalLinkIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tilt from 'react-parallax-tilt'

function Games() {
    const [isGamesTabOpen, setIsGameTabOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen w-full justify-center items-end p-2  md:p-8 ">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 relative z-50'>
                <h2 className='text-6xl font-light uppercase tracking-tighter text-teal-900/20 animate-fade-in-l'>Coming Soon</h2>
            </div>
            <h1 className='p-2 text-8xl bg-gradient-to-bl to-stone-900/80 from-teal-900/60 text-transparent bg-clip-text font-bold fixed bottom-0 left-0 tracking-tighter animate-slow-fade-in-up'>MARKET</h1>
        </div >
    )
}

export default Games