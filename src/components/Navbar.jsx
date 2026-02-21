import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ currentPage, navigateTo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About Us', id: 'about' },
        { name: 'Services', id: 'services' },
        { name: 'Methodology', id: 'methodology' },
        { name: 'Industries', id: 'industries' },
        { name: 'Contact', id: 'contact' },
    ];

    const handleNavClick = (id) => {
        navigateTo(id);
        setIsOpen(false);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 bg-teal-50 ${isScrolled || currentPage !== 'home' ? 'shadow-md py-1' : 'py-2'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-[4rem]">
                    <div
                        className="flex-shrink-0 flex items-center cursor-pointer group"
                        onClick={() => handleNavClick("home")}
                    >
                        <div className="leading-none">

                            {/* ===== MAIN BRAND ===== */}
                            <img
                                src="/bg remove logo.png"
                                alt="Delta One Advisory"
                                className="h-19 md:h-28 w-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.id)}
                                className={`text-[15px] font-medium transition-colors hover:text-teal-500 ${currentPage === link.id ? 'text-teal-600 font-bold' : 'text-gray-700'
                                    }`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-xl absolute w-full top-16 left-0 border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.id)}
                                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${currentPage === link.id ? 'text-teal-600 bg-teal-50' : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'}`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
