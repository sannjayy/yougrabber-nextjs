/* eslint-disable import/no-anonymous-default-export */
import { image_by_youtube_channel_url } from "../../../utils"
const cheerio = require('cheerio');
const axios = require('axios');
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
	if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Not allowed` });
    }
	const { url } = req.body;
	const key = req.headers['x-master-key']

	if (!url || key != 'znascloud') {
        return res.status(400).json({ error: `Bad request` });
	}

	try {
		// const img_url = image_by_youtube_channel_url(url)
		let imgUrl;
		axios.get(url)
			.then((response) => {
				if (response.status === 200) {        
					const $ = cheerio.load(response.data)
					const html = $.html()
					const result = html.match(/{\"url\"\:\"https:\/\/yt3\.ggpht\.com\/(.+)\"\,\"width\"\:48/)
                    // console.log(typeof(result));
					imgUrl = `https://yt3.ggpht.com/${result[1]}`

					return res.status(200).json({ img: imgUrl })
				}
			}).catch((error) => {
				console.log('error: ',error);                
			});
            
	} catch (err) {
		return res.status(500).json({
			error: 'Something wents wrong.'
		});
	}
}
