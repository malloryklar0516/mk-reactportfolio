import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
// import {Hero} from 'react-bulma-components'

function App() {
  return (
    <div className="main">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;