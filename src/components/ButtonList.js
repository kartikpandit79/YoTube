import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex '>
      <Button name="All" />
      <Button name="Streaming" />
      <Button name="Podcast" />
      <Button name="News" />
      <Button name="Cooking" />
      <Button name="Cricket" />
      <Button name="BasketBall" />
    </div>
  )
}

export default ButtonList