import "./Nav.css"
import { useNavigate, useLocation } from "react-router-dom"

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const paginavideo = location.pathname === "/nuevo-video";

  return (
    <header className="Nav">
      <div className="Logo">
        <img src="./img/logo.png" alt="logo" />
      </div>
      <div className="nav-buttons">
        <button
          className={paginavideo ? "nuevo-video-button" : "home-button"}
          onClick={() => navigate("/")}
        >
          HOME
        </button>
        <button
          className={paginavideo ? "home-button" : "nuevo-video-button"}
          onClick={() => navigate("/nuevo-video")}
        >
          NUEVO VIDEO
        </button>
      </div>
    </header>
  );
}

export default Nav;