import React from 'react'
import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa"
function Footer() {
  return (
<footer className='bg-black text-white text-center py-8'>
  <h2 className='text-xl font-bold'>
    <span className='text-pink-400'>Dorisa</span>Academy</h2>
    <p className='text-gray-400 mt-2'>Learn. Create. Grow.</p>
        <div className="flex justify-center gap-5">
  <FaInstagram />
  <FaGithub />
  <FaEnvelope />
</div>
    <p className='text-sm text-gray-500 mt-4'>&copy; 2026 Dorisa Academy</p>
</footer>
  )
}

export default Footer