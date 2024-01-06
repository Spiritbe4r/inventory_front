import React from 'react'

const InventorySummaryCard = (item: any) => {
    return (
        <div key={item.id} className="shadow rounded-lg py-3 border bg-white border-slate-200 hover:border-blue-400 
          p-4 cursor-pointer flex items-center 
          gap-3 justify-between transition-all duration-300 mb-4">

            <h2 className='text-slate-500 uppercase text-sm'>{item.title}</h2>
            <h4 className='text-2xl'>{item.number}</h4>
        </div>
    )
}

export default InventorySummaryCard