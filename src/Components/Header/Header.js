import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='grid w-full z-50 grid-cols-2 justify-between items-center p-5'>
      <Link to='/' className="flex font-extrabold w-64 text-4xl tracking-tighter text-teal-700"
      >
        NFT-TCG
      </Link>
    </header >
  )
}

export default Header