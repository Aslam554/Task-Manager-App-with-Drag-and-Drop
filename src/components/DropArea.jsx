import React,{useState} from 'react'

const DropArea = ({onDrop}) => {
    const [showDrop, setShowDrop] = useState(false)
  return (
    <section 
     onDragEnter={()=>setShowDrop(true)}
      onDragLeave={()=>setShowDrop(false)}
      onDrop = {()=>{
            onDrop()
            setShowDrop(false)
        }}
      onDragOver={(e)=>e.preventDefault()}
    
      className ={showDrop?"w-[100%] h-[100px] text-black border-2 border-dashed border-green-500  rounded-[10px] p-[15px]mb-[15px] opacity-100":"opacity-0"}
      >Drop your text</section>
  )
}

export default DropArea