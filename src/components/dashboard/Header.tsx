import React from 'react'
import { History} from 'lucide-react'

const Header = () => {
  return (
    <div className='bg-gray-100 h-12 flex items-center justify-between px-8'>
        
        <div className='flex'>

        <button className=''> <History className='w-4 h-5'/></button>
        </div>
        <div className='flex'></div>
    </div>
  )
}

export default Header