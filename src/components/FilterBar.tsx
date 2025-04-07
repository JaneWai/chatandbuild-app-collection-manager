import React from 'react';
import { Search, Filter } from 'lucide-react';
import { ProductType } from '../types';

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedType: ProductType | 'All';
  setSelectedType: (type: ProductType | 'All') => void;
}

const productTypes: (ProductType | 'All')[] = [
  'All',
  'Productivity',
  'Games',
  'Education',
  'Entertainment',
  'Utility',
  'Social',
  'Business',
  'Health & Fitness',
  'Hobby',
  'Crypto',
  'Other'
];

const FilterBar: React.FC<FilterBarProps> = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedType, 
  setSelectedType 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search apps..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter className="h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as ProductType | 'All')}
            className="block w-full pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {productTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
