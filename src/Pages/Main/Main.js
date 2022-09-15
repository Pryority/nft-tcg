import React, { useState } from 'react'
import Hero from '../../Components/Hero/Hero'

function Main() {
    const [isGamesTabOpen, setIsGameTabOpen] = useState(false);
    return (
        <div className="flex flex-col w-full min-h-screen justify-start items"
            onClick={() => setIsGameTabOpen(!isGamesTabOpen)}
        >
            <Hero />
        </div >
    )
}

export default Main