import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <>
     <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className=' text-white text-2xl' >
              MyLogo
          </Link>
          <ul className="hidden md:flex space-x-6 text-white text-2xl ">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">
               About
              </Link>
            </li>
            <li>
              <Link href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact">
                 Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar