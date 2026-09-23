import React from 'react'
import {Route,Routes,Link,useLocation} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Courses from '../Pages/Courses'
import Students from '../Pages/Students'
import StudentDetails from '../Pages/StudentDetails'
import NotFound from '../Pages/NotFound'
import Footer from '../Components/Footer'
function Navbar() {
   const location = useLocation()
if (location.pathname !== "/" &&
      location.pathname !== "/about" &&
      location.pathname !== "/students" &&
      location.pathname !== "/courses" &&
      !location.pathname.startsWith("/students/")) {
    return (
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
  }

  return (
    <>
    <nav  className="bg-black text-white px-6 py-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-pink-400">Dorisa</span>
          <span className="text-white">Academy</span>
        </Link>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-4 sm:mt-0">
        <Link to={"/"} className="hover:text-pink-400">Home</Link>
        <Link to={"/about"}className="hover:text-pink-400">About</Link>
        <Link to={"/students"}className="hover:text-pink-400">Students</Link>
        <Link to={"/courses"}className="hover:text-pink-400">Courses</Link>
        </div>
        </div>
      </nav>

 <Routes>
  <Route path="/students"element={<Students />}/>
<Route  path='/' element={<Home/>}/>
<Route  path='/about' element={<About/>}/>
<Route  path='/students/:id' element={<StudentDetails/>}/>
<Route  path='/courses' element={<Courses/>}/>
 </Routes>
  <Footer />
    </>
  )
}

export default Navbar