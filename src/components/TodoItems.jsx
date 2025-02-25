import React from 'react'
import { assets } from '../assets/assets'

const TodoItems = ({ id, text, isComplete, deleteTodo, toggle }) => {
  return (
    <div className='flex items-center my-3 gap-2 hover:bg-gray-200 h-10 pl-2 pr-2 rounded-full'>
        <div onClick={() => {toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={isComplete ? assets.tick_icon : assets.not_tick_icon} alt='tick' />
            <p className={`text-text ml-4 text-[18px] decoration-slate-500;
            ${isComplete ? 'line-through' : ''}`}>{text}</p>
        </div>

        <img onClick={() => {deleteTodo(id)}} className='w-7 cursor-pointer' src={assets.delete_icon} alt='delete' />
    </div>
  )
}

export default TodoItems
