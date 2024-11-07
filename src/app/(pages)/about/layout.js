import SideNavbar from '@/app/Components/SideNavbar'
import React from 'react'

function layout({children}) {
  return (
    <>
    <div className='flex gap-2'>
    <SideNavbar/>
    {children}
    </div>
    </>
  )
}

export default layout