import React,{useState} from 'react'
import { RiMenu3Line } from "react-icons/ri";
import SideNav from './Sidenav';
import { GiAbstract027 } from "react-icons/gi";



function Header() {
 let [myNav,setMyNav] = useState(false)

  function showNav() {
    
    myNav ? setMyNav(false) : setMyNav(true)
  }

  return (
  <header className="flex items-center justify-between px-6 py-4 bg-blue-800 shadow-md one">
  <h1 className="flex items-center gap-2 text-3xl md:text-5xl font-bold text-white">
    <GiAbstract027 /> EUVOLA
  </h1>
  <nav className="hidden md:flex gap-8 font-medium text-white">
    <section className="cursor-pointer hover:text-blue-300 transition">HOME</section>
    <section className="cursor-pointer hover:text-blue-300 transition">ABOUT</section>
    <section className="cursor-pointer hover:text-blue-300 transition">SERVICE</section>
    <section className="cursor-pointer hover:text-blue-300 transition">PORTFOLIO</section>
    <section className="cursor-pointer hover:text-blue-300 transition">PAGES</section>
    <section className="cursor-pointer hover:text-blue-300 transition">BLOG</section>
    <section className="cursor-pointer hover:text-blue-300 transition">CONTACT</section>
  </nav>
  <div className="md:hidden">
    <button onClick={showNav} className="text-white text-3xl">
      <RiMenu3Line />
    </button>
  </div>
  <SideNav myNav={myNav} onClose={() => setMyNav(false)} />
</header>
  )
}

export default Header