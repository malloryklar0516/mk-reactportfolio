import { Link, Route } from "react-router-dom";
import { Container, Navbar } from "react-bulma-components";
import { useState } from "react";
const styles = {
  navbarStyle: { background: "navy", justifyContent: "flex-end" },
  activeClass: "highlight",
  className: "text-black-600",
};

const links = [
  {
    className: styles.className,
    activeClass: styles.activeClass,
    to: "/about",
    name: "About",
  },
  {
    className: styles.className,
    activeClass: styles.activeClass,
    to: "/portfolio",
    name: "Portfolio",
  },
  {
    className: styles.className,
    activeClass: styles.activeClass,
    to: "/contact",
    name: "Contact",
  },
  {
    className: styles.className,
    activeClass: styles.activeClass,
    to: "/resume",
    name: "Resume",
  },
];
function Navbar() {
  const [activeLink, setActiveLink] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    console.log(event);
    setActiveLink((prevValue)=> {
      console.log(prevValue);
      prevValue ? false : true;
    })
  }
  return (
    <Route>
      <Navbar.Container align="right">
        <Navbar.Item active={activeLink}>
        <Link to="/about">About Me</Link>
        </Navbar.Item>
        <Navbar.Item active={activeLink} onClick={handleClick}>
        <Link to="/portfolio">Portfolio</Link>
        </Navbar.Item>  
        <Navbar.Item active={activeLink}>
        <Link to="/contact">Contact</Link>  
        </Navbar.Item>
        <Navbar.Item active={activeLink}>
        <Link to="/resume">Resume</Link>
        </Navbar.Item>
      </Navbar.Container>
    </Route>
  );
}

export default Navbar;
