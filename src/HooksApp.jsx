import { useContext } from 'react';
import { Header } from './components/Header';
import { Characters } from './components/Characters';
import { ThemeContext } from './context/ThemeContext';

export const HooksApp = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={isDark ? 'dark' : ''}>
      <Header onClick={toggleTheme} dark={isDark} />
      <Characters />
    </div>
  );
};
