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
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'

    }}>
      <h2 style={{
        textAlign:'center',
        
      }}>Geekster Education Planner</h2>
      <TaskForm  setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default App