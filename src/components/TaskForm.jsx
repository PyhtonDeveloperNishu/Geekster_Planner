import React, { useState } from 'react'

const TaskForm = () => {
  const [subject,setSubject] = useState("");
  const [hour ,setHour] = useState('');




  return (
    <div>
        <input type="text"  placeholder='Subject' onChange={e =>setSubject(e.target.value)} value={subject}/>
        <input type="number"  placeholder='Hour' onChange={e =>setHour(Number(e.target.value))}  value={hour}/>
        <button> Add </button>
    </div>
  )
}

export default TaskForm