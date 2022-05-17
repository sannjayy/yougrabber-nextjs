import React from 'react'
import Link from "next/link";  

export default function AppGrid({title, path}) {
  return (
    <div className='col-md-6 col-12'>
    <Link href={path}>
          <a>
            <div className='d-flex justify-content-center align-items-center' style={{ border: '1px solid red', padding: 10, height: 300, cursor: 'pointer' }}>
                <h1 className='text-center'>{title}</h1>
            </div>
          </a>
      </Link>
    </div>
  )
}
