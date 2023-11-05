import {ReactNode, useState, useRef} from 'react'
import "./Tooltip.css"
import { CSSTransition } from 'react-transition-group'

type PropsType = {
  children: ReactNode,
  delay: number,
  className?: string,
  content: ReactNode,
  tooltipClassName: string
}

const Tooltip = ({delay, children, className, content, tooltipClassName}: PropsType) => {
  let timeout: number;
  const [active, setActive] = useState<boolean>(false);
  const tooltipRef = useRef(null);

  const showTip = () => {
    setActive(true)
  }
  const closeTip =() => {
    setActive(false)
  }

  return (
    <div 
      className = {`tooltip-wrapper ${className}`} 
      onMouseEnter = {showTip}
      onMouseLeave = {closeTip}
      onClick = {() => setActive(prevState => !prevState)}
    >
      {children}

      <CSSTransition nodeRef = {tooltipRef} in = {active} timeout={delay} classNames="tooltip" unmountOnExit>
        <div className={`tooltip-content ${tooltipClassName}`} ref={tooltipRef}>
          {content}
        </div>
      </CSSTransition>

    </div>
  )
}

export default Tooltip