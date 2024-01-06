import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import React from 'react'

const Layout = ({ children }: any) => {
  return (
    <div className='flex'>
            <Sidebar/>
  
      <main className="ml-60 w-full bg-slate-100 text-slate-600 min-h-screen">
        <Header/>
        {children}</main>
    </div>
  )
}

export default Layout