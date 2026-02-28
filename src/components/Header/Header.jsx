import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 w-full z-[100] py-[30px]" id="home">
            <div className="custom-container flex justify-between items-center">
                <nav className="flex">
                    <ul className="flex list-none gap-[40px]">
                        <li>
                            <NavLink to="/" className={({ isActive }) => `no-underline ${isActive ? 'text-[#aae0e0]' : 'text-white'} text-[1.1rem] font-semibold transition-colors duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:text-[#aae0e0]`}>
                                الرئيسية
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => `no-underline ${isActive ? 'text-[#aae0e0]' : 'text-white'} text-[1.1rem] font-semibold transition-colors duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:text-[#aae0e0]`}>
                                من نحن
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" className={({ isActive }) => `no-underline ${isActive ? 'text-[#aae0e0]' : 'text-white'} text-[1.1rem] font-semibold transition-colors duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:text-[#aae0e0]`}>
                                مشاريعنا
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => `no-underline ${isActive ? 'text-[#aae0e0]' : 'text-white'} text-[1.1rem] font-semibold transition-colors duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:text-[#aae0e0]`}>
                                تواصل معنا
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center">
                </div>
            </div>
        </header>
    );
};

export default Header;
