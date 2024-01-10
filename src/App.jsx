// import './App.css'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="main">
      <Header />
      <Navbar/>
      <About />
      <Portfolio />
      <Resume/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;