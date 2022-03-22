

export const youtube_video_id_parser =(url) => {
    var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
    var match = url.match(regExp);
    return (match && match[1].length==11)? match[1] : false;
}


export const get_youtube_thumbnail = (url, quality) => {
    if (!url) {
        return false;
    }

    let video_id, thumbnail, result;
    if (result = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)){
        video_id = result.pop();
    }

    else if (result = url.match(/youtu.be\/(.{11})/)){
        video_id = result.pop();
    }

    if (video_id) {
        if (typeof quality == "undefined"){
            quality = 'high';
        }
    
        const quality_key = 'maxresdefault'; // Max quality

        if (quality == 'low'){
            quality_key = 'sddefault';

        } else if (quality == 'medium'){
            quality_key = 'mqdefault';

        } else if (quality == 'high') {
            quality_key = 'hqdefault';
        }

        const thumbnail = "https://img.youtube.com/vi/"+video_id+"/"+quality_key+".jpg";
        return thumbnail;
    }
    
}