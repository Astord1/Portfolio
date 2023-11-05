import { ReactNode } from "react"
import "./Description.css"

type PropsType = {
  children: ReactNode,
  className?: string,
  style?: {},
}
const Description = ({className, style, children}: PropsType) => {
  return (
    <section className={`${className} desc-section`} style = {style}>
      {children}
    </section>
  )
}

export default Description