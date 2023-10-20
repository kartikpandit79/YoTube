import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("v")); 

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeSidebar())
    }, [])
    return (
        <div>WatchPage</div>
    )
}

export default WatchPage