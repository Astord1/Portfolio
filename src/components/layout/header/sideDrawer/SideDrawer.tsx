import { ReactNode, useRef } from "react"
import { CSSTransition } from "react-transition-group"
import "./SideDrawer.css"
import { createPortal } from "react-dom"
type PropsType = {
  show: boolean,
  children: ReactNode
}
const SideDrawer = ({show, children}: PropsType) => {
  const drawerRef = useRef(null)
  const content = (
    <CSSTransition nodeRef = {drawerRef} in = {show} timeout={200} classNames="side-drawer" mountOnEnter unmountOnExit>
      <div ref = {drawerRef} className="side-drawer">
        {children}
      </div>
    </CSSTransition>
  )
  return createPortal(content, document.getElementById("drawer")!)
}

export default SideDrawer