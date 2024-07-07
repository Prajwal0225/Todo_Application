import React, { useState } from 'react';
import '../App.css'

function ViewTodos(){
    const [todolist,settodolist]=useState([[]]);
    const [showTodos,setShowTodos] = useState(false);
    const fetchtodo = async()=>{
        try{
        await fetch("http://localhost:80/todos")
                        .then(async(res)=>await res.json())
                        .then(data =>{

                        settodolist(data);
                        setShowTodos(true); 
                        console.log(todolist)
        })
    }catch(err){
        console.log(err);
    }
}

    const markTodoComplete= async(id)=>{
        await fetch("http://localhost:80/todo",{
        method:"PUT",
        headers:{
            id:id
        }
    }).then(res=>res.json())
    .then(data=>console.log(data));
    }

    const deleteTodo = async(id)=>{
        await fetch("http://localhost:80/todo",{
        method:"DELETE",
        headers:{
            id:id
        }
    }).then(res=>res.json())
    .then(data=>console.log(data));
    }

    return(<>
    <div>
    <div className='showtodobtndiv'>
    <button className='showtodobtn' onClick={fetchtodo}>show todos</button>
    </div>
        <ul className='todosdiv' style={{ visibility: showTodos ? 'visible' : 'hidden' }}>
                    {todolist.map((todo) => (
                        <div>
                            <h2 className='todoheading'>{todo.title}</h2>
                            <p className='todopara'>{todo.description}</p>
                            <button className='makeascompletebtn' onClick={() => markTodoComplete(todo._id)}>{todo.completed ? "Completed" : "Mark as Completed"}</button>
                            <button className='deletetodobtn' onClick={() => deleteTodo(todo._id)}>Delete to-do</button>
                        </div>
                        
                    ))}
                </ul>
                </div>
    </>)
}

export default ViewTodos;