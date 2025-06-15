import { useState } from 'react';
import {
    FiFileText, FiChevronDown, FiChevronRight, FiLayers, FiFile,
    FiUser, FiLock, FiLayout, FiMessageSquare, FiShield,
    FiCalendar, FiMail, FiHelpCircle, FiTag, FiSettings,
    FiActivity, FiBriefcase, FiBookmark, FiMap, FiPackage
} from 'react-icons/fi';
import { NavLink } from 'react-router';

const Sidebar = () => {
    const [expandedItems, setExpandedItems] = useState({
        dashboards: true, // Expanded by default
        pages: false,
    });

    const toggleSubMenu = (item) => {
        setExpandedItems((prev) => {
            const updated = { ...prev };
            updated[item] = !prev[item];
            return updated;
        });

    };

    return (
        <div className="flex flex-col h-full bg-white shadow-lg w-64 overflow-y-auto">

            <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
                <div className="flex items-center p-3.5">
                    <div className="text-sky-600 text-xl font-bold">Vuexy</div>
                </div>
            </div>

          
            <div className="flex-1">
                <nav className="pb-4">
                    <ul className="p-2 space-y-1">
                        {/* Dashboards Dropdown........................... */}
                        <li>
                            <button
                                onClick={() => toggleSubMenu("dashboards")}
                                className="flex items-center w-full p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                                {/*  */}
                                <FiLayers className="mr-3 text-lg" />
                                <span className="font-semibold">Dashboards</span>
                                <span className="ml-auto bg-red-500 text-gray-50 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    5
                                </span>
                                {expandedItems.dashboards ? (
                                    <FiChevronDown className="ml-2 text-gray-400" />
                                ) : (
                                    <FiChevronRight className="ml-2 text-gray-400" />
                                )}

                            </button>

                            {expandedItems.dashboards && (
                                <ul className="pl-11 mt-1 space-y-1">
                                    {/* Analytics ........................ */}
                                    <li>
                                        <NavLink to="/dashboard/analytics" className={({ isActive }) =>
                                            `flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? "text-sky-600 bg-sky-50" : ''}`
                                        }>
                                            <FiActivity className="mr-3 text-sm" />
                                            Analytics
                                        </NavLink>
                                    </li>

                                    {/* CRM ........................... */}
                                    <li>
                                        <NavLink to="/dashboard/crm" className={({ isActive }) =>
                                            `flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? "text-sky-600 bg-sky-50" : ''}`
                                        }>
                                            <FiBriefcase className="mr-3 text-sm" />
                                            CRM
                                        </NavLink>
                                    </li>

                                    {/* Ecommerce ..................... */}
                                    <li>
                                        <NavLink to="/dashboard/ecommerce" className={({ isActive }) =>
                                            `flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? "text-sky-600 bg-sky-50" : ''}`
                                        }>
                                            <FiPackage className="mr-3 text-sm" />
                                            Ecommerce
                                        </NavLink>
                                    </li>

                                    {/* Academy ............................*/}
                                    <li>
                                        <NavLink to="/dashboard/academy" className={({ isActive }) =>
                                            `flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? "text-sky-600 bg-sky-50" : ''}`
                                        }>
                                            <FiBookmark className="mr-3 text-sm" />
                                            Academy
                                        </NavLink>
                                    </li>

                                    {/* Logistics ................... */}
                                    <li>
                                        <NavLink to="/dashboard/logistics" className={({ isActive }) =>
                                            `flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? "text-sky-600 bg-sky-50" : ''}`
                                        }>
                                            <FiMap className="mr-3 text-sm" />
                                            Logistics
                                        </NavLink>
                                    </li>
                                </ul>
                            )}

                        </li>




                        {/* Front Pages.............. */}
                        <li>
                            <NavLink
                                to="/email"
                                className={({ isActive }) =>
                                    `flex items-center p-2 text-gray-600 rounded-lg transition-colors
      ${isActive ? 'text-sky-600 bg-sky-50' : ''}
      hover:bg-sky-100 hover:text-sky-700`
                                }
                            >
                                <FiFileText className="mr-3 text-lg" />
                                <span>Front Pages</span>
                            </NavLink>
                        </li>


                        {/* Apps & Pages Section.................. */}
                        <li className="mt-4 mb-2 px-2">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Apps & Pages</span>
                        </li>
                        {/* Email, Chat, Calendar */}
                        <li>
                            <NavLink
                                to="/email"
                                className={({ isActive }) =>
                                    `flex items-center p-2 text-gray-600 rounded-lg transition-colors
      ${isActive ? 'text-sky-600 bg-sky-50' : ''}
      hover:bg-sky-100 hover:text-sky-700`
                                }
                            >
                                <FiMail className="mr-3 text-lg" />
                                <span>Email</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/chat"
                                className={({ isActive }) =>
                                    `flex items-center p-2 text-gray-600 rounded-lg transition-colors
      ${isActive ? 'text-sky-600 bg-sky-50' : ''}
      hover:bg-sky-100 hover:text-sky-700`
                                }
                            >
                                <FiMessageSquare className="mr-3 text-lg" />
                                <span>Chat</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/calendar"
                                className={({ isActive }) =>
                                    `flex items-center p-2 text-gray-600 rounded-lg transition-colors
      ${isActive ? 'text-sky-600 bg-sky-50' : ''}
      hover:bg-sky-100 hover:text-sky-700`
                                }
                            >
                                <FiCalendar className="mr-3 text-lg" />
                                <span>Calendar</span>
                            </NavLink>
                        </li>


                        <li>
                            <NavLink
                                to="/kanban"
                                className={({ isActive }) =>
                                    `flex items-center p-2 text-gray-600 rounded-lg transition-colors
      ${isActive ? 'text-sky-600 bg-sky-50' : ''}
      hover:bg-sky-100 hover:text-sky-700`
                                }
                            >
                                <FiLayers className="mr-3 text-lg" />
                                <span>Kanban</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/invoice"
                                className={({ isActive }) =>
                                    `flex items-center p-2 text-gray-600 rounded-lg transition-colors
      ${isActive ? 'text-sky-600 bg-sky-50' : ''}
      hover:bg-sky-100 hover:text-sky-700`
                                }
                            >
                                <FiFile className="mr-3 text-lg" />
                                <span>Invoice</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/user"
                                className={({ isActive }) =>
                                    `flex items-center p-2 text-gray-600 rounded-lg transition-colors
      ${isActive ? 'text-sky-600 bg-sky-50' : ''}
      hover:bg-sky-100 hover:text-sky-700`
                                }
                            >
                                <FiUser className="mr-3 text-lg" />
                                <span>User</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/roles-permissions"
                                className={({ isActive }) =>
                                    `flex items-center p-2 text-gray-600 rounded-lg transition-colors
      ${isActive ? 'text-sky-600 bg-sky-50' : ''}
      hover:bg-sky-100 hover:text-sky-700`
                                }
                            >
                                <FiLock className="mr-3 text-lg" />
                                <span>Roles & Permissions</span>
                            </NavLink>
                        </li>




                        {/* Pages ............... */}
                        <li>
                            <button
                                onClick={() => toggleSubMenu('pages')}
                                className="flex items-center w-full p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <FiFileText className="mr-3 text-lg" />
                                <span>Pages</span>
                                {expandedItems.pages ? (
                                    <FiChevronDown className="ml-auto text-gray-400" />
                                ) : (
                                    <FiChevronRight className="ml-auto text-gray-400" />
                                )}

                            </button>
                            {expandedItems.pages && (
                                <ul className="pl-11 mt-1 space-y-1">
                                    {/* User Profile */}
                                    <li>
                                        <NavLink to="/pages/user-profile" className={({ isActive }) =>
                                            `block p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                                        }>
                                            <FiUser className="mr-3 text-lg inline" />
                                            User Profile
                                        </NavLink>
                                    </li>

                                    {/* Account Settings.............. */}
                                    <li>
                                        <NavLink to="/pages/account-settings" className={({ isActive }) =>
                                            `block p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                                        }>
                                            <FiSettings className="mr-3 text-lg inline" />
                                            Account Settings
                                        </NavLink>
                                    </li>

                                    {/* Pricing.................. */}
                                    <li>
                                        <NavLink to="/pages/pricing" className={({ isActive }) =>
                                            `block p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                                        }>
                                            <FiTag className="mr-3 text-lg inline" />
                                            Pricing
                                        </NavLink>
                                    </li>

                                    {/* FAQ .................*/}
                                    <li>
                                        <NavLink to="/pages/faq" className={({ isActive }) =>
                                            `block p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                                        }>
                                            <FiHelpCircle className="mr-3 text-lg inline" />
                                            FAQ
                                        </NavLink>
                                    </li>
                                </ul>
                            )}

                        </li>


                        {/* UI Elements Section ....................*/}
                        <li className="mt-4 mb-2 px-2">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">UI Elements</span>
                        </li>

                        <li>
                            <NavLink to="/ui/typography" className={({ isActive }) =>
                                `flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                            }>
                                <FiLayout className="mr-3 text-lg" />
                                <span>Typography</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/icons"
                                className={({ isActive }) =>
                                    `flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''
                                    }`
                                }
                            >
                                <FiPackage className="mr-3 text-lg" />
                                <span>Icons</span>
                            </NavLink>
                        </li>




                        {/* Others Section .........................*/}
                        <li className="mt-4 mb-2 px-2">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Others</span>
                        </li>
                        <li>
                            <NavLink to="/access-control" className={({ isActive }) =>
                                `flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                            }>
                                <FiShield className="mr-3 text-lg" />
                                <span>Access Control</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;