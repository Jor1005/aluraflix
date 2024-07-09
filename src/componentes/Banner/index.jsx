import "./Banner.css"
import video from "./qspcp.png"


const Banner = () => {
    return <section className="banner-main">
        <div className="banner-content">
            <h1 className="banner-category">FRONT END</h1>
            <h2 className="banner-title">Challenge React</h2>
            <p className="banner-subtitle">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
        </div>
        <div>
                <a href="https://youtu.be/C_wBJGhauMY" target="__blank">
                <img className="video" src={video} alt="video" />  
                </a>
            </div>
        </section>
        
}


export default Banner

