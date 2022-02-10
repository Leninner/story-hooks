import React from 'react';

export const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div>
      <input type='text' name='search' id='search' value={search} onChange={handleSearch} ref={searchInput} />
    </div>
  );
};
