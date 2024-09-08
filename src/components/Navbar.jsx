import React ,{useState} from 'react'
import "../App.css"
import dark from "../assets/dark.jpeg"

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const handleToggle=()=>{
    const body = document.body
    const cls = (darkMode)?'day':'night'
    if(cls==='day')
    {  
      body.classList.add(cls)
      body.classList.remove('night')

    }
    else{
      body.classList.add(cls)
      body.classList.remove('day')
    }
    setDarkMode(darkMode?false:true)
    console.log(cls," and mode is ",darkMode,body)
    
  }


  return (
    <nav className='bg-slate-800 text-white flex justify-between text-2xl items-center px-4 py-5 h-10'>
        <div className="icon font-bold ">
        <a className='decoration-none hover:border-2 border-green-700 ' href='https://youtube.com/@aslamcoding'>
          <span className='text-green-500'>&lt;</span>Aslam <span className='text-green-500'>Coding/&gt;</span>
          </a>
        </div>
        <div className="light-dark  flex justify-center gap-10">
        <a className='decoration-none hover:border-2 border-green-700 ' href='https://github.com/Aslam554'>
        <button className='text-white w-[140px] bg-black flex gap-4 justify-center items-center   rounded-md px-1'>
        <img className="invert w-8" src="/github.jpeg" alt="github" />
       <span className='font-bold px-1 hover:text-green-500'>Github</span>
       </button>
      </a>
      <button onClick={handleToggle} className='w-[100px]>'>
        <img src={dark} className='w-[30px]' alt="" />
      </button>
        </div>
    </nav>
  )
}

export default Navbar