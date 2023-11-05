import {ReactNode} from "react"
import "./Button.css"
import { Link } from "react-router-dom"

type PropsType = {
  children: ReactNode,
  onClick?: () => any,
  className?: string,
  style?: {},
  type: "button" | "link" | "anchor",
  to?: string,
  href?: string
}
const Button = ({onClick, children, className, style, type, to, href}: PropsType) => {
  if(type === "button") return(
    <button onClick = {onClick} className={`btn ${className}`} style={style}>
      {children}
    </button>
  )
  if(type === "anchor") return (
    <a href={href!} className={`btn ${className}`} style={style}>
      {children}
    </a>
  )
  if(type === "link") return (
    <Link to = {to!} className={`btn ${className}`} style={style}>
      {children}
    </Link>
  )
}

export default Button