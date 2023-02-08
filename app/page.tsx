"use client"
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import React, { useState} from "react";
const inter = Inter({ subsets: ['latin'] })

interface Todo {
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <main>
      <title>TO DO LIST</title>
      <div className='pt-20'>
        <center>
          <h1 className="text-black text-7xl font-bold leading-tight">
            T O D O's
          </h1>
        </center>
      </div>
      <div className='pt-9'>
      <center>
      <div className='flex justify-center h-fit w-3/5 bg-black rounded-3xl shadow-2xl opacity-75'>
      <div className='py-5'>
      <form onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const input = form.elements.namedItem('todo') as HTMLInputElement;
          addTodo(input.value);
          form.reset();
        }}>
        <input name="todo" className="p-2 border border-gray-400 rounded-lg w-20%" type="text" placeholder="Enter Task" />
        <button className="p-2 bg-blue-500 text-white rounded-lg" type="submit">
          Add Task
        </button>
      </form>
      <ul className='pt-7 font-light text-white'>
      {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}{' '}
            <button className="p-2 bg-blue-500 text-white rounded-lg space-x-3" type="button" onClick={() => toggleTodo(index)}>
              {todo.completed ? 'Uncomplete' : 'Complete'}
            </button>
            <button className="p-2 bg-blue-500 text-white rounded-lg" type="button" onClick={() => removeTodo(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      </div>
      </div>
      </center>
      </div>
    </main>
  )
}
export default TodoList