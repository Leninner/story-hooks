export const Header = ({ onClick, dark }) => {
  return (
    <header className='fixed top-0 left-0 right-0 z-10 flex flex-col items-center px-6 py-5 bg-white shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800'>
      <h1 className='mt-5 text-3xl font-medium tracking-tight dark:text-white text-slate-900'>React Hooks</h1>
      <button
        type='button'
        onClick={onClick}
        className='px-3 py-2 my-3 text-white rounded shadow-md md:duration-300 hover:shadow-cyan-400 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-800 dark:hover:shadow-orange-600'>
        {dark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};
