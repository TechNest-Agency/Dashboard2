
import { useState } from 'react';
import { Outlet } from 'react-router'
import Sidebar from '../components/Dashboard__/Sidebar';
export default function DashboardLayout() {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
          
            {/* Sidebar..................... */}
            <div className={`
                lg:w-64 w-64 bg-white shadow-lg fixed lg:static top-0 left-0 z-60
                transform transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0 z-60' : '-translate-x-full'} lg:translate-x-0
                h-full lg:h-[800px] overflow-y-auto
            `}>
                <Sidebar />
            </div>
             {/* When sidebar is open.......... */}
            {isSidebarOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-white bg-opacity-60 z-30"
                    onClick={toggleSidebar}
                />
            )}


            {/* Main Dashboard Content.......... */}
            <div className="flex-1 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    )
}
