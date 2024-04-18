import React, { useState } from 'react';

const DropdownItem = ({ children }) => (
  <div>
    {children}
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="page">
      <div className="container">
        <header>
          <div className="container">
            <ul>
              <li onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                <a className="">your store</a>
                <ul className={isOpen ? "block" : "hidden"} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                  <DropdownItem>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900">home</a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900">community recommendations</a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900">recently viewed</a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900">steam curators</a>
                    </li>
                  </DropdownItem>
                </ul>
              </li>
              {/* Other list items */}
            </ul>
            <div className="input-cont">
              <input className="border border-gray-300 rounded-md py-1 px-3" type="text" placeholder="search" />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
