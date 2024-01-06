import { HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FixedHeader = (newLink: any) => {
    return (
        <div className='flex justify-between items-center bg-white py-5 px-4'>
            <button className='text-2xl'>
                All Items
            </button>

            <div className="flex gap-4">
                {/* new */}
                <Link href={newLink} className='p-1 rounded-sm bg-blue-500 px-3 flex items-center space-x-2 text-white'>
                    <Plus className='w-4 h-4'/> <span>New</span>               </Link>

                <div className="pr-2 border-r border-gray-300">

                </div>

                {/* layout */}

                <div className="flex rounded-md overflow-hidden">
                    <button className='bg-gray-100 p-2 border-r border-gray-400'>
                        <List className='h-4 w-4' />
                    </button>

                    <button className='bg-gray-300 p-2'>
                        <LayoutGrid className='h-4 w-4' />
                    </button>
                </div>

                {/* more */}
                <button className='bg-gray-100 p-2 rounded-md'>
                    <MoreHorizontal className='h-4 w-4' />
                </button>

                {/* help */}
                <button className='bg-orange-600 p-2 text-white rounded-md'>
                    <HelpCircle className='h-5 w-5' />
                </button>
            </div>
        </div>
    )
}

export default FixedHeader