import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-6 mt-auto border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; 2025 ChatAndBuild.com
            </p>
          </div>
          <div>
            <a 
              href="https://www.chatandbuild.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors"
            >
              Powered by ChatAndBuild.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
