import {useState} from 'react'
import StudentForm from "../Components/StudentForm"
import StudentList from "../Components/StudentList"

function Students() {
  const [editingStudent, setEditingStudent] = useState(null)
  const [students,setStudents]=useState([
    {
       id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      age: 23,
      phone: "123-456-7890",
      course: "React Development",
      gender: "Male"
    },
    {
        id: 2,
      name: "Mary James",
      email: "mary@gmail.com",
      age: 21,
      phone: "987-654-3210",
      course: "Web Development",
      gender: "Female"
    },
    {
       id: 3,
      name: "David Smith",
      email: "david@gmail.com",
      age: 24,
      phone: "555-555-5555",
      course: "JavaScript",
      gender: "Male"
    }
  ])
  const [search,setSearch]=useState("")
  const addStudent=(student) =>{
setStudents([...students, student])
}
 const deleteStudent=(id)=> {
setStudents(
      students.filter((student) => student.id !== id)
    )
  }
const updateStudent = (updatedStudent) => {
  setStudents(
    students.map((student)=>
    student.id === updatedStudent.id ? updatedStudent : student
    )
  )
  setEditingStudent(null)
}
 const filteredStudents = students.filter((student) =>
   student.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='bg-gray-50 min-h-screen px-6 py-12'>
<div className='max-w-6xl mx-auto'>
  <div className='mb-8'>
<p className='text-pink-500 font-semibold'>Student Management</p>
<p className='text-gray-500 mt-2'> Add and manage students easily.</p>
  </div>
  <StudentForm   key={editingStudent ? editingStudent.id : "new"} addStudent={addStudent} editingStudent={editingStudent} updateStudent={updateStudent}/>
    <div className="mt-10 mb-6">
      <input type="text" placeholder='Search Student...' className='border border-pink-300 rounded-md px-4 py-2 w-full' value={search} onChange={(e)=>setSearch(e.target.value)}/>
    </div>
    <p className='text-purple-700 font-bold mb-5'>{filteredStudents.length} Students </p>
    {filteredStudents.length === 0 ?(
      <div className='bg-pink-50 p-10 rounded-2xl text-center'>
        <h2 className='text-xl font-bold text-purple-700'>No Students Found</h2>
        <p className='text-gray-500 mt-2'>Try searching for a another name</p>
      </div>
    ):(
      <StudentList students={filteredStudents} onDelete={deleteStudent} onEdit={setEditingStudent}/>
    )}
    </div>
</div>
    
  )
}

export default Students