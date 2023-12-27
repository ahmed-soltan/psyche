import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import Result from './Pages/Result'
import About from './Pages/About'
import Hard from './Pages/Hard'
import Medium from './Pages/Medium'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import ServicePage from './Pages/ServicePage'
import Final from './Pages/Final'
import ChatbotComponent from './Components/ChatbotComponent'
const App = () => {
  return (
    <BrowserRouter>
    {/* <ChatbotComponent/> */}
    <Navbar/>
    <Nav/>
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/services' element={<ServicePage/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/result' element={<Result/>}/>
           <Route path='/hard' element={<Hard/>}/>
           <Route path='/medium' element={<Medium/>}/>
           <Route path='/final' element={<Final/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/signup' element={<Signup/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
  )
}

export default App