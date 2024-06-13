import './App.css'
import Header from './components/Header'
import AnimatedCursor from 'react-animated-cursor'
import { Outlet} from 'react-router-dom'
import Footer from './components/Footer'
// import {Hero} from 'react-bulma-components'

function App() {
  return (
    <div className="main">
       <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='160,32,250'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '160,32,250',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;