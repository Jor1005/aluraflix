import "./Nav.css"


function Nav(){
    return <header className="Nav">
        <div className="Logo">
            <img src="./img/logo.png" alt='logo'></img>
        </div>
        <div className="nav-buttons">
            <button className="home-button">HOME</button>
            <button className="nuevo-video">NUEVO VIDEO</button>
        </div>
        
        
    </header>
}

export default Nav