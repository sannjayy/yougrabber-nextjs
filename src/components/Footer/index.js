import React from 'react'
import styles from '../../styles/Home.module.css'

export default function Index() {
  return (
    <footer className={`${[styles.footer]} mt-5`}>
        <a
            href="https://znas.in"
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by Znas Solutions
            <span className={styles.logo}>
                {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
            </span>
        </a>
    </footer>
  )
}
