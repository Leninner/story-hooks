import { useEffect, useState } from 'react';

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

  return (
    <div>
      <h2>Characters</h2>
      {loading && <p>Loading...</p>}
      <ul>
        {data.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
