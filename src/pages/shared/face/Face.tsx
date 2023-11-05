import "./Face.css"
import { Link } from "react-router-dom"
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai"
import { ReactNode, useRef } from "react"
import { CSSTransition } from "react-transition-group"

type PropsType = {
  children: ReactNode,
  className?: string,
  style?: {
    background: string
  },
  index: number
}


const Face = ({children, className, style, index}: PropsType) => {
  const links = ["/", "contact", "projects"]
  const faceRef = useRef(null)
  const linksProxy = new Proxy(links, {
    get: (target: string[], prop1) => {
      const prop= Number(prop1)
      if(prop < 0){
        console.log(target.length + prop)
        return Reflect.get(target, target.length + prop)
      }
      if(prop >= target.length){
        console.log(prop % target.length)
        return target[prop % target.length]
      }
      return Reflect.get(target, prop)
    }
  })

  const prevLink = linksProxy[index - 1]
  const nextLink = linksProxy[index + 1]
  return (
    <CSSTransition classNames="face" timeout={400} nodeRef={faceRef}>
      <section className = {`face ${className}`} style = {style} ref={faceRef}>
        {children}
        <div className = "arrows-container">
          <Link to = {prevLink === "/" ? "/" : `/${prevLink}`} className = "arrow arrow-left">
            <AiOutlineArrowLeft className = "icon" />
          </Link>
          <Link to = {nextLink === "/" ? "/" : `/${nextLink}`} className = "arrow arrow-right">
            <AiOutlineArrowRight className = "icon"/>
          </Link>
        </div>
      </section>
    </CSSTransition>
  )
}

export default Face