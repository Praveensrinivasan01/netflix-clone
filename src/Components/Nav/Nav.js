import React, { useEffect, useRef, useState } from 'react'
import './Nav.css'
import images from '../../images'
import { Link } from 'react-router-dom'

const Nav = () => {
  const wholeImages = useRef(images)
  const netflixImage = wholeImages.current
    const [show,setShow] = useState(false)

    const navBarScroll = ()=>{
      window.scrollY > 100 ? setShow(true) : setShow(false)
    }

    useEffect(()=>{
        window.addEventListener("scroll",navBarScroll)
        return ()=> window.removeEventListener("scroll",navBarScroll)
    }, [])

    console.log(netflixImage)
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className='nav__contents'>
        <Link hrefLang={"/"}><img src={netflixImage.logo} alt='' className='nav__logo' /></Link>
        <Link hrefLang={"/profile"}> <img src={netflixImage.avatar} alt='' className='nav__avatar' /></Link>
      </div>
    </div>
  )
}

export default Nav
