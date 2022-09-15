import { ExternalLinkIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GameData from '../../Data/Games/games.json'
import Tilt from 'react-parallax-tilt'

function Games() {
    const [isGamesTabOpen, setIsGameTabOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen w-full justify-start items-end p-2  md:p-8"
            onClick={() => setIsGameTabOpen(!isGamesTabOpen)}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-50 flex-grid-reverse animate animate-fade-in-r md:animate-fade-in-up'>
                {GameData.map((game, i) => (
                    <a href={`${game.URL}`} target='_blank' rel='noreferrer'
                        key={i} className={`flex flex-col h-full justify-between max-w-sm py-4 md:px-3 order-${i - 1}`}>
                        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareBorderRadius='8px' className='shadow-xl'>
                            <div className="flex w-full cursor-none max-h-[144px] relative" >
                                <img src={game.image} className='w-[460px] object-cover rounded-lg' alt='' />
                                <div className="flex flex-col w-full bg-gradient-to-t from-black/80 to-black/0 shadow-xl rounded-b-lg overflow-hidden cursor-none absolute bottom-0">
                                    <div className="flex flex-col w-full p-4">
                                        <p className="flex flex-col text-3xl text-gray-50 font-bold shadow-xl t-s">{game.name}</p>
                                        <p className="uppercase tracking-wide text-sm font-bold text-gray-50">{game.type}</p>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                        {/* <div className="flex p-1 justify-center items-center">
                            <div className='flex w-full h-full space-x-4 border justify-center items-center rounded-full bg-white/90 dark:bg-white/20 border-stone-50/60 dark:border-gray-300/20 text-gray-500'>
                                <a href={game.URL} className='flex justify-center items-center space-x-1 hover:bg-stone-800/60 px-2 rounded-full'>
                                    <p className="font-medium">Website</p>
                                    <ExternalLinkIcon />
                                </a>
                                <div className='flex items-center'>
                                    <p>By: <a href={game.creator_URL} className='text-teal-300 font-bold capitalize hover:cursor-pointer hover:bg-stone-800/60 px-2 rounded-full'>{game.creator}</a></p>
                                </div>
                            </div>
                        </div> */}
                    </a>
                ))}
            </div>
            <h1 className='p-2 text-8xl bg-gradient-to-bl to-stone-900/80 from-teal-900/60 text-transparent bg-clip-text font-bold fixed bottom-0 left-0 tracking-tighter animate-slow-fade-in-up'>GAMES</h1>
        </div >
    )
}

export default Games