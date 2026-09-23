import {useState} from 'react'

function StudentForm({addStudent,editingStudent, updateStudent}) {
  const [name,setName]=useState(editingStudent ? editingStudent.name : "")
  const [email,setEmail]= useState(editingStudent ? editingStudent.email : "")
  const [age,setAge]= useState(editingStudent ? editingStudent.age : "")
  const [phone,setPhone]= useState(editingStudent ? editingStudent.phone : "")
  const [course,setCourse]= useState(editingStudent ? editingStudent.course : "")
  const [gender,setGender]= useState(editingStudent ? editingStudent.gender : "")

  const handleSubmit=(e)=>{e.preventDefault()
  const student={
id:editingStudent ? editingStudent.id : Date.now(),
name:name,
email:email,
age:age,
phone:phone,
course:course,
gender:gender
  }
    if(editingStudent){
    updateStudent(student)
  }
  else{
    addStudent(student)
  }

  setName("")
  setEmail("")
  setAge("")
  setCourse("")
  setGender("")
}
  return (
    <div className='bg-white rounded-2xl shadow-md p-6 border border-purple-100'>
<h2 className='text-2xl font-bold text-purple-700'>{editingStudent ? "Update Student" : "+ Add Student"}
</h2>
<p className='text-gray-500 mb-6'> {editingStudent ? "Update the student's information below.": 
"Enter the student's information below."}</p>
 <form onSubmit={handleSubmit}>
  <input type="text"  placeholder="Student name" value={name}  onChange={(e) => setName(e.target.value)}
   className="border border-pink-200 rounded-lg p-3 w-full mb-3" required />
   <input type="email" placeholder='Email address' value={email} onChange={(e)=>setEmail(e.target.value)} 
    className="border border-pink-200 rounded-lg p-3 w-full mb-3" required />
    <input type="number"  placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}
    className="border border-pink-200 rounded-lg p-3 w-full mb-3" required />
    <input type="text"  placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}
    className="border border-pink-200 rounded-lg p-3 w-full mb-3" required />
    <input type="text"  placeholder="Course" value={course}  onChange={(e) => setCourse(e.target.value)}
    className="border border-pink-200 rounded-lg p-3 w-full mb-3" required />
    <select  value={gender} onChange={(e) => setGender(e.target.value)}
    className="border border-pink-200 rounded-lg p-3 w-full mb-4" required>
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
    <button type='submit' className='bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600'>
    {editingStudent ? "Update Student" : "+ Add Student"}
    </button>
 </form>
    </div>
  )
}

export default StudentForm