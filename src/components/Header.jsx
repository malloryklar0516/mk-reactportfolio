import propic from '../assets/images'
function Header(props) {

    return (
        
      <div className="header">
       <h1> Mallory Klar</h1>
       <img src={propic} alt="propic"></img>
       {props.children}
      </div>
    );
  }

  export default Header; 