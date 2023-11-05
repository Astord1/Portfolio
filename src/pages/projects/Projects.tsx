import "./Projects.css";
import Face from "../shared/face/Face";
import Description from "../shared/description/Description";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import quizImg from "../../assets/projectImg/quiz.png";
import travelImg from "../../assets/projectImg/travel.png";

const Projects = () => {

  return (
    <main className="main">
      <Face index = {2}>
        <div className="carousel-container media-view--screen">
          <Carousel 
            className="img-carousel"
            showThumbs={false}
            useKeyboardArrows={true}
            swipeable={true}
            autoPlay={true}
            interval={7000}
            infiniteLoop={true}
            dynamicHeight={true}
          >
            <a href="https://astord1.github.io/quiz_app/" className="img-carousel__item">
              <img src={quizImg} alt = "quiz app image" className="carousel-img"/>
              <p className="img-carousel__body">Quiz App</p>
            </a>
            <a href="https://astord1.github.io/travel_app/"  className="img-carousel__item">
              <img src={travelImg} alt = "travel app image" className="carousel-img"/>
              <p className="img-carousel__body">Travel Website</p>
            </a>
          </Carousel>
        </div>
      </Face>

      <Description>
        <h2 className="desc__title">
          <span className="desc__title__el">MY </span>
          <span className="desc__title__el">Projects</span>
        </h2>

        <div className="carousel-container media-view--mobile">
          <Carousel 
            className="img-carousel"
            showThumbs={false}
            useKeyboardArrows={true}
            swipeable={true}
            autoPlay={true}
            interval={7000}
            infiniteLoop={true}
            dynamicHeight={true}
          >
            <a href="https://astord1.github.io/quiz_app/" className="img-carousel__item">
              <img src={quizImg} alt = "quiz app image" className="carousel-img"/>
              <p className="img-carousel__body">Quiz App</p>
            </a>
            <a href="https://astord1.github.io/travel_app/"  className="img-carousel__item">
              <img src={travelImg} alt = "travel app image" className="carousel-img"/>
              <p className="img-carousel__body">Travel Website</p>
            </a>
          </Carousel>
        </div>
      </Description>
    </main>
  )
}

export default Projects