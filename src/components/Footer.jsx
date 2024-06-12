import { Hero } from 'react-bulma-components';
import './Header.css'
function Footer() {
    return (

        <Hero.Footer className='footer'>
          <h2 style={{color:"white", fontWeight:"bolder"}}>Thanks for visiting!</h2>
                    <ul className = "contact-list">
                    <li><i class="fa fa-envelope" style={{color:"white"}}></i><a href="mailto:malloryklar@gmail.com">malloryklar@gmail.com</a></li>
                    <li><i class="fa fa-linkedin"style={{color:"white"}}></i> <a href="https://www.linkedin.com/in/malloryklar">View my LinkedIn profile</a></li>
                    <li><i class="fa fa-github"style={{color:"white"}}></i> <a href="https://github.com/malloryklar0516">View my GitHub</a></li>
            </ul>
        </Hero.Footer>
    );
  }
  
  export default Footer;