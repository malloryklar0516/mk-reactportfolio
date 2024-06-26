import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Error from './components/Error'
import Contact from './components/Contact'
import Resume from './components/Resume'

const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
errorElement: <Error/>, 
children: [
    {
        index: true, 
        element: <About/>
    },
    {
        path: 'contact', 
        element: <Contact/>,
    }, 
    {
        path: 'portfolio',
        element: <Portfolio/>,
    },
    {
        path: 'resume',
        element: <Resume/>
    }
]
}])
ReactDOM.createRoot(document.querySelector('#app')).render(
    <RouterProvider router={router} />
);
{/* <AnimatedCursor
innerSize={8}
outerSize={35}
innerScale={1}
outerScale={1.7}
outerAlpha={0}
outerStyle={{
  border: '3px solid var(--cursor-color)'
}}
innerStyle={{
  backgroundColor: 'var(--cursor-color)'
}}
/> */}