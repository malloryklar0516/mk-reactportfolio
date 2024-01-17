import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
// import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Error from './components/Error'
import Contact from './components/Contact'
import Resume from './components/Resume'
// import Footer from './components/Footer'
// import Nav from './components/Navbar'
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
        path: 'Contact', 
        element: <Contact/>,
    }, 
    {
        path: 'Portfolio',
        element: <Portfolio/>,
    },
    {
        path: 'Resume',
        element: <Resume/>
    }
]
}])
ReactDOM.createRoot(document.querySelector('#app')).render(
    <RouterProvider router={router} />
);