import React from 'react'
import DashboardProvider from './provider'

function DashboardLayout ({children}) {
  return (
    <div className='bg-secondary p-10'>
   <DashboardProvider>
    <div >
      {children}
      </div>
    </DashboardProvider>
    </div>
  )
}

export default DashboardLayout


 