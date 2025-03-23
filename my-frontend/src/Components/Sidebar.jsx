import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking the overlay
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      {/* Overlay (only visible when sidebar is open on mobile) */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20"
          onClick={closeSidebar} // Clicking on the overlay closes the sidebar
        ></div>
      )}

      {/* Hamburger Menu Button (only on mobile) */}
      <div
        className="lg:hidden p-4 text-white cursor-pointer absolute top-4 left-4 z-30"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <span className="text-2xl">X</span> // Close icon
        ) : (
          <span className="text-2xl">☰</span> // Hamburger icon
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block w-64 h-screen bg-gray-800 text-white p-5 fixed top-0 left-0 z-30 transition-all duration-300`}
      >
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="block p-3 rounded-md hover:bg-gray-700 transition duration-200"
              onClick={closeSidebar}
            >
              URL Shortener
            </Link>
          </li>
          <li>
            <Link
              to="/orignal"
              className="block p-3 rounded-md hover:bg-gray-700 transition duration-200"
              onClick={closeSidebar}
            >
              Original URL
            </Link>
          </li>
          <li>
            <Link
              to="/update"
              className="block p-3 rounded-md hover:bg-gray-700 transition duration-200"
              onClick={closeSidebar}
            >
              Update Short URL
            </Link>
          </li>
          <li>
            <Link
              to="/delete"
              className="block p-3 rounded-md hover:bg-gray-700 transition duration-200"
              onClick={closeSidebar}
            >
              Delete Short URL
            </Link>
          </li>
          <li>
            <Link
              to="/stats"
              className="block p-3 rounded-md hover:bg-gray-700 transition duration-200"
              onClick={closeSidebar}
            >
              Statistics
            </Link>
          </li>
          
        </ul>
      </div>

      {/* Main content area (does not shift layout) */}
      <div
        className={`lg:pl-64 p-4 transition-all duration-300 ${
          isSidebarOpen ? "ml-0" : ""
        }`}
      >
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
