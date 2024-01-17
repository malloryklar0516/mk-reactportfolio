import React from "react";
import {Link} from "react-router-dom";

export default function Nav () {
<nav className="navigation">
<Link to="/" className="navText">About Me</Link>
<Link to="/Portfolio" className="navText">My Portfolio</Link>
<Link to="/Resume" className="navText">Resume</Link>
<Link to="/Contact" className="navText">Contact Me</Link>
</nav>
}
// import { NavbarContainer, NavbarItem } from "react-bulma-components";
// import React from "react";
// // const styles = {
// //   navbarStyle: { background: "navy", justifyContent: "flex-end" },
// //   activeClass: "highlight",
// //   className: "text-black-600",
// // };


// export default function Nav() {
//   // const [activeLink, setActiveLink] = useState("");
//   // const handleClick = (event) => {
//   //   event.preventDefault();
//   //   console.log(event);
//   //   setActiveLink((prevValue)=> {
//   //     console.log(prevValue);
//   //     prevValue ? 'false' : 'true';
//   //   })
//   // }
//   return (
    
//       <NavbarContainer>
//         <NavbarItem href = '/'>
//         About Me
//         </NavbarItem>
//         <NavbarItem href = '/portfolio'>
//       Portfolio
//         </NavbarItem>  
//         <NavbarItem href = '/contact'>
//       Contact
//         </NavbarItem>  
//         <NavbarItem href = '/resume'>
//       Resume
//         </NavbarItem>  
//       </NavbarContainer>
    
//   );
// }

