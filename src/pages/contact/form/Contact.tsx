import Description from '../../shared/description/Description'
import Face from '../../shared/face/Face'
import Form from './Form'

const Contact = () => {
  return (
    <main className='main'>
      <Face index = {1}>
        <Form className = "media-view--screen"/>
      </Face>
      <Description>
        <h2 className="desc__title">
          <span className="desc__title__el">Contact </span>
          <span className="desc__title__el">Me</span>
        </h2>

        <Form className = "media-view--mobile"/>
      </Description>
    </main>
  )
}

export default Contact