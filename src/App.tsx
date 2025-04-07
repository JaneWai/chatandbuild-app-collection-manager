import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import AppCard from './components/AppCard';
import FilterBar from './components/FilterBar';
import Footer from './components/Footer';
import useLocalStorage from './hooks/useLocalStorage';
import useDarkMode from './hooks/useDarkMode';
import { AppItem, ProductType } from './types';

const App: React.FC = () => {
  // Clear localStorage to force repopulation
  useEffect(() => {
    localStorage.removeItem('chatandbuild-apps');
  }, []);

  const [apps, setApps] = useLocalStorage<AppItem[]>('chatandbuild-apps', []);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<ProductType | 'All'>('All');
  const [theme, toggleTheme] = useDarkMode();

  useEffect(() => {
    // Always populate with the initial apps
    const initialApps: AppItem[] = [
      {
        id: uuidv4(),
        name: "Kitesurfing Spot Finder",
        description: "Kitesurfing Spot Finder",
        link: "https://kitesurf-1.chatandbuild.app/",
        productType: "Hobby"
      },
      {
        id: uuidv4(),
        name: "DeFi Yield Aggregator",
        description: "DeFi Yield Aggregator",
        link: "https://defi-yield-farming-aggregator-dashboard-670.chatandbuild.app/",
        productType: "Crypto"
      },
      {
        id: uuidv4(),
        name: "CZimulator Tweet Generator",
        description: "Tweet Generator",
        link: "https://czimulator-8.chatandbuild.app/",
        productType: "Productivity"
      },
      {
        id: uuidv4(),
        name: "Arcade Snake Game",
        description: "Arcade Snake Game",
        link: "https://arcade-style-snake-game-845.chatandbuild.app/",
        productType: "Games"
      },
      {
        id: uuidv4(),
        name: "Delaware Crypto Law App",
        description: "Crypto Law App",
        link: "https://delaware-cryptocurrency-law-and-regulations-portal-915.chatandbuild.app/",
        productType: "Crypto"
      },
      {
        id: uuidv4(),
        name: "Elegant To-Do App",
        description: "Be productive with your daily to-do",
        link: "https://simple-task-checker-253.chatandbuild.app/",
        productType: "Productivity"
      },
      {
        id: uuidv4(),
        name: "THORChain Node Operator Platform",
        description: "Browser the Node Operators list and engage for RUNE Bonding",
        link: "https://thorchain-node-operator-bonding-platform-136.chatandbuild.app/",
        productType: "Crypto"
      },
      {
        id: uuidv4(),
        name: "ChatAndBuild Social Feed",
        description: "ChatAndBuild Social Feed",
        link: "https://social.chatandbuild.app",
        productType: "Business"
      },
      {
        id: uuidv4(),
        name: "ChatAndBuild Creator Dashboard",
        description: "ChatAndBuild Creator Dashboard",
        link: "https://dashboard.chatandbuild.app",
        productType: "Business"
      },
      {
        id: uuidv4(),
        name: "ChatAndBuild Enterprise Integration",
        description: "ChatAndBuild Marketplace for creators",
        link: "https://marketplace.chatandbuild.app",
        productType: "Business"
      },
      {
        id: uuidv4(),
        name: "Cosmic Creator",
        description: "Cosmic Creator App",
        link: "https://3d-astronaut-journey-interactive-experience-254.chatandbuild.app/",
        productType: "Hobby"
      },
      {
        id: uuidv4(),
        name: "UNO Card Game",
        description: "UNO Card Game",
        link: "https://uno-card-game-259.chatandbuild.app/",
        productType: "Games"
      },
      {
        id: uuidv4(),
        name: "Monopoly Game",
        description: "Monopoly game",
        link: "https://sydney-eastern-suburbs-monopoly-game-842.chatandbuild.app/",
        productType: "Games"
      },
      {
        id: uuidv4(),
        name: "Connect 4- Game",
        description: "Connect 4",
        link: "https://connect4-game-702.chatandbuild.app/",
        productType: "Games"
      },
      {
        id: uuidv4(),
        name: "J&J Thrive PLT",
        description: "Coaching Services",
        link: "https://jj-thrive-plt-808.chatandbuild.app/",
        productType: "Business"
      },
      {
        id: uuidv4(),
        name: "Steps Tracking",
        description: "Daily steps tracking app",
        link: "https://fitness-tracking-application-534.chatandbuild.app/",
        productType: "Health & Fitness"
      },
      {
        id: uuidv4(),
        name: "Comprehensive Daily To-Do and Motivation app",
        description: "Daily To-Do and Motivation app",
        link: "https://git-projectdailycalendargit-311.chatandbuild.app/",
        productType: "Productivity"
      },
      {
        id: uuidv4(),
        name: "Vultisig",
        description: "The first seedless crypto wallet",
        link: "https://vultisig-the-first-seedless-crypto-wallet-721.chatandbuild.app/",
        productType: "Crypto"
      }
    ];
    
    setApps(initialApps);
  }, [setApps]);

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
                ? "No apps available at the moment." 
                : "Try adjusting your search or filter criteria."}
            </p>
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
    </div>
  );
};

export default App;
