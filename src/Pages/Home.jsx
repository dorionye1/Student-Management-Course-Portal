import React from 'react'
import { Link } from 'react-router-dom'
import { FaGraduationCap,FaLaptop,FaBook,FaLightbulb } from "react-icons/fa"


function Home() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 text-white px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-pink-200 font-semibold uppercase tracking-wide">
             Student Management & Course Portal</p>
    

            <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
              Learn. Manage. 
              <span className="text-pink-200"> Grow.</span>
            </h1>

            <p className="max-w-xl mt-6 text-purple-100 text-lg leading-relaxed">
              A simple student management and course portal designed to help
              students explore technology courses, manage their information,
              and build practical skills for the digital world.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/students" className="bg-black text-white px-7 py-3 rounded-xl font-semibold text-center hover:bg-gray-900">
                View Students
              </Link>

              <Link to="/courses" className="bg-white text-purple-700 px-7 py-3 rounded-xl font-semibold text-center hover:bg-purple-50">
                Explore Courses
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
            <p className="text-pink-200 font-semibold">
              YOUR LEARNING JOURNEY
            </p>

            <h2 className="text-3xl font-bold mt-3">
              Everything in one place.
            </h2>

            <div className="mt-8 space-y-4">

              <div className="bg-white/10 rounded-xl p-4">
                <p className="font-semibold"><FaGraduationCap/> Manage Students</p>
                <p className="text-purple-100 text-sm mt-1">
                  Add, edit, search and view student information.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-4">
                <p className="font-semibold"><FaBook/> Explore Courses</p>
                <p className="text-purple-100 text-sm mt-1">
                  Discover technology courses and learning opportunities.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-4">
                <p className="font-semibold"><FaLaptop/> Build Your Skills</p>
                <p className="text-purple-100 text-sm mt-1">
                  Turn what you learn into practical projects.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">

          <p className="text-pink-500 font-semibold tracking-wide">
            LEARN WITH US
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mt-3">
            Turn Your Ideas Into Skills
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-5 leading-relaxed">
            Dorisa Academy gives students the opportunity to learn technology
            through practical projects, creative learning and hands-on
            experiences.
          </p>

        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="bg-pink-50 rounded-2xl p-8 hover:shadow-lg">
            <div className="w-14 h-14 bg-pink-200 rounded-xl flex items-center justify-center text-2xl">
              <FaGraduationCap/>
            </div>

            <h3 className="text-xl font-bold text-purple-700 mt-5">
              Student Management
            </h3>

            <p className="text-gray-500 mt-3 leading-relaxed">
              Easily add, update, search and manage student information
              from one place.
            </p>

            <Link to="/students" className="inline-block mt-5 text-pink-600 font-semibold hover:text-purple-700">
              Manage Students 
            </Link>
          </div>


          <div className="bg-purple-50 rounded-2xl p-8 hover:shadow-lg">
            <div className="w-14 h-14 bg-purple-200 rounded-xl flex items-center justify-center text-2xl">
              <FaBook/>
            </div>

            <h3 className="text-xl font-bold text-purple-700 mt-5">
              Explore Courses
            </h3>

            <p className="text-gray-500 mt-3 leading-relaxed">
              Explore different technology courses and discover areas
              you can learn and develop.
            </p>

            <Link to="/courses" className="inline-block mt-5 text-purple-600 font-semibold hover:text-pink-600" >
              View Courses 
            </Link>
          </div>


          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg">
            <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center text-2xl">
             <FaLightbulb />
            </div>

            <h3 className="text-xl font-bold text-purple-700 mt-5">
              Practical Learning
            </h3>

            <p className="text-gray-500 mt-3 leading-relaxed">
              Learn by building projects and developing practical
              technology skills for the digital world.
            </p>

            <Link to="/about" className="inline-block mt-5 text-purple-600 font-semibold hover:text-pink-600">
              Learn More 
            </Link>
          </div>

        </div>
      </section>

      <section className="bg-pink-50 px-6 py-16">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10">
            <p className="text-pink-500 font-semibold">
              DORISA ACADEMY
            </p>

            <h2 className="text-3xl font-bold text-purple-700 mt-2">
              Growing, Learning & Creating
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <p className="text-4xl font-bold text-pink-500">50+</p>
              <p className="text-gray-500 mt-2">Students</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <p className="text-4xl font-bold text-purple-600">5</p>
              <p className="text-gray-500 mt-2">Courses</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <p className="text-4xl font-bold text-pink-700">10+</p>
              <p className="text-gray-500 mt-2">Projects</p>
            </div>

          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-700 to-pink-500 rounded-3xl px-8 py-14 text-center text-white">

          <p className="text-pink-200 font-semibold">
            READY TO GET STARTED?
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Start exploring Dorisa Academy
          </h2>

          <p className="text-purple-100 max-w-xl mx-auto mt-4">
            Explore courses, view students and discover what the portal
            has to offer.
          </p>

          <Link to="/courses" className="inline-block mt-7 bg-white text-purple-700 px-7 py-3 rounded-xl font-semibold hover:bg-purple-50">
            Explore Courses
          </Link>

        </div>
      </section>

    </div>
  )
}

export default Home
