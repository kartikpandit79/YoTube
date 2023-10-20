import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../Utils/Constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideos();
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await data.json();
    console.log(jsonData);
    setVideo(jsonData.items)
  }


  return (
    <div className='flex flex-wrap'>
      {video.length > 0 && video.map(item => (
        <Link to={`/watch?v=${item.id}`} > <VideoCard key={item.id} info={item} /></Link>
      ))
      }
    </div >
  )
}

export default VideoContainer