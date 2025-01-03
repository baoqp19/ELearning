import { menuItems } from '@/constants'
import Link from 'next/link'
import React from 'react'
import ActiveLink from '../common/ActiveLink'

const Siderbar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200">
      <a href="/" className="font-bold text-3xl inline-block mb-5">
        Ucademy
      </a>
      <ul className='flex flex-col gap-2'>
        {
          menuItems.map((item, index) => (
            <MenuItem
              key={index}
              url={item.url}
              title={item.title}
              icon={item.icon}
            ></MenuItem>
          ))
        }
      </ul>
    </div>
  )
}

function MenuItem({ url = "/", title = "", icon }: { url: string, title: string, icon?: React.ReactNode }) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  )
}

export default Siderbar