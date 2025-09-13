import React from "react";

const Footer = ({ text }) => {
  return (
    <footer className="fixed bottom-2 right-4">
      <a
        href="https://github.com/hardik07777"
        target="_blank"
        rel="noopener noreferrer"
        className="block py-2 px-3 rounded-lg bg-pink-100 dark:bg-gray-900 
                   text-sm font-medium text-gray-800 dark:text-gray-200 
                   shadow-md transition transform hover:scale-105 hover:bg-pink-200 
                   dark:hover:bg-gray-700"
      >
        {text} 🌸✨
      </a>
    </footer>
  );
};

export default Footer;
