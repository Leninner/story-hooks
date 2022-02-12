import { useEffect, useState } from 'react';

export const useCharacter = (URL) => {
  const [characters, setCharacters] = useState({ loading: true, data: [] });

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(URL);
      const data = response.json().then((data) => data.results);
      data.then((data) => setCharacters({ loading: false, data }));
    };

    fetchCharacters();
  }, [URL]);

  return characters;
};
