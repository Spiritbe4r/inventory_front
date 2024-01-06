'use client'

import { CreditCard, X } from 'lucide-react'
import React, { useState } from 'react'

const DashboardBanner = () => {

    const [hidden, setHidden] = useState(false);
    return (
        <div className={`${hidden ?"hidden" :"grid grid-cols-12 item-center py-6 px-16 bg-white gap-4 relative"}`}>

            {/* icon */}
            <div className="col-span-2">
                <CreditCard className='w-16 h-16 text-slate-500' />
            </div>
            <div className="col-span-6">
                {/* text  */}
                <h2 className='font-bold text-xl'> Start accepting online Payments</h2>
                <p>Bussinesses are moving towards online payments
                    as they are easy, secure and fast. Try them for your business today.
                </p>
            </div>


            <div className='col-span-3'>
                {/* button */}
                <button className='py-2 px-8 uppercase bg-blue-500 text-white text-sm rounded-lg'>Enabled</button>
            </div>

             {/* close-button */}
             <button className='absolute top-4 right-16' onClick={() => setHidden(true)}><X/></button>
        </div>
    )
}

export default DashboardBanner