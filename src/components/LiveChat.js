import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../Utils/Helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage] = useState("")

    const chatMessage = useSelector(store => store.chat.message)
    useEffect(() => {
        // Api polling or Long polling
        const interval = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomMessage(20)
            }))
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addMessage({
            name: "Kartik",
            message: liveMessage
        }));
        setLiveMessage("")
    }

    return (
        <>
            <div className='ml-2 p-2 border border-black w-full h-[400px] bg-slate-100 rounded-lg 
        overflow-y-scroll flex flex-col-reverse'>
                {chatMessage?.map((val, id) => <ChatMessage key={id} name={val.name} message={val.message} />)}
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className='w-full p-2 ml-2 border border-black'>
                <input placeholder='Type your message' value={liveMessage}
                    onChange={(e) => { setLiveMessage(e.target.value) }}
                    className='w-80 p-2 m-2' type='text' />
                <button type='submit' className='bg-gray-100 p-2 m-2'>Submit</button>
            </form>
        </>
    )
}

export default LiveChat