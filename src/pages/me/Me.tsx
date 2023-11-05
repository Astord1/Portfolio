import Description from "../shared/description/Description"
import Face from "../shared/face/Face"
import "./Me.css"
import image from "../../assets/me.jpg"
import Tooltip from "../../components/shared/tooltip/Tooltip"
import {BsQuestionLg} from "react-icons/bs"

const Me = () => {
  const faceStyle = {
    background: image
  }

  const tooltipContent = (
    <p className="face__tooltip-body">
      A creative and detail-oriented frontend developer passionate about crafting captivating and user-centric web experiences. With a strong foundation in HTML, CSS, JavaScript, Typescript and React I am dedicated to staying at the forefront of frontend technologies and design trends.

      My focus on clean and efficient code allows me to create responsive and visually stunning user interfaces. I thrive in collaborative environments and enjoy bringing ideas to life through the seamless integration of design and functionality.
    </p>
  )
  return (
    <main className="main">
      <Face style = {faceStyle} index = {0}>
        <Tooltip 
          delay={300} 
          content = {tooltipContent} 
          className="face__tip-container"
          tooltipClassName="face__tooltip"
        >
          <BsQuestionLg className = "icon face__icon" />
        </Tooltip>
      </Face>
      <Description>
        <h2 className="desc__title">
          <span className="desc__title__el">Bohdan </span>
          <span className="desc__title__el">Komirenko</span>
        </h2>
        <p className="desc__body">
          A creative and detail-oriented frontend developer passionate about crafting captivating and user-centric web experiences. With a strong foundation in HTML, CSS, JavaScript, Typescript and React I am dedicated to staying at the forefront of frontend technologies and design trends.

          My focus on clean and efficient code allows me to create responsive and visually stunning user interfaces. I thrive in collaborative environments and enjoy bringing ideas to life through the seamless integration of design and functionality.
        </p>
      </Description>
    </main>
  )
}

export default Me