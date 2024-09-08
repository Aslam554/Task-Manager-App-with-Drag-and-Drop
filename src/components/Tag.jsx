import React from 'react'

const Tag = ({tgname,selectTag,selected}) => {
  const tagstyl = {
    HTML:{backgroundColor:"rgba(155, 21, 217, 0.536)"},
    CSS:{backgroundColor:"rgba(155, 21, 217, 0.536)"},
    Javascript:{backgroundColor:"rgba(155, 21, 217, 0.536)"},
    ReactJs:{backgroundColor:"rgba(155, 21, 217, 0.536)"},
    default:{backgroundColor:"green"},
    
  }
  
 
  return (
  <button type='button' style={selected ? tagstyl[tgname]:tagstyl.default} className="tag text-white bg-white text-[15px] font-bold border-2 border-red rounded-[1px] px-[2px] mr-[10px] cursor-grab" onClick={()=>selectTag(tgname)}>{tgname}</button>)
}
export default Tag