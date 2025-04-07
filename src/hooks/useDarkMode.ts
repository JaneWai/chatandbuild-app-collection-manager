import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

type Theme = 'dark' | 'light';

function useDarkMode(): [Theme, () => void] {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return [theme, toggleTheme];
}

export default useDarkMode;
