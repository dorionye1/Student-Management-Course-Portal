import React from 'react'
import { useParams, Link } from "react-router-dom"

function StudentDetails() {
    const { id } = useParams()
  return (
    <div className='bg-pink-50 min-h-screen px-6 py-16'>
      <div className='max-w-xl mx-auto bg-white rounded-2xl shadow p-8'>
        <div className='w-20 h-20 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-3xl font-bold mx-auto'>

        </div>
        <h1 className='text-3xl text-center font-bold text-purple-700 mt-5'>Student Details</h1>
        <div className='bg-pink-50 rounded-xl p-5 mt-6'>
          <p><strong>Student ID:</strong>{id}</p>
          <p className='mt-3'> This is the details page for this student.</p>
        </div>
        <Link  to="/students" className='block text-center bg-black text-white p-3 rounded-lg mt-6'>
        Back to Students
        </Link>
      </div>

    </div>
  )
}

export default StudentDetails