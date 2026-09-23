import React from 'react'
import StudentCard from '../Components/StudentCard'
function StudentList({students, onDelete,onEdit}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
{students.map((student)=>(
  <StudentCard key={student.id} student={student} onDelete={onDelete} onEdit={onEdit} />
))}
    </div>
  )
}

export default StudentList