import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../Utils/Constant';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [video, setVideo] = useState([]);
  const [errorValue, setError] = useState(null)


  useEffect(() => {
    getVideos();
  }, [])



  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await data.json();
    // console.log("+++++++++++++++++++++=",jsonData);
    if (jsonData.error) {
      setError(jsonData.error.errors[0].reason)
    }
    else { setVideo(jsonData.items) }
  }

  // console.log(",**************", errorValue);

  return (

    <div>
      {errorValue ? <p className='m-5 font-bold t.capitalize'>{errorValue}</p> : (video.length > 0 && <div className='flex flex-wrap'>
        <AdVideoCard info={video[0]} />
        {video.map(item => (
          <Link key={item.id} to={`/watch?v=${item.id}`} > <VideoCard info={item} /></Link>
        ))}
      </div>)}
    </div>
  )
}

export default VideoContainer