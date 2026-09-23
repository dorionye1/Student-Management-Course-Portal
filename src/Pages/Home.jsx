import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <section className='bg-gradient-to-br from-purple-700 to-pink-500 text-white px-6 py-20'>
 <div className="max-w-6xl mx-auto">
  <p className='text-pink-200 font-semibold'>Student Management & Course Portal</p>
  <h1 className='text-4xl md:text-6xl font-bold mt-3'>Manage students and explore courses easily.</h1>
  <p className='max-w-xl mt-5 text-purple-100'>Learn practical technology skills,build 
    amazing projects and prepare for the digital world.</p>
          <div className="mt-8 flex gap-4">
<Link to="/students" className='bg-black px-6 py-3 rounded-lg'>View Students</Link>
<Link to="/courses" className='bg-white text-purple-700 px-6 py-3 rounded-lg'>Explore Courses</Link>
              </div>
 </div>
      </section>
      <section className='px-6 py-16'>
        <div className='max-w-6xl mx-auto text-center'>
<p className='text-pink-500 font-semibold'>LEARN WITH US</p>
<h2 className='text-3xl font-bold text-purple-700 mt-2'> Turn Your Ideas Into Skills</h2>
<p className='text-gray-500 max-w-2xl mx-auto mt-4'>Dorisa Academy gives students the opportunity to learn technology through practical projects
 and creative learning.</p>
        </div>
      </section>
      <section className='bg-pink-50 px-6 py-12'>
         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
           <div className="bg-white rounded-2xl p-8 text-center shadow">
            <p className='text-4xl font-bold text-pink-500'>50+</p>
            <p className='text-gray-500 mt-2'>Students</p>
           </div>
           <div className="bg-white rounded-2xl p-8 text-center shadow">
            <p className='text-4xl font-bold text-purple-600'>5</p>
            <p className='text-gray-500 mt-2'>Courses</p>
           </div>
                  <div className="bg-white rounded-2xl p-8 text-center shadow">
                    <p className='text-4xl font-bold text-pink-700'>10+</p>
                    <p className='text-gray-300 mt-2'>Projects</p>
</div>

         </div>

      </section>
    </div>
  )
}

export default Home