import React from "react";
import TodoItem from "./TodoItem";
 function TodoList({tasks,onComplete,onDelete}){
    
    return (<div>
        {
            tasks.map((task)=>(
                <TodoItem key={`todo-${task.id}`} task={task} onComplete={onComplete} onDelete={onDelete}/>
            ))
        }
    </div>
    
    )
}

export default TodoList