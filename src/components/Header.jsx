import propic from "../assets/images/headshot.jpeg";
import { Link } from "react-router-dom";
import { Hero, Navbar, NavLink } from "react-bulma-components";
import './Header.css'
function Header() {
  return (
    <Hero className="header">
      <Hero.Header>
        <Navbar className="navigation">
          <Navbar.Item className='navItem'  >
            <Link to="/" className="navText">
              About Me
             </Link>
           </Navbar.Item >
          <Navbar.Item className='navItem' > 
            <Link to="/Portfolio" className="navText">
              My Portfolio
            </Link>
           </Navbar.Item >
          <Navbar.Item className='navItem' > 
            <Link to="/Resume" className="navText">
              Resume
             </Link>
           </Navbar.Item >
          <Navbar.Item className='navItem' > 
            <Link to="/Contact" className="navText">
              Contact Me
            </Link>
          </Navbar.Item>
        </Navbar>
        <h1 className="title is-4">Mallory Klar</h1>
        <p className="subtitle is-5">Full Stack Web Developer</p>
       
      </Hero.Header>
    </Hero>
  );
}

export default Header;
