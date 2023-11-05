import "./NotFound.css";
import { Link, useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <section>
        <h1>404 Not Found</h1>
        <code>{window.location.href}</code>
        <div className="not-found__links-box">
          <button onClick={() => navigate(-1)}> {'<--'} Go back</button>
          <Link to="/"> {'-->'} Go to the main page</Link>
        </div>
      </section>
    </div>
  )
}

export default NotFound