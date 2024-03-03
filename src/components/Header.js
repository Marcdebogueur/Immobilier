import React from 'react';
//import Link
import { Link } from 'react-router-dom';
//import logo
import Logo from '../assets/img/logo.svg';


const Header = () => {
  return <header className='py-6 mb-12 border-violet-800 border-b shadow-sm'>
   <div className='container mx-auto flex justify-between items-center'>
    {/* logo */}
    <Link to='/'>
      <img src={Logo} alt=''/> 
    </Link>
    {/* boutons */}
    <div className='flex items-center gap-6'>
      <Link className='hover:text-violet-900 transition' to=''>Log In</Link>
      <Link className='bg-violet-700 transition rounded-lg text-white px-4
        py-3 hover:bg-violet-800' 
        to=''
      >
        Sing Up
      </Link>
    </div>
   </div> 
  </header>
    
  
};

export default Header;
