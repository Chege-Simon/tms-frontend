import { NavLink } from 'react-router-dom';
    import { useState } from 'react';
    import { FaBars, FaHome, FaTruck, FaFileInvoice, FaUsers } from 'react-icons/fa';

    function Sidebar() {
      const [isOpen, setIsOpen] = useState<boolean>(false);

      const toggleSidebar = () => setIsOpen(!isOpen);

      return (
        <div className={`bg-gray-800 text-white h-screen ${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 fixed`}>
          <div className="p-4">
            <button onClick={toggleSidebar} className="text-white focus:outline-none">
              <FaBars size={24} />
            </button>
          </div>
          <nav className="mt-4">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
                  }
                >
                  <FaHome size={20} />
                  {isOpen && <span className="ml-4">Dashboard</span>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/vehicles"
                  className={({ isActive }) =>
                    `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
                  }
                >
                  <FaTruck size={20} />
                  {isOpen && <span className="ml-4">Vehicles</span>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/invoices"
                  className={({ isActive }) =>
                    `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
                  }
                >
                  <FaFileInvoice size={20} />
                  {isOpen && <span className="ml-4">Invoices</span>}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/customers"
                  className={({ isActive }) =>
                    `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
                  }
                >
                  <FaUsers size={20} />
                  {isOpen && <span className="ml-4">Customers</span>}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      );
    }

    export default Sidebar;