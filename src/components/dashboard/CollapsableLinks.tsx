import { ILink } from '@/app/(back-office)/link'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CollapsableLinks = (item:ILink) => {
  return (
    <Link key={item.id} className='flex items-center justify-between p-8 pr-4 hover:bg-slate-900 transition-all duration-300 
    py-2 rounded-md space-x-3'
      href={item.href}><span className='text-sm '>{item.title}</span>
      <PlusCircle className='w-4 h-4' />
    </Link>
  )
}

export default CollapsableLinks