import React from 'react';
import { Layout, Plus } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  onAddClick: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddClick, theme, toggleTheme }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-indigo-900 dark:to-purple-900 text-white py-6 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Layout className="h-8 w-8 mr-3" />
            <h1 className="text-2xl md:text-3xl font-bold">ChatAndBuild App Collection</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            
            <button
              onClick={onAddClick}
              className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              <Plus className="h-5 w-5 mr-1" />
              <span className="font-medium">Add New App</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
