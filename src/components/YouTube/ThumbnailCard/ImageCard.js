/* eslint-disable @next/next/no-img-element */

import React from 'react'
import styles from '../../../styles/YouTube.module.css'
export default function Thumbnail({title, videoID, quality}) {
  return (
    <div className="col-md-5 col-12 shadow-lg p-3 mb-5 bg-body rounded m-auto">
        <h5 className='text-center mb-3'>{title}</h5>
        <div className={styles.ThumbnailContaner}>
            <img 
                src={`https://img.youtube.com/vi/${videoID}/${quality}`} 
                className="rounded" 
                alt={title} 
                height="100%"
                width="100%"
                title={title}
            />
        </div>
        
        <div className="d-flex justify-content-center">
            <a href="{`https://img.youtube.com/vi/${videoID}/${quality}`}" download={`youtube_thumbnail_${quality}`} rel="noopener noreferrer" target="_blank" className='btn btn-outline-dark mt-3'>Download</a>
        </div>
    </div>
  )
}
