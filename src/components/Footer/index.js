import React from 'react'
import styles from '../../styles/Home.module.css'
import Link from "next/link";   

export default function Index() {
  return (
    <>
        <div style={{marginTop:20}}></div>
        {/* <hr style={{marginBottom:20}}/> */}
        <footer className={`${[styles.footer]} mt-5`} style={{marginBottom:20}}>        
            <Link href="/youtube/thumbnail-downloader">
            <a>YouTube Thumbnail Download</a>
            </Link>
            <Link href="/youtube/profile-picture-download">
            <a>YouTube Profile Picture Download</a>
            </Link>
        </footer>
    </>
  )
}
