import addtocart from '../assets/icons8-add-to-cart-48.png'
import usericon from "../assets/avatar-3.jpg"
import React from 'react'
import { Link } from 'react-router-dom'

 const Navbar = () => {
  return (
    <div className='header'>
      <div className='nav'>
      <Link to='/'>Home</Link>
      <Link to='#'>Shop</Link>
      <Link to='#'>Featured</Link>
      <Link to='#'>Recomended</Link>
      </div>
      <div className="header_sub_section">
        <div className="searchbar flex ">   <input
        type="text"
        placeholder="Search name movie or select options"
      />
      <button type="submit"  >
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="#999"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button></div>
        <div className="addtocart"><Link to={'/addtocart'}><img src={addtocart} alt="" />
         <span className=' relative top-[-50px] left-10'>{1}</span>
        </Link> </div>
        <div className="userprofile"><img src={usericon}alt="" /></div>
      </div>
    </div>
  )
}


export default Navbar