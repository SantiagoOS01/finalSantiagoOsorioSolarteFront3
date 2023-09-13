import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,    
  } from "react-router-dom";
import AppProvider from '../Context/context';
import Home from "./Home";
import Favs from "./Favs";
import Dentist from "./Dentist";
import Contact from "./Contact";
import Navbar from "../Utils/Navbar";
import '../index.css'

function AppRoutes(){
    return(
        <Router>
          <AppProvider>
          <div>          
            <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/dentist/:id' element={<Dentist/>}></Route>
            <Route path='/favs' element={<Favs/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
          </div>
          </AppProvider>
        </Router>
    )
}

export default AppRoutes