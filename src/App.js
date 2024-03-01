import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import mockData from './tasks.json'
import TodoList from './Componnets/TodoList';
import TodoForm from './Componnets/TodoForm';

function App() {
  const [tasks,setTasks]=useState(mockData)

  const onComplete = (id)=>{
    setTasks(tasks.map((task)=>{
      return task.id == id ? {...task,completed:!task.completed} : {...task}
    }))
      
  }

  const onDelete = (id)=>{
    const updateTasks = tasks.filter(task => task.id !== id);
    setTasks(updateTasks)
  }

  const addTask= (userInput)=>{
    let task = {id:+new Date(),task:userInput,completed:false}
      setTasks([...tasks,task])
  }
  return (
    <div className="App">
      <TodoForm addTask={addTask}/>
      <TodoList tasks={tasks} onComplete={onComplete} onDelete={onDelete}/>
    </div>
  );
}

export default App;
