import { useState } from 'react';
import { Header } from './components/Header';
import { Characters } from './components/Characters';

export const HooksApp = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header onClick={toggleDarkMode} dark={darkMode} />
      <Characters />
    </div>
  );
};
