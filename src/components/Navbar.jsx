import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { appleImg, searchImg } from '../utils';
import { navLists } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center z-50'>
        <nav className='flex w-full screen-max-width items-center'>
          <Link to="/">
            <img src={appleImg} alt="apple" width={50} height={20} />
          </Link>
          <div className='flex flex-1 justify-center max-sm:hidden'>
            {navLists.map((item, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  `px-5 text-sm cursor-pointer transition-all ${
                    isActive ? 'text-white' : 'text-gray hover:text-white'
                  }`
                }
                to={`/${item.toLowerCase()}`}
              >
                {item}
              </NavLink>
            ))}
          </div>
          <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
            <img src={searchImg} alt="search" height={18} width={18} />
            <div className='sm:hidden'>
              <button onClick={toggleMenu} className='text-gray-500 hover:text-white'>
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </nav>
        {isMenuOpen && (
          <div className='sm:hidden absolute top-16 left-100 right-0 w-[40%] bg-gray-800 text-white z-50'>
            {navLists.map((item, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  `block px-5 py-3 text-sm cursor-pointer transition-all ${
                    isActive ? 'bg-gray-700' : 'hover:bg-gray-600'
                  }`
                }
                to={`/${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </div>
        )}
      </header>
    );
  };
  

export default Header;
