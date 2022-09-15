import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from '@chakra-ui/icons';
import GameData from '../../Data/Games/games.json';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'

function Header() {
  const [isGamesTabOpen, setIsGameTabOpen] = useState(false);
  return (
    <header className='grid w-full z-50 grid-cols-2 justify-between items-center p-5'>
      <Link to='/' className="flex font-extrabold w-64 text-4xl tracking-tighter text-teal-700"
        onClick={() => setIsGameTabOpen(false)}
      >
        NFT-TCG
      </Link>
      {/* 
      <div class="flex flex-col space-y-4 ml-auto text-right">
        <button type="button" class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 z-50 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true"
          onClick={() => setIsGameTabOpen(true)}
        >
          Games
          <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </button>
        {isGamesTabOpen && (<div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div class="py-1" role="none">
            {GameData.map((game, i) => (
              <a href={`/games/${game.name.replace(' ', '-')}`} class="bg-stone-50 hover:bg-stone-100 hover:ring-[0.34px] hover:ring-stone-200 block px-4 py-2 text-sm m-1 rounded-md font-light text-slate-900 hover:font-normal" role="menuitem" tabindex="-1" id="menu-item-0">{game.name}</a>
            ))}
          </div>
        </div>)}
      </div> */}

      {/* <button id="theme-toggle" type="button" class="text-gray-500 hidden bg-red-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
        <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
        <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
      </button> */}
      {/* <div className='flex flex-col space-y-4 ml-auto text-right'>
        <Bars3BottomRightIcon className='h-8 w-8 mx-auto dark:text-white cursor-pointer' />
        <span className='md:hidden'>
          <div class="relative inline-block text-left">
            <button type="button" class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 z-50 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true"
              onClick={() => setIsGameTabOpen(!isGamesTabOpen)}
            >
              Games
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
            {isGamesTabOpen && (<div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1" role="none">
                {GameData.map((game, i) => (
                  <a href={`/games/${game.name.replace(' ', '-')}`} class="bg-stone-50 hover:bg-stone-100 hover:ring-[0.34px] hover:ring-stone-200 block px-4 py-2 text-sm m-1 rounded-md font-light text-slate-900 hover:font-normal" role="menuitem" tabindex="-1" id="menu-item-0">{game.name}</a>
                ))}
              </div>
            </div>)}
          </div>
        </span>
      </div> */}
    </header >
  )
}

export default Header