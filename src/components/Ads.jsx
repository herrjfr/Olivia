import React, { useEffect, useState } from 'react'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

function Ads() {
  const [count,setCount] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(x => x < 4 ? x + 1 : 0)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const move = (a)=>{
    return 385*a
  }

  return (
    <div className=' h-[400px] flex items-center px-[60px] relative'>
      <button onClick={()=>{count==0 ? setCount(4) : setCount(count-1)}} className='absolute flex justify-center items-center w-[35px] h-[35px]  left-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer'>
        <SlArrowLeft/>
      </button>
      <div className='w-[100%] overflow-hidden'>
        <div style={{transform:`translateX(-${move(count)}px)`}} className='flex gap-x-[15px] transition-all duration-300'>
          <div className='w-[370px] h-[370px] bg-blue-300 shrink-0'>1</div>
          <div className='w-[370px] h-[370px] bg-blue-300 shrink-0'>2</div>
          <div className='w-[370px] h-[370px] bg-blue-300 shrink-0'>3</div>
          <div className='w-[370px] h-[370px] bg-blue-300 shrink-0'>4</div>
          <div className='w-[370px] h-[370px] bg-blue-300 shrink-0'>5</div>
        </div>
      </div>     
      <button onClick={()=>{count==4 ? setCount(0) : setCount(count+1)}} className='absolute flex justify-center items-center w-[35px] h-[35px]  right-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer'>
        <SlArrowRight/>
      </button>
    </div>
  )
}

export default Ads