import React from 'react'
import { History, Plus, Users2 } from 'lucide-react'
import SearchInput from './SearchInput'

const Header = () => {
  return (
    <div className='bg-gray-100 h-12 flex items-center justify-between px-8'>

      <div className='flex gap-3'>

        <button className=''> <History className='w-4 h-5' />

        </button>

        <SearchInput />
      </div>
      <div className='flex'>
        <div className='pr-2 border-r border-gray-300'>
        <button className='p-1 bg-blue-600 rounded-lg'> <Plus className='text-slate-50 w-4 h-4'/>
        </button>
        </div>


          {/* <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button" className="ms-3 mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">   <Plus /></button>

          <div id="tooltip-bottom" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          GO...
            <div className="tooltip-arrow" data-popper-arrow></div> */}
            {/* </div>
          </div> */}
      
      </div>
      <div className='flex'>
        <div className='pr-2 border-r border-gray-300'>
        <button className='p-1 bg-blue-600 rounded-lg'> <Users2 className='text-slate-50 w-4 h-4'/>
        </button>
        </div>

      </div>
    
    </div>
  )
}

export default Header