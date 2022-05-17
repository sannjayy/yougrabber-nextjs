import React, {useState, useEffect} from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from '../../components/Footer'
import Form from '../../components/YouTube/SubmitLinkForm'
import ThumbnailCard from '../../components/YouTube/ThumbnailCard'
import Header from '../../components/Header'
import { youtube_video_id_parser } from "../../utils";
import styles from '../../styles/YouTube.module.css'

export default function YoutubeThumbnailDownloader() {
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
				<title>Youtube Thumbnail Downloader</title>
				<meta name="description" content="Youtube Thumbnail image downloader" />
			</Head>

			<div className="row">
                <h1 className='text-center mt-3'>Youtube Thumbnail Grabber</h1>
                <p className='text-center'>Youtube Thumbnail Downloader</p>
				<div className="col-md-12">
					<Form 
						url={url}
                        placeholder='https://www.youtube.com/watch?v=BJp45Yi-FL0'
						setUrl={setUrl}
						onSubmit={onSubmit}
					/>
				</div>
                <div className="col-md-12 m-auto">
                    { videoID && <ThumbnailCard videoID={videoID} /> }
				</div>				
            </div>

			<Footer />
		</div>
	);
}
