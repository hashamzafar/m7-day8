import {Navbar} from "react-bootstrap"
import "./style.css"



const NavBar = ()=>{
return(
  
 
  <Navbar variant="dark" className="navbar">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://cdn.dribbble.com/users/3547568/screenshots/14395014/media/0b94c75b97182946d495f34c16eab987.jpg?compress=1&resize=400x300"
        width="40"
        height="40"
        className="d-inline-block align-top"
      />{' '}
      Happy Music
    </Navbar.Brand>
  </Navbar>

)
}

export default NavBar