import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiChartLineLight } from "react-icons/pi";
import { RiHome2Line } from "react-icons/ri";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => `flex items-center gap-1 rounlg 
         ${ isActive
            ? "px-4 p-2 text-white bg-[#244D3F] rounded-lg"
            : "p-2 text-gray-500"}`
        }
      >
       <RiHome2Line /> Home
      </NavLink>

      <NavLink
        to="/TimeLine"
       className={({ isActive }) => `flex items-center gap-1 rounlg 
         ${ isActive
            ? "px-4 p-2 text-white bg-[#244D3F] rounded-lg"
            : "p-2 text-gray-500"}`
        }
      >
       <MdOutlineWatchLater /> Timeline
      </NavLink>

      <NavLink
        to="/Stats"
        className={({ isActive }) => `flex items-center gap-1 rounlg 
         ${ isActive
            ? "px-4 p-2 text-white bg-[#244D3F] rounded-lg"
            : "p-2 text-gray-500"}`
        }
      >
        <PiChartLineLight />Stats
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="w-11/12 mx-auto flex items-center justify-between">

        {/* LEFT: Logo + Mobile dropdown */}
        <div className="flex-1 flex items-center gap-2">

          {/* Mobile menu */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              ☰
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <a className="text-2xl lg:text-4xl font-bold">
            Keen<span className="text-[#244D3F]">Keeper</span>
          </a>
        </div>

        {/* RIGHT: Desktop menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-lg">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;