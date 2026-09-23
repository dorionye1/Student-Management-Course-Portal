import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-6'>
        <div className='text-center'>
            <h1 className='text-7xl font-bold text-purple-700'>404</h1>
            <h2 className='text-2xl font-bold text-black mt-4'>Page Not Found</h2>
            <p className='text-gray-500 mt-2'>  Sorry, the page you are looking for does not exist.</p>
<Link to='/'className='inline-block mt-6 bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600'>
Go Home
</Link>
        </div>
    </div>
  )
}

export default NotFound