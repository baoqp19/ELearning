"use client"

import { IActiveLinkProps } from '@/app/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const ActiveLink = ({ url, children }: IActiveLinkProps) => {

  const pathName = usePathname();
  const isActive = url === pathName;

  return (
    <div>
      <Link href={url} className={`p-3 rounded-md flex items-center gap-3 transition-all${isActive
        ? "text-white bg-primary svg-animate"
        : "hover:text-primary hover:bg-primary hover:bg-opacity-10"}
     `}
      >
        {children}
      </Link>
    </div>
  )
}

export default ActiveLink