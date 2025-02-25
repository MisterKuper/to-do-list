import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'
import TodoItems from './TodoItems'

const Todo = () => {
  
  const [todoList, setTodoList] = useState(localStorage.getItem('todos') ? 
  JSON.parse(localStorage.getItem('todos')) : []);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === '') {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);

    inputRef.current.value = '';
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    })
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
    
  }, [todoList]);

  return (
    <div className='bg-stone-50 place-self-center w-11/12 max-w-md 
    flex flex-col p-7 min-h-[550px] rounded-xl'>

      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={assets.todo_icon} alt='to-do icon' />
        <h1 className='text-3xl text-text font-semibold'>To-Do List</h1>
      </div>
      
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none 
        flex-1/2 h-1/4 pl-6 pr-2 placeholder:text-slate-600' 
        type='text' placeholder='Add your task' />
        <button onClick={add} className='border-none rounded-full bg-amber-500 hover:bg-amber-400
        active:bg-amber-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD</button>
      </div>

      <div>
        {todoList.map((item, index) => {
          return <TodoItems key={index} id={item.id} text={item.text} isComplete={item.isComplete} 
          deleteTodo={deleteTodo} toggle={toggle} />
        })}
      </div>
    </div>
  )
}

export default Todo
