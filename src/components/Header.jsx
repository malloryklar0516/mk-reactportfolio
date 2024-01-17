import propic from '../assets/images/headshot.jpeg'
import {Link} from "react-router-dom";
function Header() {

    return (
        
      <div className="header">
       <h1> Mallory Klar</h1>
       <img src={propic} alt="propic" width="200px" height = "200px"></img>
       <nav className="navigation">
<Link to="/" className="navText">About Me</Link>
<Link to="/Portfolio" className="navText">My Portfolio</Link>
<Link to="/Resume" className="navText">Resume</Link>
<Link to="/Contact" className="navText">Contact Me</Link>
</nav>
      </div>
    );
  }

  export default Header; 