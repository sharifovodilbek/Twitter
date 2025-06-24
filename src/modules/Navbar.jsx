import React from 'react'
import { LogoIcon } from '../assets/icons'
import { navListRoute } from '../hooks/paths'
import { Link, NavLink } from 'react-router-dom'
import Button from '../components/Button'

const Navbar = () => {
  return (
    <div className='w-[25%] pr-[20px] h-[100vh] overflow-y-auto'>
      <div className='pt-[32px] pb-[49px]'>
        <Link to={"/"}><LogoIcon /></Link>
      </div>
      <ul className='space-y-[20px] mb-[30px]'>
        {navListRoute.map(item => (
          <NavLink to={item.path} key={item.id} className={({ isActive }) => `flex items-center gap-[20px] p-2 rounded-md transition-colors ${isActive ? "text-black font-bold bg-gray-200" : "text-gray-500 hover:text-black"}`}>
            <span className="w-[24px] h-[24px]">{item.icon}</span>
            <p>{item.title}</p>
          </NavLink>


        ))}
      </ul>
      <Button type={'button'} title={"Tweet"} />
    </div >
  )
}
export default Navbar