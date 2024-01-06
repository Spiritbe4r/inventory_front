import { Check, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SalesActivityCard from './SalesActivityCard'
import InventorySummaryCard from './InventorySummaryCard';

export interface IActivity {
  id: number;
  title: string;
  number: number;
  unit: string;
  href: string;
  color: string;
}

const SalesOverview = () => {

  const salesActivity: IActivity[] = [{
    id: 1,
    title: 'To be Packed',
    number: 10,
    unit: 'Qty',
    href: '#',
    color: 'text-blue-600'

  }, {
    id: 2,
    title: 'To be Shipped',
    number: 10,
    unit: 'Qty',
    href: '#',
    color: 'text-red-600'

  }, {
    id: 3,
    title: 'To be Delivered',
    number: 0,
    unit: 'Pkgs',
    href: '#',
    color: 'text-green-600'

  }, {
    id: 4,
    title: 'To be Invoice',
    number: 10,
    unit: 'Qty',
    href: '#',
    color: 'text-yellow-600'

  }]

  const inventorySumary = [{
    id: 1,
    title: 'Quantity in Hand',
    number: 10


  }, {
    id: 2,
    title: 'Quantity to be received',
    number: 10


  }]
  return (
    <div className='bg-blue-100 border-b border-slate-300  grid grid-cols-12 gap-4'>

      {/* sales activity */}
      <div className="col-span-8 border-r p-8 border-slate-300">
        <h2 className='mb-6 text-xl '>Sales Activity</h2>
        <div className=" pr-8 grid grid-cols-4 gap-4">
          {/* card */}
          {
            salesActivity.map((activity: IActivity) => {

              return <SalesActivityCard key={activity.id} {...activity} />

            }

            )
          }

        </div>

      </div>
      {/* inventory sumary */}
      <div className='col-span-4 p-8'>
        <h2 className='mb-6 text-xl '>Inventory Sumary</h2>
        {
          inventorySumary.map((item) =>

            <InventorySummaryCard key={item.id} {...item}/>
          )
        }
      </div>

    </div>
  )
}

export default SalesOverview