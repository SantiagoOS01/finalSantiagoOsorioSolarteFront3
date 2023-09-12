import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,    
  } from "react-router-dom";
import Home from "./Home";
import Favs from "./Favs";
import Dentist from "./Dentist";
import Contact from "./Contact";

function AppRoutes(){
    return(
        <Router>
          <div>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>                    
                    <li><Link to="/favs">Favoritos</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
            </nav>
          </div>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/dentist/:id' element={<Dentist/>}></Route>
            <Route path='/favs' element={<Favs/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
        </Router>
    )
}

export default AppRoutes