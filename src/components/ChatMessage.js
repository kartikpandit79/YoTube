import React from 'react'
import { user_icon } from '../Utils/Constant'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex p-1 shadow-sm '>
            <img alt="user" className='px-3  h-5' src={user_icon} />
            <span className='font-bold px-1 text-sm'>{name}</span>
            <span className=' text-sm' >{message}</span>
        </div>
    )
}

export default ChatMessage