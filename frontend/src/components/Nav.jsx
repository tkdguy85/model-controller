import { Link } from "react-router-dom"
import "../css/nav.css"

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/model-controller/controls">Controller Panel</Link>
      </div>
    </nav>
  )
}

export default Nav