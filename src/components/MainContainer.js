import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useDispatch } from 'react-redux'
import { openSidebar } from '../Utils/appSlice'

const MainContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(openSidebar())
    }, [])
    return (
        <div className=''>
            <ButtonList />
            <VideoContainer />
        </div>
    )
}

export default MainContainer