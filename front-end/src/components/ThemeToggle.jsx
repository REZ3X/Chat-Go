import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-500 ease-in-out ${theme === 'dark' ? 'bg-[#ab9f9f]' : 'bg-[#5f8bde]'}`}
    >
      <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-500 ease-in-out flex items-center justify-center ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}>
        {theme === 'dark' ? <FaMoon className="text-[#1E201E] transition-opacity duration-500 ease-in-out" /> : <FaSun className="text-[#1f61d9] transition-opacity duration-500 ease-in-out" />}
      </div>
    </button>
  );
};

export default ThemeToggle;