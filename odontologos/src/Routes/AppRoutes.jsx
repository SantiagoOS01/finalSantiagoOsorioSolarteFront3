import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    useParams,
    useNavigate
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dentist">Dentist</Link></li>
                    <li><Link to="/favs">Favorites</Link></li>
                    <li><Link to="/contac">Contact</Link></li>
                </ul>
            </nav>
          </div>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/dentist' element={<Dentist/>}></Route>
            <Route path='/favs' element={<Favs/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
        </Router>
    )
}

export default AppRoutes