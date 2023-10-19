import React from 'react'
import { humburger_menu, logo, user_icon } from '../Utils/Constant'
import { useDispatch } from 'react-redux'
import { toggleMenuOpen } from '../Utils/appSlice'

const Head = () => {
  const dispatch = useDispatch()

  const toggleHandler = () => {
    dispatch(toggleMenuOpen())
  }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img className='h-8 m-[12.5px] cursor-pointer'
          src={humburger_menu} onClick={() => toggleHandler()}
          alt='menu'
        />
        <img src={logo} className='h-14 mx-2'
          alt='logo'
        />
      </div>
      <div className='col-span-10 text-center'>
        <input type='search' placeholder='Search...' className='w-1/2 border border-gray-400 rounded-l-full p-2' />
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
      </div>
      <div className='col-span-1'>
        <img src={user_icon} className='h-8'
          alt='user-icon'
        />
      </div>
    </div>
  )
}

export default Head