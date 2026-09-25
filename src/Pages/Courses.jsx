import React from 'react'
import CourseCard from "../Components/CourseCard"
import { FaGraduationCap } from "react-icons/fa"

function Courses() {
  const courses = [
    {
       id: 1,
      name: "React Development",
      description: "Learn how to build websites with React.",
      duration: "3 Months",
      category: "Frontend"
    },
    {
        id: 2,
      name: "Web Development",
      description: "Learn HTML, CSS and JavaScript.",
      duration: "4 Months",
      category: "Web"
    },
    {
       id: 3,
      name: "JavaScript",
      description: "Learn JavaScript from the basics.",
      duration: "3 Months",
      category: "Programming"
    },
    {
        id: 4,
      name: "Python",
      description: "Learn Python programming.",
      duration: "4 Months",
      category: "Programming"
    },
    {
       id: 5,
      name: "UI/UX Design",
      description: "Learn how to create beautiful interfaces.",
      duration: "3 Months",
      category: "Design"
    }
  ]
  return (
    <div className='bg-gray-50 min-h-screen px-6 py-12'>
<div className='max-w-6xl mx-auto'>
  <div className='text-pink-500 font-semibold'>
     WHAT WE TEACH
  </div>
  <h1 className='text-4xl font-bold text-purple-700'>  <FaGraduationCap />OUR COURSES</h1>
  <p className='text-gray-500 mt-2 mb-8'>Choose a skill and start learning.</p>
  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {courses.map((course)=>(
      <CourseCard key={course.id} course={course}/>
    ))}
  </div>
</div>
    </div>
  )
}

export default Courses