import React from "react";
import Image from 'next/image'
import ImageCard from "./ImageCard";

export default function Index({videoID}) {
    const thumbnailFiles = [
        {
            title: 'MQ 320x180',
            quality: 'sddefault.jpg',
        },
        {
            title: 'HQ 480x360',
            quality: 'mqdefault.jpg',
        },
        {
            title: 'SD 640x480',
            quality: 'hqdefault.jpg',
        },
        {
            title: 'HD 1920x1080',
            quality: 'maxresdefault.jpg',
        },
    ]
    
	return <div className="row gap-1 mt-5">
        {thumbnailFiles.map((data, i) => {
            return <ImageCard 
                key={i}
                videoID={videoID} 
                title={data.title}
                quality={data.quality}
            />
        })}
            
	</div>;
}
