
const styles = {
  navbarStyle: 
   { background: 'navy', justifyContent: 'flex-end'}, 
   activeClass:'highlight',
    className: 'text-black-600'
  }


const links = [
  {
    className: styles.className,
    activeClass: styles.activeClass,
    to: '/about',
    name: 'About'
  },
  {
    className: styles.className,
    activeClass: styles.activeClass,
    to: '/portfolio',
    name: 'Portfolio'
  },
  {
    className: styles.className,
    activeClass: styles.activeClass,
    to: '/contact',
    name: 'Contact'
  },
  {
    className: styles.className,
    activeClass: styles.activeClass,
    to: '/resume',
    name: 'Resume'
  },

]
function Navbar() {
  // const pages = ['about, portfolio', 'contact', 'resume'];

  return (
  <nav style={styles.navbarStyle} className="navbar">
      <a className href={`"/" + ${currentPage}`}>About Me</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/contact">Contact</a>
      <a href="/resume">Resume</a>
    </nav>
    
  );
}

const navItems = [
  {name: `About`, path: `/about`},
  {name: `Portfolio`, path: `/portfolio`},
  {name: `Contact`, path: `/contact`},
  {name: `Resume`, path: `/resume`}
]
const COMPONENT_MAP = {
  About: About,
  Portfolio: Portfolio,
  Contact: Contact,
  Resume: Resume

};

<Switch>
  {navItems.map(item =>
    item.name == `About` ? (
      <Route exact path = {item.path} component = {COMPONENT_MAP[item.name]}></Route>): (
        <Route path={item.path} component = {COMPONENT_MAP[item.name]}></Route>
      ))}
      </Switch>;

export default Navbar;
