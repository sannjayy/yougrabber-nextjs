import React, {useState, useEffect} from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from '../components/Footer'
import Header from '../components/Header'
import AppGrid from "../components/Home/AppGrid";
import Link from "next/link"; 


export default function Home() {

	return (
		<div className="container-fluid">
			<Head>
				<title>Online Tool</title>
				<meta name="description" content="Online Tools" />
			</Head>

			<div className="row">
				<Header />
                <AppGrid 
                    title='YouTube Thumbnail Downloader'
                    path='/youtube/thumbnail-downloader'
                />
                <AppGrid 
                    title='YouTube Profile Picture Downloader'
                    path='/youtube/profile-picture-download'
                />
			</div>

			{/* <Footer /> */}
		</div>
	);
}
