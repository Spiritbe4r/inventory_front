'use client'

import { Building2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const HomeNavbar = () => {

    const pathname = usePathname();
    const navLinks = [{
        id: 1,
        title: 'Dashboard',
        href: '/dashboard/home/overview',

    },
    {
        id: 2,
        title: 'Getting Started',
        href: '/dashboard/home/getting-started',

    },
    {
        id: 3,
        title: 'Recent Updates',
        href: '/dashboard/home/updates',

    },
    {
        id: 4,
        title: 'Announcements',
        href: '/dashboard/home/announcements',

    }

    ];

    return (
        <div className='h-32 p-5 header-bg bg-slate-50  border-b border-slate-300'>
            <div className="flex space-x-3">
                <div className="flex w-12 h-12 rounded-lg bg-white items-center justify-center">
                    <Building2 />

                </div>
                <div className="flex flex-col">
                    <p className='text-slate-900 font-semibold'>Hello, JB DEVEloper</p>
                    <span className='text-sm'>Garat</span>
                </div>
            </div>

            <nav className='sticky mt-6 flex space-x-4'>
                {
                    navLinks.map((link) => {
                        return <Link key={link.id}  className={`${pathname ===link.href ? 'py-1 border-b-2 border-blue-600':'py-1'}`} href={link.href}>{link.title}</Link>
                    })
                }

            </nav>
        </div>
    )
}

export default HomeNavbar