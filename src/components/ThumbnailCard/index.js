import React from "react";
import Image from 'next/image'

export default function Index({videoID}) {
	return <>
		<div className="row">
			<div className="col-3">
				<Image 
					src={`https://img.youtube.com/vi/${videoID}/sddefault.jpg`} 
					className="rounded" 
					alt="Low Quality" 
					quality={100}
					width="100vw"
					height="100%"
    				objectFit="contain"
					layout="responsive"
    				placeholder="empty" 
					title="Low Quality"
				/>
				
			</div>
			<div className="col-3">
				<Image 
					src={`https://img.youtube.com/vi/${videoID}/mqdefault.jpg`} 
					className="rounded" 
					alt="Medium Quality" 
					quality={100}
					width="100vw" 
					height="100%"
    				objectFit="contain"
					layout="responsive"
					placeholder="empty" 
					title="Medium Quality"
				/>
			</div>
			<div className="col-3">
				<Image 
					src={`https://img.youtube.com/vi/${videoID}/hqdefault.jpg`} 
					className="rounded" 
					alt="High Quality" 
					quality={100}
					width="100vw" 
					height="100%"
    				objectFit="contain"
					layout="responsive"
					placeholder="empty" 
					title="High Quality"
				/>
			</div>
			<div className="col-3">
				<Image 
					src={`https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`} 
					className="rounded" 
					alt="Maximum Quality" 
					quality={100}
					width="100vw" 
					height="100%"
    				objectFit="contain"
					layout="responsive"
					placeholder="empty" 
					title="Maximum Quality"
				/>
			</div>
		</div>
	</>;
}
