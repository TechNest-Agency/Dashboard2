import React, { useState } from 'react';
import { FiMenu, FiX, FiSearch, FiBell, FiSun } from 'react-icons/fi';
import Sidebar from '../Dashboard__/Sidebar';

const DashboardNavbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="relative">
            {/* Navbar - .............................*/}
            <div className={`sticky top-0 z-30 bg-gray-50 border-b border-gray-200 ${
               isSidebarOpen ? 'left-64' : 'left-0'
            } right-0 transition-all duration-300 ease-in-out`}>
                <div className="px-3 py-2 flex items-center justify-between">
                    {/* Left side: Menu button....................... */}
                    <button
                        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
                        onClick={toggleSidebar}
                        className="lg:hidden p-1 rounded-md hover:bg-gray-100"
                    >
                        {isSidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                    </button>

                    {/* Middle: Search field................... */}
                    <div className="hidden sm:flex flex-grow px-4 max-w-lg ml-auto mr-auto">
                        <div className="flex relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            />
                            <button 
                                aria-label="Search" 
                                className="absolute left-3 top-2.5 text-gray-400 hover:text-gray-900"
                            >
                                <FiSearch size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Right side: Icons.................................... */}
                    <div className="flex items-center space-x-2 sm:space-x-0.5">
                        {/* Notifications */}
                        <button 
                            aria-label="Notifications" 
                            className="p-1 rounded-md hover:bg-gray-100 relative"
                        >
                            <FiBell size={20} />
                            <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-gray-50 text-xs rounded-full px-1">
                                1
                            </span>
                        </button>

                        {/* Theme icon */}
                        <button 
                            aria-label="Change theme" 
                            className="p-1 rounded-md hover:bg-gray-100"
                        >
                            <FiSun size={20} />
                        </button>

                        {/* User profile */}
                        <div className="flex items-center ml-2">
                            <img
                                src="https://randomuser.me/api/portraits/men/75.jpg"
                                alt="User"
                                className="w-8 h-8 rounded-full border-2 border-blue-500 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar..................... */}
            <div
                className={`fixed top-0 left-0 h-full z-40 transform transition-transform duration-300 ease-in-out ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }  bg-gray-50 shadow-md`}
            >
                <Sidebar />
            </div>

            {/* When sidebar is open ...............*/}
            {isSidebarOpen && (
                <div
                    aria-label="Close sidebar"
                    onClick={toggleSidebar}
                    className="lg:hidden fixed inset-0 bg-white bg-opacity-20 backdrop-blur-sm z-30"
                />
            )}

            <div className={` ${
                isSidebarOpen ? `pl-64` : 'pl-0'
            }`}></div>
        </div>
    );
};

export default DashboardNavbar;