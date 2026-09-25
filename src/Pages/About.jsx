import React from 'react'
import { FaBullseye } from "react-icons/fa"

function About() {
  return (
    <div className='bg-gray-50 min-h-screen px-6 py-16'>
      
      <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow p-8'>
        
        <p className='text-pink-500 font-semibold'>
          ABOUT US
        </p>

        <p className='text-4xl font-bold text-purple-700 mt-2'>
          About Dorisa Academy
        </p>

        <p className='text-gray-600 mt-5'>
          Dorisa Academy is a computer training school
          that helps students learn practical technology skills.
        </p>

        <p className='text-gray-600 mt-4'>
          Our students can learn React, web development,
          JavaScript, Python and UI/UX design.
        </p>

        <div className='bg-pink-100 p-5 rounded-xl mt-8'>
          
          <div className='flex items-center gap-2 text-purple-700 font-bold text-xl'>
            <FaBullseye />
            <span>Our Goal</span>
          </div>

          <p className='text-gray-600 mt-2'>
            To help students learn, create and build
            useful technology projects.
          </p>

        </div>

      </div>

    </div>
  )
}

export default About