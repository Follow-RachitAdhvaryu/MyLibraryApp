import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact/Contact'
import About from './About/About'
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </>
  
  )
}

export default App  