import React from 'react'
import Avatar from './Avatar'

function Header({title}) {
  return (
    <div className='h-20 p-4 flex items-center space-x-4'>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <div className='grow flex justify-end items-center'>
            <Avatar firstletter='v' lastletter='g' />
        </div>
    </div>
  )
}

export default Header