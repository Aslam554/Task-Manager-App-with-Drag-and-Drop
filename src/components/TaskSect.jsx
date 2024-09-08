import React from 'react'
import Card from "./Card"
import DropArea from './DropArea'
const TaskSect = ({
  sec,
  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDrop
}) => {
  return (
    <section className='tsk'>
      <h2 className='text-[25px] font-bold'> {sec}</h2>
      <DropArea onDrop={()=>onDrop(status,0)}/>
     {
      tasks.map((task,index)=> task.status===status &&(
        <React.Fragment key={index}> 
          <Card  handleDelete={handleDelete} 
           key={index} 
           sec={task.task} 
           tags={task.tags}
            index={index} 
            setActiveCard={setActiveCard}/>
      <DropArea onDrop={()=>onDrop(status,index+1)} />
      </React.Fragment>)
    )
     }
    </section>
  )
}

export default TaskSect