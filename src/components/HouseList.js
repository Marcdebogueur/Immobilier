import React, {useContext} from 'react';

//importer le context
import { HouseContext } from './HouseContext';

//importer les composants
import House from './House';

//importer les liens
 import {Link} from 'react-router-dom'

 //importer les icons
 import {ImSpinner2} from 'react-icons/im'

const HouseList = () => {
  const {houses, loading}= useContext(HouseContext)

  // si on est entrain de charger
  if(loading){
    return(<ImSpinner2 className='mx-auto
      animate-spin text-violet-700 text-4xl mt-[200px]' />)
  }
  if(houses.length < 1){
   
    return(
      <div className='text-center text-3xl
        text-gray-400 mt-48'>Sorry, nothing found</div>
    )
  }
  
  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house, index)=>{
            return(
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house}/>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
};

export default HouseList;
