import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { close, logo, menu } from '../../../../assets';
import { navLinks } from '../../../../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/"> {/* Use Link for your logo to navigate to the home page */}
        <img src={logo} alt="sydek" className="w-[128px] h-[50px]" />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li key={nav.id} className="font-manrope font-normal cursor-pointer text-[16px] text-white">
            <Link to={`#${nav.id}`}>{nav.title}</Link> {/* Use Link for navigation */}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      {toggle && (
        <div className="sm:hidden p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10">
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((nav) => (
              <li key={nav.id} className="font-manrope font-normal cursor-pointer text-[16px] text-white">
                <Link to={`#${nav.id}`}>{nav.title}</Link> {/* Use Link for navigation */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
