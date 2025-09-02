import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react' // hamburger & close icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex justify-between items-center m-7">
      {/* Logo */}
      <div className="font-bold text-2xl">
        <Link to={'/'}><h1>TaskManager</h1></Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <nav>
          <ul className="flex gap-6 text-lg cursor-pointer">
            <Link to={'/todos'}><li>Home</li></Link>
            <li>Blog</li>
            <li>Finance</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

      {/* Login Button (always visible on desktop, in mobile inside menu) */}
      <div className="hidden md:block">
        <button className="bg-blue-700 p-2 rounded-lg text-white cursor-pointer">
          Login
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-5 bg-white shadow-lg rounded-xl p-5 w-48 md:hidden">
          <nav>
            <ul className="flex flex-col gap-4 text-lg">
              <Link to={'/todos'} onClick={() => setMenuOpen(false)}>
                <li>Home</li>
              </Link>
              <li>Blog</li>
              <li>Finance</li>
              <li>Contact</li>
              <button className="bg-blue-700 p-2 rounded-lg text-white cursor-pointer">
                Login
              </button>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}

export default Header
