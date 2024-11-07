import Link from 'next/link'
import React from 'react'

function SideNavbar() {
  return (
    <>
         <div className="flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-[150px] h-screen bg-[#003161] text-white p-6">
        
        <ul className="space-y-4 text-gray-300  p-2 rounded-md block ">
          <li>
            <Link href="/profile">
            Profile
            </Link>
          </li>
          <li>
            <Link href="/data">
              Data
            </Link>
          </li>
          <li>
            <Link href="/services">
              Services
            </Link>
          </li>
         
        </ul>
      </aside>

      
    </div>
    </>
  )
}

export default SideNavbar