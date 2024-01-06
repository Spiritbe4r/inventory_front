import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import { Boxes, Component, List, Plus, ScrollText, Shirt } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Inventory = () => {

    const optionalCards = [
        // {
        //     title: 'Item Groups',
        //     description: 'Create multiple variants of the same item using items groups',
        //     link: '/new', linkTitle: 'New Item Group', enabled: true, icon: Boxes
        // },
        {
            title: 'Items',
            description: 'Create standalone items and services that you buy and sell',
            link: '/dashboard/inventory/items/new', linkTitle: 'New Item', enabled: true, icon: Shirt
        },{
            title: 'Categories',
            description: 'Bundle different items together and sell them as kits',
            link: '/dashboard/inventory/categories/new', linkTitle: 'New Category', enabled: true, icon: Boxes
        },
        {
            title: 'Brands',
            description: 'Tweak your items with prices for specific contacts or transactions',
            link: '/dashboard/inventory/brands/new', linkTitle: 'New Brand', enabled: true, icon: ScrollText
        },
        {
            title: 'Warehouse',
            description: 'Tweak your items with prices for specific contacts or transactions',
            link: '/dashboard/inventory/warehouse/new', linkTitle: 'New Warehouse', enabled: true, icon: ScrollText
        }
        ,
        {
            title: 'Units',
            description: 'Tweak your items with prices for specific contacts or transactions',
            link: '/dashboard/inventory/units/new', linkTitle: 'New Unit', enabled: true, icon: Component
        }

    ]
    return (
        <div>
            <FixedHeader newLink="/dashboard/inventory/items/new"/>
            <h2>Inventory creation Options</h2>
            <div className="grid grid-col-1 lg:grid-cols-2 py-8 px-16 gap-6">
                {
                    optionalCards.map((card, i) => {
                        return <OptionCard key={i} optionData={card} />
                    })
                }


            </div>
        </div>
    )
}

export default Inventory