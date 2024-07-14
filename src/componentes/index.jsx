import "./Nav.css"
import { useNavigate } from "react-router-dom"

function Nav() {
  const navigate = useNavigate()

  return (
    <header className="Nav">
      <div className="Logo">
        <img src="./img/logo.png" alt="logo" />
      </div>
      <div className="nav-buttons">
        <button className="home-button"
        onClick={() => navigate("/")}
        
        >HOME</button>
        <button
          className="nuevo-video"
          onClick={() => navigate("/nuevo-video")}
        >
          NUEVO VIDEO
        </button>
      </div>
    </header>
  )
}

export default Nav