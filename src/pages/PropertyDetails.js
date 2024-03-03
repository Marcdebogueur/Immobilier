import React from 'react';

//importer les Donnees
import {housesData} from '../data'

//importer le uses params
import { useParams } from 'react-router-dom';

//importer les icons
import {BiBed, BiBath, BiArea} from 'react-icons/bi'

//importer les liens
import {Link} from 'react-router-dom'



const PropertyDetails = () => {

  //recuperer l id de la maison
  const {id}= useParams();
  // console.log(id)
  // recuperer la maison avec son id
  const house= housesData.find((house)=>{
   if(parseInt(id) === house.id){
    return house;
   }
  
  })
  console.log(house)
  return(
    <section>
      <div >
        <Link to='/' className='bg-violet-700 hover:bg-violet-800 px-3 rounded ml-4 
        text-white text-sm text-center'>back</Link>
      </div>
      <div className='container mx-auto min-h-[800px] mb-14'>
        <div className='flex flex-col lg:flex-row lg:items-center
            lg:justify-between'>
          <div >
            <h2 className='text-2xl font-semibold'>{house.name}</h2>
            <h3 className='text-lg mb4'>{house.address}</h3>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-green-500 text-white rounded-full px-3'>{house.type}</div>
            <div className='bg-violet-500 text-white rounded-full px-3'>{house.country}</div>
          </div>
          <div className='text-3xl font-semibold  text-violet-600'>$ {house.price} </div>
        </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt=''/>
            </div>
            <div className='flex gap-x-6 text-violet-700 mb-6'>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl'/>
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2xl'/>
                <div>{house.bathrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2xl'/>
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className='flex-1 bg-white w-full mb-8 border 
            border-gray-300 rounded-lg px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-gray-300
                rounded-full'>
                <img src={house.agent.image} alt=''/>
              </div>
             <div>
                <div className='font-bold text-lg'>{house.agent.name}</div>
                  <Link to='' className='text-violet-700 text-sm'>
                    view Listing
                  </Link>
             </div>
            </div>
            {/* form */}
            <form className='flex flex-col gap-y-4'>
              <input type='text' className='border border-gray-300 focus:border-violet-700
                outline-none rounded w-full px-4 h-14 text-sm'
                placeholder='Name*'/>
              <input type='text' className='border border-gray-300 focus:border-violet-700
                outline-none rounded w-full px-4 h-14 text-sm'
                placeholder='Email*'/>
              <input type='text' className='border border-gray-300 focus:border-violet-700
                outline-none rounded w-full px-4 h-14 text-sm'
                placeholder='phone*'/>
              <textarea className='border border-gray-300 outline-none focus:border-violet-700 
                resize-none rounded w-full p-4 h-36 text-sm text-gray-400'
                defaultValue='Hello I am interessed in [modern appartement]' >
              </textarea>
              <div className='flex gap-x-2'>
                <button className='bg-violet-700 hover:bg-violet-800 text-white
                  rounded p-4 text-sm w-full transition'>
                    Send message
                </button>
                <button className='border border-violet-700 text-violet 
                  hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm transition w-full'>
                    Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default PropertyDetails;
