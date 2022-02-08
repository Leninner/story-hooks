import { useEffect, useState } from 'react';
import { InfoCharacter } from './InfoCharacter';

export const Characters = () => {
  const [characters, setCharacters] = useState({ loading: true, data: [] });

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = response.json().then((data) => data.results);
      data.then((data) => setCharacters({ loading: false, data }));
    };

    fetchCharacters();
  }, []);

  const { loading, data } = characters;

  console.log(data);

  return (
    <section className='w-full bg-[#E6EBEE] dark:bg-slate-700 pt-52'>
      {loading && <p>Loading...</p>}
      <div className='flex flex-wrap justify-center py-50'>
        {data.map((character) => {
          const { id } = character;
          return <InfoCharacter key={id} {...character} />;
        })}
      </div>
    </section>
  );
};
