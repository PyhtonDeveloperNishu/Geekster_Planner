import React, { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks,setTasks]= useState([]);
  

  useEffect(()=>{
    const stored = localStorage.getItem('tasks');
    if(stored) {
      setTasks(JSON.parse(stored));
    }
  },[]);

  useEffect(()=>{
     localStorage.setItem('tasks',JSON.stringify(tasks))
  })
    
  return (
    <div>
      <h1>Geekster Education Planner</h1>
      <TaskForm  setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default App