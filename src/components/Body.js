import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';

const Body = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  console.log("toggleMenu", isMenuOpen);
  return (
    <div className='flex '>
      {isMenuOpen && <Sidebar />}
      <MainContainer />
    </div>
  )
}

export default Body