import React from 'react'
import Logo from "../assets/images/olivia-logo.png"
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer className='bg-white w-[100%] grid grid-cols-[630px_1fr] grid-rows-[auto_auto]'>
        <div className='border-r-1 border-b-1 pl-[60px] border-[gray]/20 pt-[45px]'>
          <img className='w-[110px]' src={Logo}/>
        </div>
        <div className='pt-[45px] pl-[50px] pb-[75px] pr-[160px] flex justify-between border-b-1 border-[gray]/20'>
          <div className='flex flex-col gap-y-[30px] pr-[50px]'>
            <p className='font-[600] text-[14px]'>Şirkət</p>
            <ul className='flex flex-col gap-y-[15px] text-[14px]'>
              <li className='cursor-pointer hover:underline'>Şirkət haqqında</li>
              <li className='cursor-pointer hover:underline'>Karyera</li>
              <li className='cursor-pointer hover:underline'>Korporativ satışlar</li>
              <li className='cursor-pointer hover:underline'>Bizimlə əlaqə</li>
            </ul>
          </div>
          <div className='flex flex-col gap-y-[30px] w-[170px]'>
            <p className='font-[600] text-[14px]'>Məlumat</p>
            <ul className='flex flex-col gap-y-[15px] text-[14px]'>
              <li className='cursor-pointer hover:underline'>Konfidensiallıq siyasəti</li>
              <li className='cursor-pointer hover:underline'>Geri qaytarılma siyasəti</li>
              <li className='cursor-pointer hover:underline'>Şikayətlərin idarə olunma siyasəti</li>
            </ul>
          </div>
          <div className='flex flex-col gap-y-[30px]'>
            <p className='font-[600] text-[14px]'>Müştərilər üçün</p>
            <ul className='flex flex-col gap-y-[15px] text-[14px]'>
              <li className='cursor-pointer hover:underline'>Çatdırılma və ödəmə</li>
              <li className='cursor-pointer hover:underline'>Saytın istifadə şərtləri</li>
              <li className='cursor-pointer hover:underline'>Mağazalar</li>
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-x-[15px] pl-[60px] border-r-1 border-[gray]/20 pb-[20px] pt-[25px]'>
          <p className='text-[gray] pb-[5px]'>Bizimlə qalın:</p>
          <Link to={"https://www.facebook.com/olivia.azerbaijan/"}>
            <FaFacebook className='text-[25px]'/>
          </Link>
          <Link to={"https://www.instagram.com/olivia.azerbaijan/"}>
            <AiFillInstagram className='text-[30px] cursor-pointer'/>
          </Link>
          <Link to={"https://www.tiktok.com/@olivia.azerbaijan"}>
            <FaTiktok className='text-[20px] cursor-pointer'/>
          </Link>
        </div>
        <div className='flex items-center pl-[50px]'>
          <p className='text-[16px] text-[gray]'>© 2026 OLIVIA BEAUTY & CARE</p>
        </div>
    </footer>
  )
}

export default Footer