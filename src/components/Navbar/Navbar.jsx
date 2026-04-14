import React from 'react';
import { NavLink } from 'react-router';


const Navbar = () => {
   const links =(
    <>
    <NavLink to="/"  className={({isActive})=>isActive? "px-4 p-2  text-white bg-[#244D3F] rounded-lg":"p-2 text-gray-500"}>Home</NavLink>
    <NavLink to="/TimeLine" className={({isActive})=>isActive? "px-4 p-2  text-white bg-[#244D3F] rounded-lg":"p-2 text-gray-500"}>Timeline</NavLink>
    <NavLink to="/Stats"  className={({isActive})=>isActive? "px-4 p-2  text-white bg-[#244D3F] rounded-lg":"p-2 text-gray-500"}>Stats</NavLink>
    </>
   )
    return (
        <div className="navbar bg-base-100 shadow-sm ">
 <div className='w-11/12 mx-auto flex items-center'>
     <div className="flex-1">
    <a className=" text-5xl font-bold">Keen<span className='text-[#244D3F]'>Keeper</span></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-4 text-lg">
    {links}
    </ul>
  </div>
 </div>
</div>
    );
};

export default Navbar;