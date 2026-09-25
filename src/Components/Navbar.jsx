import React, { useState } from 'react'
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Courses from '../Pages/Courses'
import Students from '../Pages/Students'
import StudentDetails from '../Pages/StudentDetails'
import NotFound from '../Pages/NotFound'
import Footer from '../Components/Footer'

function Navbar() {

  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  if (
    location.pathname !== "/" &&
    location.pathname !== "/about" &&
    location.pathname !== "/students" &&
    location.pathname !== "/courses" &&
    !location.pathname.startsWith("/students/")
  ) {
    return (
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
  }

  return (
    <>
      <nav className="bg-black text-white px-6 py-5">

        <div className="max-w-6xl mx-auto flex justify-between items-center">

          <Link to="/" className="text-2xl font-bold">
            <span className="text-pink-400">Dorisa</span>
            <span className="text-white">Academy</span>
          </Link>

          <div className="hidden md:flex gap-5">

            <Link to="/" className="hover:text-pink-400">
              Home
            </Link>

            <Link to="/about" className="hover:text-pink-400">
              About
            </Link>

            <Link to="/students" className="hover:text-pink-400">
              Students
            </Link>

            <Link to="/courses" className="hover:text-pink-400">
              Courses
            </Link>

          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-5 pb-2">

            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-pink-400">
              Home
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-pink-400">
              About
            </Link>

            <Link to="/students" onClick={() => setMenuOpen(false)} className="hover:text-pink-400">
              Students
            </Link>

            <Link to="/courses" onClick={() => setMenuOpen(false)} className="hover:text-pink-400">
              Courses
            </Link>

          </div>
        )}

      </nav>


      <Routes>
        <Route path="/students" element={<Students />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>

      <Footer />
    </>
  )
}

export default Navbar

