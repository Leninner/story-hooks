import { useState } from 'react';

export const InfoCharacter = ({ name, image, species, onClick, withoutButton }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    onClick();
    setIsDisabled(true);
  };

  return (
    <div className='flex flex-col items-center justify-center w-5/6 m-10 md:w-80 '>
      <img src={image} alt='' className='w-[95%] rounded-t' />
      <div className='infoCharacter'>
        <h2 className='mb-2 text-xl font-bold uppercase tracking-tigh'>{name}</h2>
        <p className='text-base text-slate-400'>{species}</p>
        {!withoutButton && (
          <button onClick={handleClick} className='addToFavorites' disabled={isDisabled}>
            +
          </button>
        )}
      </div>
    </div>
  );
};
