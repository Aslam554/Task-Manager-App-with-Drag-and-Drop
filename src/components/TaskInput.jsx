import React,{useState} from 'react'
import Tag from './Tag'
const TaskInput = ({setTasks}) => {
  

  const [taskData, setTaskData] = useState({
    task:"",
    status:"todo",
    tags: []
  })

  const checkTag = (tag)=>{
    return taskData.tags.some(item => item===tag)
  }
  const selectTag =(tag)=>{
     if(taskData.tags.some(item=> item===tag)){
      const fltrtg =  taskData.tags.filter(item=> item!== tag)
        setTaskData(prev=>{
          return {...prev,tags:fltrtg}
        })
       }
       else{
        setTaskData(prev=>{
          return {...prev,tags:[...prev.tags,tag]}
        })
       }
     }
      
  
  const handleChange =(e)=>{
    const {name,value} = e.target
    setTaskData(prev=>{
      return {...prev,[name]:value}
    })
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(taskData)
    setTasks(prev=>{
      return([...prev,taskData])
    })
    setTaskData({
      task:"",
      status:"todo",
      tags: []
    })
  }

  return (
  
    <header className='apheadr flex items-center justify-center  my-[15px]'>
        <form onSubmit={handleSubmit} className='w-[42%]'>

            <input onChange={handleChange} name="task" type="text" className="inputs text-[20px] font-bold bg-white text-black border-[1px] border-green-500 rounded-[5px] px-[7px] py-[11px] mb-[15px] w-[100%] placeholder:text-[rgba(128,128,128,0.786) focus:border-green-500 focus:border-[1px] focus:outline-none focus:border-sky-500]" placeholder='Enter your Task :' value={taskData.task} />
            <div className='tags flex justify-between items-center'>
               <div>
                <Tag tgname="HTML" selectTag={selectTag} selected={checkTag("HTML")}/>
                <Tag tgname="CSS" selectTag={selectTag} selected={checkTag("CSS")}/>
                <Tag tgname="Javascript" selectTag={selectTag} selected={checkTag("Javascript")}/>
                <Tag tgname="ReactJs" selectTag={selectTag} selected={checkTag("ReactJs")}/>
               </div>
                <div>
                <select name="status" className="task_status text-[15px] font-bold border-2 border-white rounded-[1px] w-[130px] h-[40px] py-[2px] bg-green-700" onChange={handleChange} value={taskData.status}>
                    <option value="todo">To do</option>
                    <option value="inprogress">in progress</option>
                    <option value="done">Done</option>
                </select>
                <button  type='submit' className='task_sub text-[18px] font-bold bg-green-800 text-white rounded-[2px] h-[40px] px-[5px] py-[2px] border-none cursor-pointer'>+Add Task</button>
                </div>
            </div>
        </form>
    </header>
  )
}
export default TaskInput