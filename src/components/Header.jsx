import { useState } from 'react';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className='bg-white  px-6 py-5 ring-1 ring-slate-900/5 shadow-xl'>
      <h1 className='text-slate-900  mt-5 text-2xl font-medium tracking-tight'>React Hooks</h1>
      <button
        type='button'
        onClick={toggleDarkMode}
        className='px-3 py-2 bg-slate-900 text-white hover:bg-slate-800 duration-300 rounded my-3'>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};
