import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeSidebar())
    }, [])
    return (
        <div className='flex flex-col w-full'>
            <div className='flex px-5  w-full'>
                <div>
                    <iframe width="800" height="400"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        // src="https://www.youtube.com/embed/aC43CJ29oH4?si=-yoWunPx_S5EuyZI"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </div>
                <div className=' w-full'>
                    <LiveChat />
                </div>
            </div>
            <CommentContainer />
        </div>
    )
}

export default WatchPage