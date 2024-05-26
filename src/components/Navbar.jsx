import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { appleImg, searchImg } from '../utils';
import { combinedProductList, navLists } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoMdCloseCircle, IoMdCloseCircleOutline } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import ProductContext from '../GlobalProvider/Context';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { products, handleSearch, searchQuery } = useContext(ProductContext);
  const searchRef = useRef(null);
  
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearchOpen(false);
      handleSearch('');
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      handleSearch('');
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      handleSearch('');
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      handleSearch('');
    };
  }, [isSearchOpen]);

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
                `px-5 text-sm cursor-pointer transition-all ${isActive ? 'text-white' : 'text-gray hover:text-white'
                }`
              }
              to={`/${item.toLowerCase()}`}
            >
              {item}
            </NavLink>
          ))}
        </div>
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <div className='relative flex items-center'>            
            {isSearchOpen ? (
              <>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(el)=>handleSearch(el.target.value)}
                  className='bg-gray-700 text-white px-2 py-1 rounded focus:outline-none'
                  placeholder='Search...'
                />
                <button type="button" onClick={toggleSearch} className='ml-2 text-white'>
                <IoMdCloseCircleOutline />
                </button>
              </>
            ) : 
            <button onClick={toggleSearch} className='p-2 focus:outline-none'>
              <img src={searchImg} alt="search" className='h-6 w-6' />
            </button>
          }
          </div>
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
                `block px-5 py-3 text-sm cursor-pointer transition-all ${isActive ? 'bg-gray-700' : 'hover:bg-gray-600'
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
