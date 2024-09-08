import React,{useState,useEffect} from 'react'
import './App.css'
import TaskInput from './components/taskinput'
import TaskSect from './components/TaskSect'
import Navbar from './components/Navbar'

const oldTasks = localStorage.getItem("tasks")
const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])
  const [activeCard, setActiveCard] = useState(null)
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])
  const handleDelete = (taskIndex)=>{
    const newTasks = tasks.filter((task,index)=> index!==taskIndex)
    setTasks(newTasks)
  }

  const onDrop =(status,position)=>{
     if(activeCard == null || activeCard === undefined) return
     const taskToMove = tasks[activeCard]
     
    const updatedTasks = tasks.filter((task,index)=>index!== activeCard)
    updatedTasks.splice(position,0,{
      ...taskToMove,
      status:status
    })
    setTasks(updatedTasks)
  }
  return (
    <> 
    <div className='todoapp '>
       <Navbar/>
       <h1 className='text-4xl font-bold text-center mt-6'>
          <span className='text-green-700'>&lt;</span>
          Todo
          <span className='text-green-500'>List/&gt;</span>
        </h1>
        <p className='text-green-900 text-lg text-center mb-4'>Your Own Task Manager</p>
       <TaskInput setTasks={setTasks}/>
       <main className='apmain'> 
          <TaskSect sec="🎯To do" tasks={tasks} status="todo" handleDelete={handleDelete} setActiveCard={setActiveCard} 
          onDrop={onDrop} />
          <TaskSect sec="🌟In progress" tasks={tasks} status="inprogress"  handleDelete={handleDelete} setActiveCard={setActiveCard}
          onDrop={onDrop}/>
          <TaskSect sec="✅Done" tasks={tasks} status="done"  handleDelete={handleDelete} setActiveCard={setActiveCard}
          onDrop={onDrop}/>
          
       </main>
       
    </div>
    </>
  )
}

export default App