import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  const[scrolled,setScrolled] = useState(false)

  return (
    <>
    <Header scrolled={scrolled} setScrolled={setScrolled}/>
    <main className={scrolled ? "pt-[181px]" : "pt-[215px]"}>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout