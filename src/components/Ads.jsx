import React, { useEffect, useState } from 'react'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

function Ads() {

  const [ads, setAds] = useState([])
  let api = async () => {
    const obj = await (await fetch("https://oliviatest2.bsite.net/api/Ads/GetAds")).json()
    setAds(obj)
  }
  useEffect(()=>{
    api()
  },[])

  console.log(ads);

  const [count, setCount] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(x => x < 15 ? x + 1 : 0)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const move = (a) => {
    return 385 * a
  }

  return (
    <div className=' h-[400px] flex items-center px-[60px] relative'>
      <button onClick={() => { count == 0 ? setCount(15) : setCount(count - 1) }} className='absolute flex justify-center items-center w-[35px] h-[35px]  left-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer'>
        <SlArrowLeft />
      </button>
      <div className='w-[100%] overflow-hidden'>
        <div style={{ transform: `translateX(-${move(count)}px)` }} className='flex gap-x-[15px] transition-all duration-300'>
          {ads?.map((x)=>{
            return <img className='w-[370px] h-[370px] shrink-0 cursor-pointer' src={x.imageLink}/>
          })}
        </div>
      </div>
      <button onClick={() => { count == 15 ? setCount(0) : setCount(count + 1) }} className='absolute flex justify-center items-center w-[35px] h-[35px]  right-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer'>
        <SlArrowRight />
      </button>
    </div>
  )
}

export default Ads