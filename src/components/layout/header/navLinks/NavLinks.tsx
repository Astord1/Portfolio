import "./NavLinks.css"
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
        <div className="header-nav__links flex">
          <NavLink 
            to = "/" 
            className={({isActive}) => `header__link ${isActive && "header__link--active"}`} 
          >Me</NavLink>
          <NavLink 
            to = "/contact" 
            className={({isActive}) => `header__link ${isActive && "header__link--active"}`}  
          >Contact</NavLink>
          <NavLink 
            to = "/projects" 
            className={({isActive}) => `header__link ${isActive && "header__link--active"}`}  
          >Projects</NavLink>
        </div>

        <div className="header-nav__social flex">
          <a href = "https://www.linkedin.com/in/bohdan-komirenko-1a6508269/" target = "_blank" className = "header__link">
            <AiFillLinkedin  className = "icon"/>
          </a>
          <a href = "https://github.com/Astord1" target = "_blank" className = "header__link">
            <AiFillGithub  className = "icon"/>
          </a>
          <a href = "https://www.instagram.com/bohdanchikdm/" target = "_blank" className = "header__link">
            <AiFillInstagram className = "icon"/>
          </a>
        </div>
      </>
  )
}

export default NavLinks