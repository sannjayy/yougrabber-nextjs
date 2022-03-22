import React, {useState, useEffect} from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from '../components/Footer'
import Form from '../components/SubmitLinkForm'
import ThumbnailCard from '../components/ThumbnailCard'
import Header from '../components/Header'
import { youtube_video_id_parser } from "../utils";


export default function Home() {
	const [url, setUrl] = useState('')
	const [videoID, setVideoID] = useState(null)
	const onSubmit = (e) => {
		e.preventDefault()
		setVideoID(youtube_video_id_parser(url))
	}

	useEffect(() => {
		const videoID = youtube_video_id_parser(url)
		if (videoID) {
			setVideoID(videoID)
		} else {
			setVideoID(null)
		}
	}, [url])
	return (
		<div className="container">
			<Head>
				<title>YouGrabber</title>
				<meta name="description" content="YouTube Thumbnail Grabber" />
			</Head>

			<div className="row">
				<Header />
				<div className="col-md-12">
					<Form 
						url={url}
						setUrl={setUrl}
						onSubmit={onSubmit}
					/>
				</div>
				<div className="col-md-12">
					{ videoID && <ThumbnailCard videoID={videoID} /> }
				</div>
			</div>

			<Footer />
		</div>
	);
}
