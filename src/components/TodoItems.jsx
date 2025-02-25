import React from 'react'
import { assets } from '../assets/assets'

const TodoItems = ({ text }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={assets.tick_icon} alt='ticked' />
            <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>
        </div>

        <img className='w-4 cursor-pointer' src={assets.delete_icon} alt='delete' />
    </div>
  )
}

export default TodoItems
