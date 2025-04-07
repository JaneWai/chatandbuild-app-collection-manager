import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import AppCard from './components/AppCard';
import AppForm from './components/AppForm';
import FilterBar from './components/FilterBar';
import Footer from './components/Footer';
import useLocalStorage from './hooks/useLocalStorage';
import useDarkMode from './hooks/useDarkMode';
import { AppItem, ProductType } from './types';

const App: React.FC = () => {
  const [apps, setApps] = useLocalStorage<AppItem[]>('chatandbuild-apps', []);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<ProductType | 'All'>('All');
  const [theme, toggleTheme] = useDarkMode();

  const handleAddApp = (newApp: Omit<AppItem, 'id'>) => {
    setApps([...apps, { ...newApp, id: uuidv4() }]);
  };

  const handleDeleteApp = (id: string) => {
    setApps(apps.filter(app => app.id !== id));
  };

  const filteredApps = apps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          app.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || app.productType === selectedType;
    
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 flex flex-col">
      <Header 
        onAddClick={() => setIsFormOpen(true)} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <FilterBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
        
        {filteredApps.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-2">No apps found</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {apps.length === 0 
                ? "Start by adding your first ChatAndBuild app!" 
                : "Try adjusting your search or filter criteria."}
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white font-medium rounded-md hover:bg-blue-700 dark:hover:bg-blue-600"
            >
              Add Your First App
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map(app => (
              <AppCard 
                key={app.id} 
                app={app} 
                onDelete={handleDeleteApp} 
              />
            ))}
          </div>
        )}
      </main>
      
      <Footer />
      
      {isFormOpen && (
        <AppForm 
          onSubmit={handleAddApp} 
          onClose={() => setIsFormOpen(false)} 
        />
      )}
    </div>
  );
};

export default App;
