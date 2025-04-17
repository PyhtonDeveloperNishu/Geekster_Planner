import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const TaskList = ({tasks,setTasks}) => {
  const handleDec = id =>{
    setTasks(prev=>
      prev.map(task=>(task.id===id ? {...task,hour:Math.max(0,task.hour-1)}:task)
    ));
  };

  const handleInc = id=>{
    setTasks(prev=>
      prev.map(task=>(task.id === id ? {...task,hour:task.hour+1}:task))
    )
  }

  const handleDelete = id =>{
    setTasks(prev=>
      prev.filter(
        task=>task.id!==id)
      )
  }
  return (
    <ul style={{
        listStyleType:'none',
        flexDirection:'column',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'10px'
    }}>
      {tasks.map(task=>(
        <li key={task.id} style={{
          display:'flex',
          flexWrap:'1',
          alignItems:'center',
          justifyContent:'center',
          gap:'8px'
        }}>
          {task.subject} - {task.hour} hours 
          <button onClick={()=>handleDec(task.id)}style={{
            backgroundColor:'#EF4444',
            textAlign:'center',
            border:'1px solid gray',
            borderRadius:'2px',
            color:'white',
            padding:'4px'
          }}><FaMinus /></button>
          <button onClick={()=>handleInc(task.id)} style={{
            backgroundColor:'#22C55E',
            textAlign:'center',
            color:'white',
            border:'1px solid gray',
            borderRadius:'2px',
            padding:'4px'
          }}><FaPlus 
          /></button>
          <button onClick={()=>handleDelete(task.id)}
            style={{
              border:'1px solid gray',
              borderRadius:'2px',
              textAlign:'center',
              alignItems:'center',
              padding:'4px'
            }}><MdDelete /></button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList