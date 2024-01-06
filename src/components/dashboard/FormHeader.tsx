import { X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FormHeader = ({ title ,href}:{title:string, href:string}) => {
    return (
        <div className="flex items-center justify-between bg-white py-3 px-16">
            <h2 className='font-semibold'>{title}</h2>
            <Link href={href} > <X /></Link>
        </div>
        
        )
}

export default FormHeader