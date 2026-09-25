import React from 'react'
import {Link} from 'react-router-dom'
import { FaEye, FaEdit, FaTrash } from "react-icons/fa"
function StudentCard({student,onDelete,onEdit}) {
  
  return (
    <div className='bg-white rounded-2xl p-6 shadow-md border border-pink-100 hover:shadow-xl'>
<div className='w-14 h-14 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-xl'>
{student.name.charAt(0)}
</div>
<h2 className='text-xl font-bold text-black mt-4'>{student.name}</h2>
<p className='text-purple-600 font-medium'>{student.course}</p>
<p className='text-gray-500 mt-2'>{student.email}</p>
<p className='text-gray-500'>Age: {student.age}</p>
<p className='text-gray-500'>Phone: {student.phone}</p>
<div className='flex gap-2 mt-5'>
  <Link to={`/students/${student.id}`} className='bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700'>
   <FaEye />View</Link>
<button onClick={()=>onEdit(student)} className='bg-pink-500 text-white px-4 py-2 rounded-lg'>
   <FaEdit />Edit</button>
  <button onClick={()=>onDelete(student.id)} className='bg-black text-white px-4 py-2 rounded-lg'>
    <FaTrash /> Delete
  </button>
</div>
    </div>
  )
}

export default StudentCard