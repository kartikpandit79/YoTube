import React from 'react';
import { user_icon } from '../Utils/Constant';


const commentData = [
    {
        name: "Kartik-1 N1",
        text: "Lorem ipsum dolor sit amet",
        replies: [
            {
                name: "Pandit1 N2",
                text: "Lorem ipsum dolor sit amet",
                replies: [
                    {
                        name: "Meerut1 N3",
                        text: "Lorem ipsum dolor sit amet",
                        replies: [
                            {
                                name: "India1 N4",
                                text: "Lorem ipsum dolor sit amet",
                                replies: [
                                    {
                                        name: "Earth1 N5",
                                        text: "Lorem ipsum dolor sit amet",
                                        replies: []
                                    },
                                    {
                                        name: "Earth2 N5",
                                        text: "Lorem ipsum dolor sit amet",
                                        replies: [
                                            {
                                                name: "Univers1 N6",
                                                text: "Lorem ipsum dolor sit amet",
                                                replies: []
                                            },
                                            {
                                                name: "Univers2 N6",
                                                text: "Lorem ipsum dolor sit amet",
                                                replies: [
                                                    {
                                                        name: "MilkyWay1 N7",
                                                        text: "Lorem ipsum dolor sit amet",
                                                        replies: []
                                                    },
                                                    {
                                                        name: "Andromeda N7",
                                                        text: "Lorem ipsum dolor sit amet",
                                                        replies: []
                                                    },
                                                ]
                                            },
                                            {
                                                name: "Univers3 N6",
                                                text: "Lorem ipsum dolor sit amet",
                                                replies: [
                                                    {
                                                        name: "MilkyWay1 N7",
                                                        text: "Lorem ipsum dolor sit amet",
                                                        replies: []
                                                    },
                                                    {
                                                        name: "Andromeda N7",
                                                        text: "Lorem ipsum dolor sit amet",
                                                        replies: []
                                                    },
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name: "Pandit2 N2",
                text: "Lorem ipsum dolor sit amet",
                replies: []
            },
        ]
    },
    {
        name: "Kartik2 N1",
        text: "Lorem ipsum dolor sit amet",
        replies: []
    },
    {
        name: "Kartik3 N1",
        text: "Lorem ipsum dolor sit amet",
        replies: []
    },
    {
        name: "Kartik4 N1",
        text: "Lorem ipsum dolor sit amet",
        replies: []
    },
]

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='flex shadow-sm bg-gray-100 rounded-lg p-2 my-2'>
            <img alt="user" src={user_icon} className='px-3 w-16  h-8' />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentList = ({ comments }) => {
    return (
        comments.map((comment, id) => {
            return (
                <div key={id}>
                    <Comment data={comment} />
                    {comment.replies.length > 0 && <div className='pl-5 ml-5 border-l-black'>
                        <CommentList comments={comment.replies} />
                    </div>}
                </div>
            )
        })
    )
}


const CommentContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold py-2'>Comments:</h1>
            <CommentList comments={commentData} />
        </div>
    )
}

export default CommentContainer