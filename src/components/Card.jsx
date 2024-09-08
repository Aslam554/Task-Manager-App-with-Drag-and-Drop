import React from 'react'
import Tag from "./Tag"
import delIc from "../assets/del.jpg"
const Card = ({sec,tags,handleDelete,index,setActiveCard}) => {
  return (

    <article className='card w-[300px] min-h-[100px] border-[2px] border-green-600 rounded-[9px] p-[15px] mb-[15px] cursor-grab  font-["Roboto",sans-serif] hover:translate-y-[-5px] transition-transform ease-in-out duration-300  active:opacity-75 active:border-1 active:border-green-600 active:border-dashed hover:shadow-md hover:shadow-green-600 hover:border-green-500 ' draggable 
    onDragStart={()=>setActiveCard(index)} 
    onDragEnd={()=>setActiveCard(null)}>
 
        <p className='cardtext text-[20px] mb-[15px] break-words'>{sec}</p>
       <div className='bottom'>
         <div className="cardTags flex justify-start items-start flex-wrap gap-1 font-['Roboto',sans-serif]">
          {
            tags.map((tag,index)=><Tag key={index} tgname={tag} selected/>)
          }  
            </div>
            <div className="cardDel w-[35px] h-[35px] rounded-[50%] flex justify-center items-center cursor-pointer transition-all ease-in-out duration-500  hover:bg-[#ebebeb] " onClick={()=>handleDelete(index)}>
            <img src={delIc}  className="w-[20px]" alt="" />
           </div>
         </div>
    </article>
  )
}

export default Card