import React, { useState } from 'react'

const Bgchanger = () => {
    const[color,setColor]=useState("olive")
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='flex justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mt-9 mb-6'>
      <button onClick={()=>setColor("red")} className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor:"red"}}> Red</button>
      <button onClick={()=>setColor("green")} className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor:"Green"}}>Green</button>
      <button onClick={()=>setColor("blue")}className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor:"Blue"}}> Blue</button>
      <button onClick={()=>setColor("orange")}className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor:"Orange"}}> Orange</button>
      <button onClick={()=>setColor("purple")}  className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor:"purple"}}> purple</button>
      <button onClick={()=>setColor("grey")}  className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor:"grey"}}> grey</button>
      </div>
      </div>
    </div>
  )
}

export default Bgchanger
