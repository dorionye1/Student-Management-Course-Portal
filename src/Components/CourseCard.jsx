import React from 'react'

function CourseCard({course}) {
  return (
    <div className='bg-white rounded-2xl p-6 shadow-md border border-purple-100 hover:shadow-xl'>
<div className='w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold'>
{course.name.charAt(0)}
</div>
<h2 className='text-xl font-bold mt-4'>{course.name}</h2>
<p className='text-gray-500 mt-2'>{course.description}</p>
<div className='mt-4'>
  <span className='bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm'>
    {course.duration}
  </span>
</div>
<p className='text-purple-600 mt-3'>{course.category}</p>
    </div>
  )
}

export default CourseCard