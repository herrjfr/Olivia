import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { PiSquaresFourFill } from "react-icons/pi";
import HeaderAds from "../assets/images/top-ads.png"
import Logo from "../assets/images/olivia-logo.png"
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineStar } from "react-icons/md";

function Header({ scrolled, setScrolled }) {

    //!=====Scroll=============
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    const handleScroll = () => {
        setScrolled(window.scrollY > 0)
    }
    //!========================

    //?=====Input=====================================
    const [checkEnter, setCheckEnter] = useState(false)
    const [checkFocus, setCheckFocus] = useState(false)
    //?===============================================


    return (
        <header className='fixed top-0 bg-white flex flex-col  pb-[5px] z-1'>
            <Link to={"https://olivia.az/catdirilma-ve-odeme"}>
                <img className='cursor-pointer' src={HeaderAds} />
            </Link>
            {!scrolled && <div className='flex justify-between px-[60px]'>
                <div className='flex gap-x-[20px] items-center py-[10px]'>
                    <div className='flex items-center cursor-pointer'>
                        <i className="fa-light fa-store-alt"></i>
                        <p className='hover:underline'>Mağazalar</p>
                    </div>
                    <p className='cursor-pointer hover:underline'>Korporativ satışlar</p>
                </div>
                <select className='cursor-pointer'>
                    <option className='cursor-pointer'>AZ</option>
                    <option className='cursor-pointer'>RU</option>
                </select>
            </div>}
            <div className='px-[60px] flex items-center justify-between pt-[10px] pb-[10px]'>
                <img className='w-[100px] cursor-pointer' src={Logo} />
                <div className='flex items-center rounded-[8px] bg-[#9B14CD] text-white py-[8px] px-[10px] gap-x-[5px] cursor-pointer'>
                    <PiSquaresFourFill className='text-[30px]' />
                    <p>Kataloq</p>
                </div>
                <div className='flex relative'>
                    <input
                        onMouseOver={() => { setCheckEnter(true) }}
                        onMouseLeave={() => { setCheckEnter(false) }}
                        onFocus={() => { setCheckFocus(true) }}
                        onBlur={() => { setCheckFocus(false) }}
                        placeholder='Axtarış...'
                        className='border-1 w-[958px] h-[40px] rounded-[8px] text-[16px] indent-3 outline-none placeholder:translate-y-[-2px] font-[400] placeholder:text-gray-400' type="text" />
                    <div  
                    onMouseOver={() => { setCheckEnter(true) }}
                    onMouseLeave={() => { setCheckEnter(false) }}
                    className={checkEnter || checkFocus
                        ? "bg-[#9B14CD] text-white h-[40px] w-[40px] flex justify-center items-center absolute right-0 rounded-r-[8px] transition-all duration-300"
                        : "text-black h-[40px] w-[40px] flex justify-center items-center absolute right-0 rounded-r-[8px] transition-all duration-300"}>
                        <i className="fa-utility fa-semibold fa-search"></i>
                    </div>
                </div>
                <FaRegHeart className='text-[30px] cursor-pointer' />
                <CgShoppingCart className='text-[30px] cursor-pointer' />
                <BsPersonCircle className='text-[30px] cursor-pointer' />
            </div>
            <div className='px-[60px] flex items-center gap-x-[20px] pt-[10px]'>
                <div className='flex items-center text-[#9B14CD] cursor-pointer'>
                    <MdOutlineStar />
                    <p className='font-[600]'>Kampaniyalar</p>
                </div>
                <p className='cursor-pointer'>Brendlər</p>
            </div>
        </header>
    )
}

export default Header