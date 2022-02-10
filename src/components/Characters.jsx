import { useEffect, useState, useReducer, useMemo, useRef, useCallback } from 'react';
import { InfoCharacter } from './InfoCharacter';
import { Search } from './Search';

const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITEs':
      return { ...state, favorites: [...state.favorites, action.payload] };

    default:
      return state;
  }
};

export const Characters = () => {
  const [characters, setCharacters] = useState({ loading: true, data: [] });
  const [search, setSearch] = useState('');
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const { loading, data } = characters;
  const searchInput = useRef(null);

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const filteredUsers = useMemo(() => {
    return data.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [data, search]);

  const handleClick = (character) => {
    dispatch({ type: 'ADD_TO_FAVORITEs', payload: character });
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = response.json().then((data) => data.results);
      data.then((data) => setCharacters({ loading: false, data }));
    };

    fetchCharacters();
  }, []);

  return (
    <section className='w-full bg-[#E6EBEE] dark:bg-slate-700 pt-52'>
      {loading && <p>Loading...</p>}

      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

      {favorites.favorites.length ? (
        <>
          <h2 className='mb-2 text-3xl font-bold text-center tracking-tigh dark:text-white dark:drop-shadow-[0_5px_5px_#e4410084]'>
            Favorites
          </h2>
          <div className='flex flex-wrap justify-center border-b py-50 border-b-slate-300'>
            {favorites.favorites.map((character) => (
              <InfoCharacter key={character.id} {...character} withoutButton />
            ))}
          </div>
        </>
      ) : null}

      <div className='flex flex-wrap justify-center py-50'>
        {filteredUsers.map((character) => {
          const { id } = character;
          return <InfoCharacter key={id} {...character} onClick={() => handleClick(character)} />;
        })}
      </div>
    </section>
  );
};
