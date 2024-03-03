import React, { useContext } from 'react';

//importer les composants
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

//importer les icons
import {RiSearch2Line} from 'react-icons/ri'

//importer du contexte
import { HouseContext } from './HouseContext';

const Search = () => {
  const {handleClick}=useContext(HouseContext)

  return( 
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex 
      flex-col lg:flex-row justify-between gap-4 lg:gap-x-3
      relative lg:-top-4 shadow-1 bg-white lg:bg-transparent
      lg:backdrop-blur rounded-lg'>
      <CountryDropdown/>
      <PropertyDropdown/>
      <PriceRangeDropdown/>
      <button onClick={handleClick} className='bg-violet-700 hover:bg-violet-800 transition w-full 
        lg: max-w-[170px] rounded-lg flex justify-center items-center
        text-white text-lg h-16'>
        <RiSearch2Line/>
      </button>
    </div>);
};

export default Search;
