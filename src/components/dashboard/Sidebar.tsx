import { Archive, BaggageClaim, BarChart, BarChart4, Cable, ChevronDown, ChevronLeft, File, FilePlus, Home, Plus, PlusCircle, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import CollapsableLinks from './CollapsableLinks'
import SidebarDropdownLink from './SidebarDropdownLink'
import { ILink } from '@/app/(back-office)/link'


const Sidebar = () => {

  const inventoryLinks: ILink[] = [
    {
      id: 1,
      title: 'Items',
      href: '/dashboard/inventory'

    }, {
      id: 1,
      title: 'Categories',
      href: '/dashboard/inventory'

    }, {
      id: 1,
      title: 'Brands',
      href: '/dashboard/inventory'
    }, {
      id: 1,
      title: 'Units',
      href: '/dashboard/inventory'

    }, {
      id: 1,
      title: 'Warehouse',
      href: '/dashboard/inventory'

    },
    {
      id: 3,
      title: 'Inventory Adjustments',
      href: '/dashboard/inventory'
    }

    // },
    // {
    //   id: 2,
    //   title: 'Items Groups',
    //   href: '/dashboard/inventory/items/new'

    // },

  ]

  const salesLinks: ILink[] = [
    {
      id: 1,
      title: 'Customers',
      href: ''

    },
    {
      id: 2,
      title: 'Sales Orders',
      href: ''

    },
    {
      id: 3,
      title: 'Packages',
      href: ''

    },
    {
      id: 3,
      title: 'Shipments',
      href: ''

    }, {
      id: 3,
      title: 'Invoices',
      href: ''

    }
    , {
      id: 3,
      title: 'Sales Receipts',
      href: ''
    }, {
      id: 3,
      title: 'Payments Received',
      href: ''

    }
    , {
      id: 3,
      title: 'Sales Returns',
      href: ''

    },
    {
      id: 3,
      title: 'Credit Notes',
      href: ''

    }

  ]
  const PurchasesLinks: ILink[] = [
    {
      id: 1,
      title: 'Customers',
      href: ''

    },
    {
      id: 2,
      title: 'Sales Orders',
      href: ''

    },
    {
      id: 3,
      title: 'Packages',
      href: ''

    },
    {
      id: 3,
      title: 'Shipments',
      href: ''

    }, {
      id: 3,
      title: 'Invoices',
      href: ''

    }
    , {
      id: 3,
      title: 'Sales Receipts',
      href: ''
    }, {
      id: 3,
      title: 'Payments Received',
      href: ''

    }
    , {
      id: 3,
      title: 'Sales Returns',
      href: ''

    },
    {
      id: 3,
      title: 'Credit Notes',
      href: ''

    }

  ]
  return (
    <div className='w-60 min-h-screen bg-slate-800 text-slate-50 fixed'>
      {/* Top part */}
      <div className='flex flex-col'>
        {/* logo */}
        <div className='bg-slate-950 flex space-x-2 items-center py-4'>

          <ShoppingCart />
          <span className='text-xl font-semibold'>
            Inventory</span>


        </div>
        <nav className='flex flex-col gap-3 px-3 py-6' >

          <Link href={"/"} className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 px-2 rounded-md"><Home className='w-4 h-4' />
            <span>Home</span></Link>

          <SidebarDropdownLink title={'Inventory'} links={inventoryLinks} Icon={BaggageClaim} />


          {/* <button className='p-2 flex items-center space-x-2'>
            <Link href={"/"} className="flex items-center space-x-2  text-slate-50 p-2 px-2"><BaggageClaim className='w-4 h-4' />
              <span>Inventory</span> </Link>
          </button> */}
          <SidebarDropdownLink title={'Sales'} links={salesLinks} Icon={ShoppingBag} />
          {/* <button className='p-2 flex items-center space-x-2'>

            <Link href={"/"} className="flex items-center space-x-2 text-slate-50 py-2 px-2"><ShoppingBasket className='w-4 h-4' />
              <span>Purchases</span> </Link>
          </button> */}
          <SidebarDropdownLink title={'Purchases'} links={salesLinks} Icon={ShoppingBasket} />


          <Link href={"/"} className="p-2 flex items-center space-x-2 text-slate-50 py-2 px-2"><Cable className='w-4 h-4' />
            <span>Integrations</span></Link>

          <Link href={"/"} className="p-2 flex items-center space-x-2  text-slate-50 py-2 px-2"><BarChart4 className='w-4 h-4' />
            <span>Reports</span></Link>

          <Link href={"/"} className="p-2 flex items-center space-x-2  text-slate-50 py-2 px-2"><FilePlus className='w-4 h-4' />
            <span>Documents</span> </Link>


        </nav>

        <SubscriptionCard />
      </div>
      {/* links */}

      {/* bottom */}
      <div className="flex flex-col">
        <button className='bg-slate-950 flex space-x-2 items-center justify-center py-3 px-2'>

          <ChevronLeft />


        </button>

      </div>
      {/* subcription card */}

      {/* footer icon */}


    </div>
  )
}

export default Sidebar