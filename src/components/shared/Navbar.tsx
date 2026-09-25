
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6">

      {/* Logo */}
      <div className="navbar-start">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={35} height={35} />
          <a className="text-xl font-bold">FITLOG</a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="navbar-center">
        <ul className="menu menu-horizontal gap-2">

          {/* Active Link */}
          <li>
            <a className="bg-black text-white rounded-full px-5">
              Workout
            </a>
          </li>

          {/* Normal Link */}
          <li>
            <a className="px-5">
              My Plan
            </a>
          </li>

        </ul>
      </div>

      {/* Plan & Saved */}
      <div className="navbar-end gap-3">

        {/* Plan Badge */}
        <div className="flex items-center gap-2">
          <span className="text-sm">Plan</span>
          <span className="bg-[#ccff00] text-black rounded-full px-3 py-1 text-sm font-semibold">
            2
          </span>
        </div>

        {/* Saved Badge */}
        <div className="flex items-center gap-2">
          <span className="text-sm">Saved</span>
          <span className="border border-black rounded-full px-3 py-1 text-sm font-semibold">
            5
          </span>
        </div>

      </div>

    </div>
  );
};

export default Navbar;
