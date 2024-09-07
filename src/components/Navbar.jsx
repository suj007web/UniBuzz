import React from 'react';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="text-yellow-500 text-3xl font-bold">UB</div>
        <div className="font-semibold text-xl">
            <div>UniBuzz</div>
            <div className='font-medium text-xs'>Connect. Engage. Empower.</div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-8 text-gray-700">
        <a href="#" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">Community</a>
        <a href="#" className="hover:text-black">Events</a>
        <a href="#" className="hover:text-black">Mentorship</a>
        <a href="#" className="hover:text-black">Contact</a>
      </nav>

      {/* Log In and Join Now Buttons */}
      <div className="flex items-center space-x-4">
        <a href="#" className="flex items-center space-x-1">
          <img src="/user-icon.svg" alt="User Icon" className="w-5 h-5" />
          <span className="text-gray-700 hover:text-black">Log In</span>
        </a>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
          Join Now
        </button>
      </div>
    </header>
  );
};

export default Navbar;
