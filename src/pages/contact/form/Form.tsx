
import { useReducer} from "react"
import "./Form.css"
import emailjs from '@emailjs/browser';
import {AiFillLinkedin} from "react-icons/ai"

type ActionType = {
  type: "CHANGE" | "CLEAR",   
  payload?: EventTarget & HTMLTextAreaElement | EventTarget & HTMLInputElement
}
type StateType = {
    name: string,
    email: string,
    message: string
}
type PropsType = {
  className?: string
}

const Form = ({className}:PropsType) => {
  const [state, dispatch] = useReducer((state: StateType, action: ActionType ) => {
    switch (action.type){
      case "CHANGE":
        return {
          ...state,
          [action.payload!.name]: action.payload!.value
        }
      case "CLEAR":
        return {
          name: "",
          email: "",
          message: ""
        }
      default:
        return {...state}
    }
  }, {
    name: "",
    email: "",
    message: ""
  })

  async function handleSubmit(e: React.SyntheticEvent){
    e.preventDefault();
    try{
      console.log("sent")
      await emailjs.send("service_954240r", "template_zx09phk", state, 'iliXEApOdoxDDn8BG')
      alert("Email was sent successfully!")
    } catch(error){
      console.log(error);
      alert("Oops!Something went wrong.")
    }
    dispatch({type: "CLEAR"})
  }
  return (
    <div className={`contact-form-container ${className}`}>
      <form
        onSubmit={handleSubmit}
        className="contact-form"
      >
          <h2 className="form-title">Contact Me</h2>
          <input
            type="text"
            className="form-input"
            placeholder="Your Name"
            value={state.name}
            name="name"
            onChange={(e) => dispatch({type: "CHANGE", payload: e.target})}
            required
          />
          <input
            type="email"
            className="form-input"
            placeholder="Your Email"
            value={state.email}
            name="email"
            onChange={(e) => dispatch({type: "CHANGE", payload: e.target})}
            required
          />
      
          <textarea
            className="form-input"
            placeholder="Message"
            value={state.message}
            name="message"
            onChange={(e) => dispatch({type: "CHANGE", payload: e.target})}
            required            
          />
          
          <input className='form-input form-input--btn' type="submit" value={"Send"} />


          <p className="form-small">or</p>

          <a href = "https://www.linkedin.com/in/bohdan-komirenko-1a6508269/" target = "_blank" className = "header__link header__link--form">
            <AiFillLinkedin  className = "icon"/>
          </a>

      </form>

      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
    </div>
  )
}

export default Form