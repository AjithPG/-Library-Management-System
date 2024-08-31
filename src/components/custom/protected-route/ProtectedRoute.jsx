import React from 'react'
import Navigation from '../navigation/Navigation'
import {Outlet} from 'react-router-dom'
const ProtectedRoute = () => {
  return (
    <div className='flex'>
      <div className='flex-[2] p-2 border-r-2 border-slate-100 min-h-screen'>
        <Navigation/>
      </div>
      <div className='flex-[10] min-h-screen'>
        <Outlet/>
      </div>
    </div>
  )
}

export default ProtectedRoute