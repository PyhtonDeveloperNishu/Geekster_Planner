import React, { useState } from 'react'

const TaskForm = ({setTasks}) => {
  const [subject,setSubject] = useState("");
  const [hour ,setHour] = useState('');

  const addTask=()=>{
      if(!subject || !hour) return;
      const newTask = {
        id:Date.now() ,
        subject,
        hour:parseInt(hour)
      };
      setTasks(prev=>[...prev,newTask]);
      setSubject('');
      setHour('');
      
      
  }



  return (
    <div style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      gap:'5px',

    }}>
        <input type="text"  placeholder='Subject' onChange={e =>setSubject(e.target.value)} value={subject}
        style={{
          height:'20px',
          width:'200px',
          padding:'7px',
          borderRadius:'5px',
          border:'0.5px solid gray'
        }}/>
        <input type="number"  placeholder='Hour' onChange={e =>setHour(Number(e.target.value))}  value={hour}
        style={{
          height:'20px',
          width:'50px',
          padding:'7px',
          borderRadius:'5px',
          border:'0.5px solid gray'
        }}/>
        <button onClick={addTask}
        style={{
          padding:'10px',
          color:'white',
          backgroundColor:'blueviolet',
          border:'none',
          borderRadius:'5px'
        }}> Add </button>
       
    </div>
  )
}

export default TaskForm