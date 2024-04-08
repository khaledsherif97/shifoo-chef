import React from 'react'
import styles from "./NavBar.module.css"
import { Link } from 'react-router-dom'
import logo from '../../Assets/imges/Shefoo chef.png'

const NavBar = () => {
  return (<>
    <nav className="navbar navbar-expand-lg bg-main ">
     <div className="container">
     <Link className="navbar-brand" to={'/'}>
       <img height={'100px'} className='rounded-circle' src={logo} />
       <span className='ps-2 fs-3 fw-bold text-white' >Shifoo Chef</span>
   
       </Link>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon" />
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           <li className="nav-item">
           <Link className="nav-link text-white fw-semibold fs-6 pe-4 " aria-current="page" to={'/'}><i className="fa-solid fa-house pe-2"></i> Home</Link>
           </li>
           <li className="nav-item">
           <Link className="nav-link text-white fw-semibold fs-6 pe-4 " aria-current="page" to={'/categories'}><i className="fa-solid fa-utensils pe-2"></i> Categories</Link>
           </li>
           <li className="nav-item">
           <Link className="nav-link text-white fw-semibold fs-6 pe-4 " aria-current="page" to={'/area'}><i className="fa-solid fa-clone pe-2"></i>Area</Link>
           </li>
           <li className="nav-item">
           <Link className="nav-link text-white fw-semibold fs-6 pe-4 " aria-current="page" to={'/ingredients'}><i className="fa-solid fa-drumstick-bite pe-2"></i>Ingredients</Link>
           </li>
           <li className="nav-item">
           <Link className="nav-link text-white fw-semibold fs-6 pe-4 " aria-current="page" to={'/search'}><i className="fa-solid fa-magnifying-glass pe-2"></i> Search</Link>
           </li>
          
         </ul>
       </div>
     </div>
   </nav>
   
     </>)
}

export default NavBar