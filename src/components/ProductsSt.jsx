import React, { useState } from 'react'
import { CgShoppingCart } from 'react-icons/cg';
import { CgHeart } from "react-icons/cg";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

function ProductsSt() {
    const [count, setCount] = useState(0)

    const move = (a) => {
        return 250 * a
    }

    return (
        <section className='bg-[#F8F6F9] h-[300vh] pt-[50px] relative flex flex-col'>
            <p className='pl-[60px] pb-[20px]'>10 ₼-dək təkliflər</p>
            <div className='flex items-center px-[60px] relative'>
                <button onClick={() => { count == 0 ? setCount(10) : setCount(count - 1) }} className='absolute flex justify-center items-center w-[35px] h-[35px]  left-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer'>
                    <SlArrowLeft />
                </button>
                <div className='w-[100%] overflow-hidden'>
                    <div style={{ transform: `translateX(-${move(count)}px)` }} className='flex gap-x-[15px] transition-all duration-300'>
                        <div className='Card w-[235px] h-[475px] bg-white shrink-0 flex flex-col items-start p-[8px]'>
                            <div className='forImg w-[219px] h-[219px] bg-[red]/10 relative'>
                                //!img
                                <CgHeart className='absolute top-[5px] right-[5px] text-[25px] text-[#A4A4A4] cursor-pointer'/>
                            </div>
                            <span className='flex items-center gap-x-[6px] bg-[#43A047] text-white px-[5px] py-[1px] rounded-[2px] mt-[10px]'>
                                <i className="fa-sharp fa-solid fa-truck-fast text-[10px] pt-[2px]"></i>
                                <p className='text-[13px] font-[500] pb-[2px]'>2 saat</p>
                            </span>
                            <p className='text-[#AEAAB4] text-[14px] mt-[8px] font-[500]'>LUXVISAGE</p>
                            <p className='text-[15px] leading-[20px]'>Göz kölgəsi Luxvisage Glitter Rock 301</p>
                            <span className='text-[12px] leading-none bg-[#FAE6EB] text-[#CE1818] px-[3px] py-[1px] mt-[12px]'>-45%</span>
                            <div className='flex gap-x-[15px] mt-[8px] items-end'>
                                <p className='text-[20px] font-[700]'>5,99 ₼</p>
                                <del className='text-[14px] text-[#AEAAB4] font-[500]'>10.99 ₼</del>
                            </div>
                            <span className='bg-[#FDD95A] mt-[10px] text-[14px] font-[600] px-[10px] rounded-[4px] pb-[2px]'>1,00 ₼ × 6 ay</span>
                            <button className='flex gap-x-[10px] items-center justify-center w-[100%] bg-[#9B14CD] text-white mt-[10px] rounded-[8px] py-[4px]'>
                                <CgShoppingCart className='text-[18px]'/>
                                <p>Səbətə at</p>
                            </button>
                        </div>
                        <div className='Card w-[235px] h-[475px] bg-white shrink-0 flex flex-col items-start p-[8px]'>
                            <div className='forImg w-[219px] h-[219px] bg-[red]/10 relative'>
                                //!img
                                <CgHeart className='absolute top-[5px] right-[5px] text-[25px] text-[#A4A4A4] cursor-pointer'/>
                            </div>
                            <span className='flex items-center gap-x-[6px] bg-[#43A047] text-white px-[5px] py-[1px] rounded-[2px] mt-[10px]'>
                                <i className="fa-sharp fa-solid fa-truck-fast text-[10px] pt-[2px]"></i>
                                <p className='text-[13px] font-[500] pb-[2px]'>2 saat</p>
                            </span>
                            <p className='text-[#AEAAB4] text-[14px] mt-[8px] font-[500]'>LUXVISAGE</p>
                            <p className='text-[15px] leading-[20px]'>Göz kölgəsi Luxvisage Glitter Rock 301</p>
                            <span className='text-[12px] leading-none bg-[#FAE6EB] text-[#CE1818] px-[3px] py-[1px] mt-[12px]'>-45%</span>
                            <div className='flex gap-x-[15px] mt-[8px] items-end'>
                                <p className='text-[20px] font-[700]'>5,99 ₼</p>
                                <del className='text-[14px] text-[#AEAAB4] font-[500]'>10.99 ₼</del>
                            </div>
                            <span className='bg-[#FDD95A] mt-[10px] text-[14px] font-[600] px-[10px] rounded-[4px] pb-[2px]'>1,00 ₼ × 6 ay</span>
                            <button className='flex gap-x-[10px] items-center justify-center w-[100%] bg-[#9B14CD] text-white mt-[10px] rounded-[8px] py-[4px]'>
                                <CgShoppingCart className='text-[18px]'/>
                                <p>Səbətə at</p>
                            </button>
                        </div>
                        <div className='Card w-[235px] h-[475px] bg-white shrink-0 flex flex-col items-start p-[8px]'>
                            <div className='forImg w-[219px] h-[219px] bg-[red]/10 relative'>
                                //!img
                                <CgHeart className='absolute top-[5px] right-[5px] text-[25px] text-[#A4A4A4] cursor-pointer'/>
                            </div>
                            <span className='flex items-center gap-x-[6px] bg-[#43A047] text-white px-[5px] py-[1px] rounded-[2px] mt-[10px]'>
                                <i className="fa-sharp fa-solid fa-truck-fast text-[10px] pt-[2px]"></i>
                                <p className='text-[13px] font-[500] pb-[2px]'>2 saat</p>
                            </span>
                            <p className='text-[#AEAAB4] text-[14px] mt-[8px] font-[500]'>LUXVISAGE</p>
                            <p className='text-[15px] leading-[20px]'>Göz kölgəsi Luxvisage Glitter Rock 301</p>
                            <span className='text-[12px] leading-none bg-[#FAE6EB] text-[#CE1818] px-[3px] py-[1px] mt-[12px]'>-45%</span>
                            <div className='flex gap-x-[15px] mt-[8px] items-end'>
                                <p className='text-[20px] font-[700]'>5,99 ₼</p>
                                <del className='text-[14px] text-[#AEAAB4] font-[500]'>10.99 ₼</del>
                            </div>
                            <span className='bg-[#FDD95A] mt-[10px] text-[14px] font-[600] px-[10px] rounded-[4px] pb-[2px]'>1,00 ₼ × 6 ay</span>
                            <button className='flex gap-x-[10px] items-center justify-center w-[100%] bg-[#9B14CD] text-white mt-[10px] rounded-[8px] py-[4px]'>
                                <CgShoppingCart className='text-[18px]'/>
                                <p>Səbətə at</p>
                            </button>
                        </div>
                        <div className='Card w-[235px] h-[475px] bg-white shrink-0 flex flex-col items-start p-[8px]'>
                            <div className='forImg w-[219px] h-[219px] bg-[red]/10 relative'>
                                //!img
                                <CgHeart className='absolute top-[5px] right-[5px] text-[25px] text-[#A4A4A4] cursor-pointer'/>
                            </div>
                            <span className='flex items-center gap-x-[6px] bg-[#43A047] text-white px-[5px] py-[1px] rounded-[2px] mt-[10px]'>
                                <i className="fa-sharp fa-solid fa-truck-fast text-[10px] pt-[2px]"></i>
                                <p className='text-[13px] font-[500] pb-[2px]'>2 saat</p>
                            </span>
                            <p className='text-[#AEAAB4] text-[14px] mt-[8px] font-[500]'>LUXVISAGE</p>
                            <p className='text-[15px] leading-[20px]'>Göz kölgəsi Luxvisage Glitter Rock 301</p>
                            <span className='text-[12px] leading-none bg-[#FAE6EB] text-[#CE1818] px-[3px] py-[1px] mt-[12px]'>-45%</span>
                            <div className='flex gap-x-[15px] mt-[8px] items-end'>
                                <p className='text-[20px] font-[700]'>5,99 ₼</p>
                                <del className='text-[14px] text-[#AEAAB4] font-[500]'>10.99 ₼</del>
                            </div>
                            <span className='bg-[#FDD95A] mt-[10px] text-[14px] font-[600] px-[10px] rounded-[4px] pb-[2px]'>1,00 ₼ × 6 ay</span>
                            <button className='flex gap-x-[10px] items-center justify-center w-[100%] bg-[#9B14CD] text-white mt-[10px] rounded-[8px] py-[4px]'>
                                <CgShoppingCart className='text-[18px]'/>
                                <p>Səbətə at</p>
                            </button>
                        </div>
                        <div className='Card w-[235px] h-[475px] bg-white shrink-0 flex flex-col items-start p-[8px]'>
                            <div className='forImg w-[219px] h-[219px] bg-[red]/10 relative'>
                                //!img
                                <CgHeart className='absolute top-[5px] right-[5px] text-[25px] text-[#A4A4A4] cursor-pointer'/>
                            </div>
                            <span className='flex items-center gap-x-[6px] bg-[#43A047] text-white px-[5px] py-[1px] rounded-[2px] mt-[10px]'>
                                <i className="fa-sharp fa-solid fa-truck-fast text-[10px] pt-[2px]"></i>
                                <p className='text-[13px] font-[500] pb-[2px]'>2 saat</p>
                            </span>
                            <p className='text-[#AEAAB4] text-[14px] mt-[8px] font-[500]'>LUXVISAGE</p>
                            <p className='text-[15px] leading-[20px]'>Göz kölgəsi Luxvisage Glitter Rock 301</p>
                            <span className='text-[12px] leading-none bg-[#FAE6EB] text-[#CE1818] px-[3px] py-[1px] mt-[12px]'>-45%</span>
                            <div className='flex gap-x-[15px] mt-[8px] items-end'>
                                <p className='text-[20px] font-[700]'>5,99 ₼</p>
                                <del className='text-[14px] text-[#AEAAB4] font-[500]'>10.99 ₼</del>
                            </div>
                            <span className='bg-[#FDD95A] mt-[10px] text-[14px] font-[600] px-[10px] rounded-[4px] pb-[2px]'>1,00 ₼ × 6 ay</span>
                            <button className='flex gap-x-[10px] items-center justify-center w-[100%] bg-[#9B14CD] text-white mt-[10px] rounded-[8px] py-[4px]'>
                                <CgShoppingCart className='text-[18px]'/>
                                <p>Səbətə at</p>
                            </button>
                        </div>
                        <div className='Card w-[235px] h-[475px] bg-white shrink-0 flex flex-col items-start p-[8px]'>
                            <div className='forImg w-[219px] h-[219px] bg-[red]/10 relative'>
                                //!img
                                <CgHeart className='absolute top-[5px] right-[5px] text-[25px] text-[#A4A4A4] cursor-pointer'/>
                            </div>
                            <span className='flex items-center gap-x-[6px] bg-[#43A047] text-white px-[5px] py-[1px] rounded-[2px] mt-[10px]'>
                                <i className="fa-sharp fa-solid fa-truck-fast text-[10px] pt-[2px]"></i>
                                <p className='text-[13px] font-[500] pb-[2px]'>2 saat</p>
                            </span>
                            <p className='text-[#AEAAB4] text-[14px] mt-[8px] font-[500]'>LUXVISAGE</p>
                            <p className='text-[15px] leading-[20px]'>Göz kölgəsi Luxvisage Glitter Rock 301</p>
                            <span className='text-[12px] leading-none bg-[#FAE6EB] text-[#CE1818] px-[3px] py-[1px] mt-[12px]'>-45%</span>
                            <div className='flex gap-x-[15px] mt-[8px] items-end'>
                                <p className='text-[20px] font-[700]'>5,99 ₼</p>
                                <del className='text-[14px] text-[#AEAAB4] font-[500]'>10.99 ₼</del>
                            </div>
                            <span className='bg-[#FDD95A] mt-[10px] text-[14px] font-[600] px-[10px] rounded-[4px] pb-[2px]'>1,00 ₼ × 6 ay</span>
                            <button className='flex gap-x-[10px] items-center justify-center w-[100%] bg-[#9B14CD] text-white mt-[10px] rounded-[8px] py-[4px]'>
                                <CgShoppingCart className='text-[18px]'/>
                                <p>Səbətə at</p>
                            </button>
                        </div>
                        <div className='Card w-[235px] h-[475px] bg-white shrink-0 flex flex-col items-start p-[8px]'>
                            <div className='forImg w-[219px] h-[219px] bg-[red]/10 relative'>
                                //!img
                                <CgHeart className='absolute top-[5px] right-[5px] text-[25px] text-[#A4A4A4] cursor-pointer'/>
                            </div>
                            <span className='flex items-center gap-x-[6px] bg-[#43A047] text-white px-[5px] py-[1px] rounded-[2px] mt-[10px]'>
                                <i className="fa-sharp fa-solid fa-truck-fast text-[10px] pt-[2px]"></i>
                                <p className='text-[13px] font-[500] pb-[2px]'>2 saat</p>
                            </span>
                            <p className='text-[#AEAAB4] text-[14px] mt-[8px] font-[500]'>LUXVISAGE</p>
                            <p className='text-[15px] leading-[20px]'>Göz kölgəsi Luxvisage Glitter Rock 301</p>
                            <span className='text-[12px] leading-none bg-[#FAE6EB] text-[#CE1818] px-[3px] py-[1px] mt-[12px]'>-45%</span>
                            <div className='flex gap-x-[15px] mt-[8px] items-end'>
                                <p className='text-[20px] font-[700]'>5,99 ₼</p>
                                <del className='text-[14px] text-[#AEAAB4] font-[500]'>10.99 ₼</del>
                            </div>
                            <span className='bg-[#FDD95A] mt-[10px] text-[14px] font-[600] px-[10px] rounded-[4px] pb-[2px]'>1,00 ₼ × 6 ay</span>
                            <button className='flex gap-x-[10px] items-center justify-center w-[100%] bg-[#9B14CD] text-white mt-[10px] rounded-[8px] py-[4px]'>
                                <CgShoppingCart className='text-[18px]'/>
                                <p>Səbətə at</p>
                            </button>
                        </div>
                        <div className='Card w-[235px] h-[475px] bg-white shrink-0 flex flex-col items-start p-[8px]'>
                            <div className='forImg w-[219px] h-[219px] bg-[red]/10 relative'>
                                //!img
                                <CgHeart className='absolute top-[5px] right-[5px] text-[25px] text-[#A4A4A4] cursor-pointer'/>
                            </div>
                            <span className='flex items-center gap-x-[6px] bg-[#43A047] text-white px-[5px] py-[1px] rounded-[2px] mt-[10px]'>
                                <i className="fa-sharp fa-solid fa-truck-fast text-[10px] pt-[2px]"></i>
                                <p className='text-[13px] font-[500] pb-[2px]'>2 saat</p>
                            </span>
                            <p className='text-[#AEAAB4] text-[14px] mt-[8px] font-[500]'>LUXVISAGE</p>
                            <p className='text-[15px] leading-[20px]'>Göz kölgəsi Luxvisage Glitter Rock 301</p>
                            <span className='text-[12px] leading-none bg-[#FAE6EB] text-[#CE1818] px-[3px] py-[1px] mt-[12px]'>-45%</span>
                            <div className='flex gap-x-[15px] mt-[8px] items-end'>
                                <p className='text-[20px] font-[700]'>5,99 ₼</p>
                                <del className='text-[14px] text-[#AEAAB4] font-[500]'>10.99 ₼</del>
                            </div>
                            <span className='bg-[#FDD95A] mt-[10px] text-[14px] font-[600] px-[10px] rounded-[4px] pb-[2px]'>1,00 ₼ × 6 ay</span>
                            <button className='flex gap-x-[10px] items-center justify-center w-[100%] bg-[#9B14CD] text-white mt-[10px] rounded-[8px] py-[4px]'>
                                <CgShoppingCart className='text-[18px]'/>
                                <p>Səbətə at</p>
                            </button>
                        </div>
                        <div className='Card w-[235px] h-[475px] bg-white shrink-0 flex flex-col items-start p-[8px]'>
                            <div className='forImg w-[219px] h-[219px] bg-[red]/10 relative'>
                                //!img
                                <CgHeart className='absolute top-[5px] right-[5px] text-[25px] text-[#A4A4A4] cursor-pointer'/>
                            </div>
                            <span className='flex items-center gap-x-[6px] bg-[#43A047] text-white px-[5px] py-[1px] rounded-[2px] mt-[10px]'>
                                <i className="fa-sharp fa-solid fa-truck-fast text-[10px] pt-[2px]"></i>
                                <p className='text-[13px] font-[500] pb-[2px]'>2 saat</p>
                            </span>
                            <p className='text-[#AEAAB4] text-[14px] mt-[8px] font-[500]'>LUXVISAGE</p>
                            <p className='text-[15px] leading-[20px]'>Göz kölgəsi Luxvisage Glitter Rock 301</p>
                            <span className='text-[12px] leading-none bg-[#FAE6EB] text-[#CE1818] px-[3px] py-[1px] mt-[12px]'>-45%</span>
                            <div className='flex gap-x-[15px] mt-[8px] items-end'>
                                <p className='text-[20px] font-[700]'>5,99 ₼</p>
                                <del className='text-[14px] text-[#AEAAB4] font-[500]'>10.99 ₼</del>
                            </div>
                            <span className='bg-[#FDD95A] mt-[10px] text-[14px] font-[600] px-[10px] rounded-[4px] pb-[2px]'>1,00 ₼ × 6 ay</span>
                            <button className='flex gap-x-[10px] items-center justify-center w-[100%] bg-[#9B14CD] text-white mt-[10px] rounded-[8px] py-[4px]'>
                                <CgShoppingCart className='text-[18px]'/>
                                <p>Səbətə at</p>
                            </button>
                        </div>
                        <div className='Card w-[235px] h-[475px] bg-white shrink-0 flex flex-col items-start p-[8px]'>
                            <div className='forImg w-[219px] h-[219px] bg-[red]/10 relative'>
                                //!img
                                <CgHeart className='absolute top-[5px] right-[5px] text-[25px] text-[#A4A4A4] cursor-pointer'/>
                            </div>
                            <span className='flex items-center gap-x-[6px] bg-[#43A047] text-white px-[5px] py-[1px] rounded-[2px] mt-[10px]'>
                                <i className="fa-sharp fa-solid fa-truck-fast text-[10px] pt-[2px]"></i>
                                <p className='text-[13px] font-[500] pb-[2px]'>2 saat</p>
                            </span>
                            <p className='text-[#AEAAB4] text-[14px] mt-[8px] font-[500]'>LUXVISAGE</p>
                            <p className='text-[15px] leading-[20px]'>Göz kölgəsi Luxvisage Glitter Rock 301</p>
                            <span className='text-[12px] leading-none bg-[#FAE6EB] text-[#CE1818] px-[3px] py-[1px] mt-[12px]'>-45%</span>
                            <div className='flex gap-x-[15px] mt-[8px] items-end'>
                                <p className='text-[20px] font-[700]'>5,99 ₼</p>
                                <del className='text-[14px] text-[#AEAAB4] font-[500]'>10.99 ₼</del>
                            </div>
                            <span className='bg-[#FDD95A] mt-[10px] text-[14px] font-[600] px-[10px] rounded-[4px] pb-[2px]'>1,00 ₼ × 6 ay</span>
                            <button className='flex gap-x-[10px] items-center justify-center w-[100%] bg-[#9B14CD] text-white mt-[10px] rounded-[8px] py-[4px]'>
                                <CgShoppingCart className='text-[18px]'/>
                                <p>Səbətə at</p>
                            </button>
                        </div>
                        <div className='Card w-[235px] h-[475px] bg-white shrink-0 flex flex-col items-start p-[8px]'>
                            <div className='forImg w-[219px] h-[219px] bg-[red]/10 relative'>
                                //!img
                                <CgHeart className='absolute top-[5px] right-[5px] text-[25px] text-[#A4A4A4] cursor-pointer'/>
                            </div>
                            <span className='flex items-center gap-x-[6px] bg-[#43A047] text-white px-[5px] py-[1px] rounded-[2px] mt-[10px]'>
                                <i className="fa-sharp fa-solid fa-truck-fast text-[10px] pt-[2px]"></i>
                                <p className='text-[13px] font-[500] pb-[2px]'>2 saat</p>
                            </span>
                            <p className='text-[#AEAAB4] text-[14px] mt-[8px] font-[500]'>LUXVISAGE</p>
                            <p className='text-[15px] leading-[20px]'>Göz kölgəsi Luxvisage Glitter Rock 301</p>
                            <span className='text-[12px] leading-none bg-[#FAE6EB] text-[#CE1818] px-[3px] py-[1px] mt-[12px]'>-45%</span>
                            <div className='flex gap-x-[15px] mt-[8px] items-end'>
                                <p className='text-[20px] font-[700]'>5,99 ₼</p>
                                <del className='text-[14px] text-[#AEAAB4] font-[500]'>10.99 ₼</del>
                            </div>
                            <span className='bg-[#FDD95A] mt-[10px] text-[14px] font-[600] px-[10px] rounded-[4px] pb-[2px]'>1,00 ₼ × 6 ay</span>
                            <button className='flex gap-x-[10px] items-center justify-center w-[100%] bg-[#9B14CD] text-white mt-[10px] rounded-[8px] py-[4px]'>
                                <CgShoppingCart className='text-[18px]'/>
                                <p>Səbətə at</p>
                            </button>
                        </div>
                        <div className='Card w-[235px] h-[475px] bg-white shrink-0 flex flex-col items-start p-[8px]'>
                            <div className='forImg w-[219px] h-[219px] bg-[red]/10 relative'>
                                //!img
                                <CgHeart className='absolute top-[5px] right-[5px] text-[25px] text-[#A4A4A4] cursor-pointer'/>
                            </div>
                            <span className='flex items-center gap-x-[6px] bg-[#43A047] text-white px-[5px] py-[1px] rounded-[2px] mt-[10px]'>
                                <i className="fa-sharp fa-solid fa-truck-fast text-[10px] pt-[2px]"></i>
                                <p className='text-[13px] font-[500] pb-[2px]'>2 saat</p>
                            </span>
                            <p className='text-[#AEAAB4] text-[14px] mt-[8px] font-[500]'>LUXVISAGE</p>
                            <p className='text-[15px] leading-[20px]'>Göz kölgəsi Luxvisage Glitter Rock 301</p>
                            <span className='text-[12px] leading-none bg-[#FAE6EB] text-[#CE1818] px-[3px] py-[1px] mt-[12px]'>-45%</span>
                            <div className='flex gap-x-[15px] mt-[8px] items-end'>
                                <p className='text-[20px] font-[700]'>5,99 ₼</p>
                                <del className='text-[14px] text-[#AEAAB4] font-[500]'>10.99 ₼</del>
                            </div>
                            <span className='bg-[#FDD95A] mt-[10px] text-[14px] font-[600] px-[10px] rounded-[4px] pb-[2px]'>1,00 ₼ × 6 ay</span>
                            <button className='flex gap-x-[10px] items-center justify-center w-[100%] bg-[#9B14CD] text-white mt-[10px] rounded-[8px] py-[4px]'>
                                <CgShoppingCart className='text-[18px]'/>
                                <p>Səbətə at</p>
                            </button>
                        </div>
                        <div className='Card w-[235px] h-[475px] bg-white shrink-0 flex flex-col items-start p-[8px]'>
                            <div className='forImg w-[219px] h-[219px] bg-[red]/10 relative'>
                                //!img
                                <CgHeart className='absolute top-[5px] right-[5px] text-[25px] text-[#A4A4A4] cursor-pointer'/>
                            </div>
                            <span className='flex items-center gap-x-[6px] bg-[#43A047] text-white px-[5px] py-[1px] rounded-[2px] mt-[10px]'>
                                <i className="fa-sharp fa-solid fa-truck-fast text-[10px] pt-[2px]"></i>
                                <p className='text-[13px] font-[500] pb-[2px]'>2 saat</p>
                            </span>
                            <p className='text-[#AEAAB4] text-[14px] mt-[8px] font-[500]'>LUXVISAGE</p>
                            <p className='text-[15px] leading-[20px]'>Göz kölgəsi Luxvisage Glitter Rock 301</p>
                            <span className='text-[12px] leading-none bg-[#FAE6EB] text-[#CE1818] px-[3px] py-[1px] mt-[12px]'>-45%</span>
                            <div className='flex gap-x-[15px] mt-[8px] items-end'>
                                <p className='text-[20px] font-[700]'>5,99 ₼</p>
                                <del className='text-[14px] text-[#AEAAB4] font-[500]'>10.99 ₼</del>
                            </div>
                            <span className='bg-[#FDD95A] mt-[10px] text-[14px] font-[600] px-[10px] rounded-[4px] pb-[2px]'>1,00 ₼ × 6 ay</span>
                            <button className='flex gap-x-[10px] items-center justify-center w-[100%] bg-[#9B14CD] text-white mt-[10px] rounded-[8px] py-[4px]'>
                                <CgShoppingCart className='text-[18px]'/>
                                <p>Səbətə at</p>
                            </button>
                        </div>
                        <div className='Card w-[235px] h-[475px] bg-white shrink-0 flex flex-col items-start p-[8px]'>
                            <div className='forImg w-[219px] h-[219px] bg-[red]/10 relative'>
                                //!img
                                <CgHeart className='absolute top-[5px] right-[5px] text-[25px] text-[#A4A4A4] cursor-pointer'/>
                            </div>
                            <span className='flex items-center gap-x-[6px] bg-[#43A047] text-white px-[5px] py-[1px] rounded-[2px] mt-[10px]'>
                                <i className="fa-sharp fa-solid fa-truck-fast text-[10px] pt-[2px]"></i>
                                <p className='text-[13px] font-[500] pb-[2px]'>2 saat</p>
                            </span>
                            <p className='text-[#AEAAB4] text-[14px] mt-[8px] font-[500]'>LUXVISAGE</p>
                            <p className='text-[15px] leading-[20px]'>Göz kölgəsi Luxvisage Glitter Rock 301</p>
                            <span className='text-[12px] leading-none bg-[#FAE6EB] text-[#CE1818] px-[3px] py-[1px] mt-[12px]'>-45%</span>
                            <div className='flex gap-x-[15px] mt-[8px] items-end'>
                                <p className='text-[20px] font-[700]'>5,99 ₼</p>
                                <del className='text-[14px] text-[#AEAAB4] font-[500]'>10.99 ₼</del>
                            </div>
                            <span className='bg-[#FDD95A] mt-[10px] text-[14px] font-[600] px-[10px] rounded-[4px] pb-[2px]'>1,00 ₼ × 6 ay</span>
                            <button className='flex gap-x-[10px] items-center justify-center w-[100%] bg-[#9B14CD] text-white mt-[10px] rounded-[8px] py-[4px]'>
                                <CgShoppingCart className='text-[18px]'/>
                                <p>Səbətə at</p>
                            </button>
                        </div>
                        <div className='Card w-[235px] h-[475px] bg-white shrink-0 flex flex-col items-start p-[8px]'>
                            <div className='forImg w-[219px] h-[219px] bg-[red]/10 relative'>
                                //!img
                                <CgHeart className='absolute top-[5px] right-[5px] text-[25px] text-[#A4A4A4] cursor-pointer'/>
                            </div>
                            <span className='flex items-center gap-x-[6px] bg-[#43A047] text-white px-[5px] py-[1px] rounded-[2px] mt-[10px]'>
                                <i className="fa-sharp fa-solid fa-truck-fast text-[10px] pt-[2px]"></i>
                                <p className='text-[13px] font-[500] pb-[2px]'>2 saat</p>
                            </span>
                            <p className='text-[#AEAAB4] text-[14px] mt-[8px] font-[500]'>LUXVISAGE</p>
                            <p className='text-[15px] leading-[20px]'>Göz kölgəsi Luxvisage Glitter Rock 301</p>
                            <span className='text-[12px] leading-none bg-[#FAE6EB] text-[#CE1818] px-[3px] py-[1px] mt-[12px]'>-45%</span>
                            <div className='flex gap-x-[15px] mt-[8px] items-end'>
                                <p className='text-[20px] font-[700]'>5,99 ₼</p>
                                <del className='text-[14px] text-[#AEAAB4] font-[500]'>10.99 ₼</del>
                            </div>
                            <span className='bg-[#FDD95A] mt-[10px] text-[14px] font-[600] px-[10px] rounded-[4px] pb-[2px]'>1,00 ₼ × 6 ay</span>
                            <button className='flex gap-x-[10px] items-center justify-center w-[100%] bg-[#9B14CD] text-white mt-[10px] rounded-[8px] py-[4px]'>
                                <CgShoppingCart className='text-[18px]'/>
                                <p>Səbətə at</p>
                            </button>
                        </div>
                    </div>
                </div>
                <button onClick={() => { count == 10 ? setCount(0) : setCount(count + 1) }} className='absolute flex justify-center items-center w-[35px] h-[35px]  right-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer'>
                    <SlArrowRight />
                </button>
            </div>
        </section>
    )
}

export default ProductsSt