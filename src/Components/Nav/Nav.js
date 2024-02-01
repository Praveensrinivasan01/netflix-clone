import React, { useEffect, useState } from 'react'
import './Nav.css'
import images from '../../images'

const Nav = () => {
    const [netflixImage,setNetflixImages]= useState(images)
    const [show,setShow] = useState(false)

    const navBarScroll = ()=>{
        window.scrollY < 100 ? setShow(true) : setShow(false)
    }

    useEffect(()=>{
        window.addEventListener("scroll",navBarScroll)
        return ()=> window.removeEventListener("scroll",navBarScroll)
    },[])

    console.log(netflixImage)
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className='nav__contents'>
        <img src={netflixImage.logo} alt='' className='nav__logo' />
        <img src={netflixImage.avatar} alt='' className='nav__avatar' />
      </div>
    </div>
  )
}

export default Nav
