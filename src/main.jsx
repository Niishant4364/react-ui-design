import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './style.css'
import App from './App.jsx'
import Home from './nav-bar/home.jsx'
import About from './nav-bar/about.jsx'
import Portfolio from './nav-bar/portfolio.jsx'
import Service from './nav-bar/service.jsx'
import Blog from './nav-bar/blog.jsx'
import Contact from './nav-bar/contact.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/home' element={<Home />}/>
     <Route path='/about' element={<About />} />
       <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/service' element={<Service/>}/>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>


    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
