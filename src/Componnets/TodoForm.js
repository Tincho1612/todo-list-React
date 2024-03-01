import React, { useState } from "react";

 function TodoForm({addTask}){
    const [userInput,setUserInput]= useState('')
    const inputChange = (e)=>{
        setUserInput(e.currentTarget.value)
    }

    const formSubmit = (e)=>{
        e.preventDefault()
        if (userInput.trim()!==''){
            addTask(userInput)
            setUserInput('')
        }
    }
    return (
        <div style={{margin:20}}>
            <form onSubmit={formSubmit}>
                <input type="text" value={userInput} onChange={inputChange}/>
                <button>Add task</button>
            </form>
        </div>
    )
}

export default TodoForm