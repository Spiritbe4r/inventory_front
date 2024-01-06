import React from 'react'
import { Bell, ChevronDown, Grid3X3, History, LayoutGrid, Plus, Settings, Users, Users2 } from 'lucide-react'
import SearchInput from './SearchInput'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-200'>

      <div className='flex gap-3'>

        <button className=''> <History className='w-4 h-5' />

        </button>

        <SearchInput />
      </div>
      <div className='flex items-center gap-3'>
        <div className='pr-2 border-r border-gray-300 '>
          <button className='p-1 bg-blue-600 rounded-lg'> <Plus className='text-slate-50 w-4 h-4' />
          </button>
        </div>


        <div className='flex border-r border-gray-300 space-x-2' >

          <button className='p-1  rounded-lg hover:bg-slate-200'> <Users className='text-slate-900 w-4 h-4' />
          </button>

          <button className='p-1  rounded-lg hover:bg-slate-200'> <Bell className='text-slate-900 w-4 h-4' />
          </button>

          <button className='p-1 rounded-lg hover:bg-slate-200'> <Settings className='text-slate-900 w-4 h-4' />
          </button>


        </div>

        <div className='flex gap-3'>
          <button className='flex items-center'> <span>Garat</span>

          <ChevronDown className='h-3 w-3 '/>
          </button>

          <button>
            <Image width={96} height={96} className='w-9 h-9 rounded-full border-slate-800' src='/user.png' alt={'user'}/>
          </button>
          <button>
            <Grid3X3  className='w-6 h-6 text-slate-900'/>
          </button>
        </div>

      </div>

    </div>
  )
}

export default Header