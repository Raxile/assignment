import React from 'react'
import { NavLink} from 'react-router-dom'
import './NavLinks.css'

const NavLinks = (props) => {


  return (
    
     <ul className='nav-links'>
      <li>
       <NavLink exact="true" to="/" >HOME</NavLink> 
     </li>
     <li>
       <NavLink exact="true" to="/" >2nd page</NavLink> 
     </li>
       
    </ul> 
    
  )
};

export default NavLinks
