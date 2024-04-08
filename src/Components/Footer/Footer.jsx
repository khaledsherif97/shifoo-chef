import React from 'react'
import styles from "./Footer.module.css"
import logo from "../../Assets/imges/Shefoo chef.png"

const Footer = () => {
  return (
    <div className='bg-main text-center text-white p-3 mb-0'>
      <div className="row">
        <div className="col-md-6">
        <p><i className="fa-solid fa-envelope px-2 fs-4 text-white"></i> <span className=' fs-5 fw-bold'>Mail :</span> Shifoo-chef-2024@gmail.com</p>
        </div>
        <div className="col-md-6">
        <p><i className="fa-solid fa-phone px-2 fs-4 text-white "></i> <span className=' fs-5 fw-bold'>Hot Line :</span>123456</p>
        </div>
      </div>
      <img src={logo} style={{height:"75px" ,width:"75px"}} className=' rounded-3'/>
      <p className=' text-center'>@ made by Khaled sherif</p>

    </div>
  )
}

export default Footer