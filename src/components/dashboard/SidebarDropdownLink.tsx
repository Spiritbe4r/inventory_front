import { BaggageClaim, ChevronDown, ChevronRight, ChevronsLeftRight } from 'lucide-react'
import React from 'react'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../ui/collapsible'
import CollapsableLinks from './CollapsableLinks'
import { ILink } from '@/app/(back-office)/link'
import LucideIcon from './LucideIcon'

const SidebarDropdownLink = ({ title, links, Icon }: { title: string, links: ILink[], Icon: any }) => {
    return (
        <Collapsible>
            <CollapsibleTrigger className='flex justify-between items-center  w-full'>
               <div className="p-2 flex items-center space-x-2">
               <Icon  className='w-4 h-4' />
                <span>{title}</span>

               </div>
               <ChevronDown className='w-4 h-4' />
               </CollapsibleTrigger>
            <CollapsibleContent>

                {
                    links.map((item) => {
                        return <CollapsableLinks key={item.id} {...item} />

                    })
                }


            </CollapsibleContent>
        </Collapsible >
    )
}

export default SidebarDropdownLink