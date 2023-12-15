import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'

const NavItems = [
  { id: 1, title: 'home', href: '/' },
  { id: 2, title: 'about us', href: '/about' },
  { id: 3, title: 'services', href: '/services' },
  { id: 4, title: 'blog', href: '/blog' },
  { id: 5, title: 'contact us', href: '/contact' },
]

export default function Navbar() {
  return (
    <nav className='flex w-full laptop:flex-row laptop:justify-between laptop:items-center '>
      <h1 className='text-5xl font-bold capitalize text-white'>logo</h1>

      <div className='laptop:flex laptop:justify-start laptop:items-center laptop:gap-10 laptop:text-lg tablet:hidden mobile:hidden capitalize'>
        {NavItems.map((link) => {
          return (
            <NavLink
              to={link.href}
              className={({ isActive, isPending }) =>
                isPending
                  ? 'hover:text-white'
                  : isActive
                  ? 'text-white font-medium '
                  : 'text-[#FFFFFF] opacity-50 hover:text-white '
              }
            >
              {link.title}
            </NavLink>
          )
        })}

        <div className='flex justify-start items-center gap-5 text-white'>
          <Link to='#' className='text-2xl'>
            <FaUserCircle />
          </Link>

          <button type='button' className='text-2xl'>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </nav>
  )
}
