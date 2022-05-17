/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../../../styles/YouTube.module.css'
export default function Index({url}) {
  return (
    <div className="col-md-12 col-12 shadow-lg p-3 mb-5 bg-body rounded m-auto mt-5">
        <h5 className='text-center mb-3'>Download YouTube Profile Picture</h5>
        <div className={styles.ProfileImageContaner}>
            <img 
                src={url.replace("s48", "s900")} 
                className="rounded" 
                alt='img'
                height="100%"
                width="100%"
                title='img'
            />
        </div>
        
        <div className="d-flex justify-content-center">
            <a href={url.replace("s48", "s900")} download rel="noopener noreferrer" target="_blank" className='btn btn-outline-dark mt-3'>Download</a>
        </div>
    </div>
  )
}
