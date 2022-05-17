import React, {useState, useEffect} from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from '../../components/Footer'
import Form from '../../components/YouTube/SubmitLinkForm'
import Header from '../../components/Header'
import styles from '../../styles/YouTube.module.css'
import ProfileImage from '../../components/YouTube/ProfileImageCard'
import Loader from "../../components/Common/Loader";
export default function YoutubeThumbnailDownloader() {
	const [url, setUrl] = useState('')
	const [imageSrc, setImageSrc] = useState(null)
	const [loading, isLoading] = useState(false)
	const [error, isError] = useState(false)

	const onSubmit = (e) => {
		e.preventDefault()
		fetchImage(url)
	}
    const fetchImage = async (url) => {
        isLoading(true)
        try {
            const res = await fetch('/api/youtube/fetch-image', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-master-key': `znascloud`
                },
                body: JSON.stringify({ url })
            });
            const data = await res.json();
            if (res.status === 200) {
                // console.log(data.img);
                setImageSrc(data.img)

            } else {
                console.log('error');
            }
            isLoading(false)

            // console.log(object);
        } catch (err) {
            
            isError(true)
            isLoading(false)
            // console.log('errrr', err);
        }
    }

	// useEffect(() => {
        
	// 	url && fetchImage(url)
	// }, [url])
	return (
		<div className="container">
			<Head>
				<title>YouTube Profile Picture Downloader</title>
				<meta name="description" content="YouTube Profile Picture Downloader" />
			</Head>

			<div className="row">
                <h1 className='text-center mt-3'>YouTube Profile Picture Downloader</h1>
                <p className='text-center'>Paste Youtube Channel URL</p>
				<div className="col-md-12">
					<Form 
						url={url}
						placeholder='https://www.youtube.com/channel/UCe5Q9D4UQDLJvtID0YPJx8w'
						setUrl={setUrl}
						onSubmit={onSubmit}
					/>

				</div>
                <div className="col-md-12 m-auto">
                    { error && 'EROROR'}
                    { loading && <Loader style={2} />}
                    { imageSrc && <ProfileImage url={imageSrc} /> }
				</div>				
            </div>

			<Footer />
		</div>
	);
}
