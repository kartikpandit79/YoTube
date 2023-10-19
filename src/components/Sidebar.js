import React from 'react'

const Sidebar = () => {
  return (
    <div className='p-5 shadow-lg w-[12rem]'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Live</li>
        <li>Video</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li>Movie</li>
        <li>Gaming</li>
        <li>Music</li>
        <li>Sports</li>
      </ul>
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Training  </li>
        <li>Learning</li>
        <li>Film</li>
        <li>Live</li>
        <li>News</li>
      </ul>
    </div>
  )
}

export default Sidebar