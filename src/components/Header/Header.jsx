import React from 'react';

const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 w-full z-[100] py-[30px]" id="home">
            <div className="custom-container flex justify-between items-center">
                <nav className="flex">
                    <ul className="flex list-none gap-[40px]">
                        <li><a href="#home" className="no-underline text-white text-[1.1rem] font-semibold transition-colors duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:text-[#aae0e0]">الرئيسية</a></li>
                        <li><a href="#about" className="no-underline text-white text-[1.1rem] font-semibold transition-colors duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:text-[#aae0e0]">من نحن</a></li>
                        <li><a href="#projects" className="no-underline text-white text-[1.1rem] font-semibold transition-colors duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:text-[#aae0e0]">مشاريعنا</a></li>
                        <li><a href="#contact" className="no-underline text-white text-[1.1rem] font-semibold transition-colors duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)] hover:text-[#aae0e0]">تواصل معنا</a></li>
                    </ul>
                </nav>

                <div className="flex items-center">
                </div>
            </div>
        </header>
    );
};

export default Header;
