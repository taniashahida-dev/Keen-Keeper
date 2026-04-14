import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "px-4 p-2 text-white bg-[#244D3F] rounded-lg"
            : "p-2 text-gray-500"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/TimeLine"
        className={({ isActive }) =>
          isActive
            ? "px-4 p-2 text-white bg-[#244D3F] rounded-lg"
            : "p-2 text-gray-500"
        }
      >
        Timeline
      </NavLink>

      <NavLink
        to="/Stats"
        className={({ isActive }) =>
          isActive
            ? "px-4 p-2 text-white bg-[#244D3F] rounded-lg"
            : "p-2 text-gray-500"
        }
      >
        Stats
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
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