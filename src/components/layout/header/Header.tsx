import "./Header.css"
import { Link } from "react-router-dom"
import {useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import SideDrawer from "./sideDrawer/SideDrawer";
import NavLinks from "./navLinks/NavLinks";
import Button from "../../shared/button/Button";

import logoImage from "../../../assets/logo.png"

const Header = () => {
  const [drawerOpened, setDrawerOpened] = useState<boolean>(false)
/*   const closeDrawer = () => setDrawerOpened(false) */
  const headerRef = useRef(null)
  const mediaMatchesScreen = window.matchMedia('(min-width:700px)');
  const mediaMatchesMobile = window.matchMedia('(max-width:700px)');

  useEffect(() => {
    const headerHeight = headerRef.current!['offsetHeight'];
    
    /* if(mediaMatches){
      document.body.style.paddingTop = `${headerHeight}px`
    }
    if(!mediaMatches){
      document.body.style.paddingTop = `0`
    } */
    mediaMatchesMobile.addEventListener('change', (e) => {
      e.matches ? document.body.style.paddingTop = `${headerHeight}px` : ''
    })
    mediaMatchesScreen.addEventListener('change', (e) => {
      e.matches ? document.body.style.paddingTop = `0` : ''
    })
    return () => {
      document.body.style.paddingTop = `0`
    }
  },[])
  return (
    <header className="header flex" ref = {headerRef}>
      <div className="logo-div">
        <Link to = "/" className = "header__logo">
          <img src={logoImage} alt="logo" className = "header__logo-img"/>
        </Link>
      </div>

      <nav className = 'header-nav header-nav--wide flex'>
        <NavLinks />
      </nav>

      {createPortal(<Button type = "button" 
      onClick = {() => setDrawerOpened((prevState) => !prevState)} className="menu-btn">
        <span className={`menu-btn-1 menu-btn-1--${drawerOpened && "opened"}`}></span>
        <span className={`menu-btn-2 menu-btn-2--${drawerOpened && "opened"}`}></span>
        <span className={`menu-btn-3 menu-btn-3--${drawerOpened && "opened"}`}></span>
      </Button>, document.getElementById("cls-btn")!)}
      {
      <SideDrawer show={drawerOpened}>
        <nav className = 'header-nav header-nav--side-drawer flex'>
          <NavLinks />
        </nav>
      </SideDrawer>
      }

      
    </header>
  )
}

export default Header