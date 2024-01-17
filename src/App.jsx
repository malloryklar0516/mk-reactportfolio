import './App.css'
import Header from './components/Header'
import Nav from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div className="main">
      <Header />
      <Nav />
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;