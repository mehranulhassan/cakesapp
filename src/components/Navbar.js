import React from 'react';
import '../App.css'
import logo from '../images/og.jpg';


const Navbar = () => {
  return (
    <div className='bg-img'>
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className='pages'>

      <ul>

        <li> <a href='/Home'> Home</a>   </li>
        <li> <a href='/Services'> Services</a>   </li>
        <li> <a href='/Team'> Team</a>   </li>
        <li> <a href='/Cakes'> Cakes</a>   </li>
        <li> <a href='/Contactus'> Contactus</a>   </li>
       





      </ul>



      </div>


      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-button">
        
        </button>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
