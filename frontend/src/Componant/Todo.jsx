import React, { useState } from 'react'
import '../App.css'


async function dopostrequest(title,description){
 await fetch("http://localhost:80/todo",{
    method: "POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        title: title,
        description:description
    })
})
    .then(res=>{
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        return res.json();
    })
    .then(data=>{
    console.log("Response:",data);
}).catch(err=>{
    console.log("Error in posting data",err);
})
}

function Todo() {
    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");

    const handleAddTodo=()=>{
        dopostrequest(title,description);
    }

  return (
    <div className='inputdiv'>
    <input className='inputbox' placeholder='Todo' 
    onChange={(e)=>setTitle(e.target.value)}/> 

    <br/>
    <input className='inputbox' placeholder='Todo-descrption' 
    onChange={(e)=>setDescription(e.target.value)}  /> 

    <br/>
    <button className='addtodobtn'
    onClick={handleAddTodo}>Add to-do</button>
    </div>
  )
}

export default Todo
