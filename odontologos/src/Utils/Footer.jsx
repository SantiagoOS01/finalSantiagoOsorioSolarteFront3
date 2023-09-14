import { Link } from "react-router-dom";

function Footer(){

    return(
        <footer>
           <Link to="/"><img className="imagenF" src="src/Utils/logo1.png"alt="" /></Link>
           <Link to="/contact"><h2 className="Contactos">Contactanos</h2></Link>
           <img className="smile" src="src/Utils/smile.png" alt="sonrisa" />
        </footer>
    )
}

export default Footer;