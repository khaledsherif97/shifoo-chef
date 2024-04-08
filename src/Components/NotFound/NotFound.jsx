import React from 'react'
import styles from "./NotFound.module.css"
import Not from "../../Assets/imges/404 Error with a cute animal-cuate.png"

const NotFound = () => {
  return (
   <>
   <div  className=' container  min-hi'>
    <div className='w-50 mx-auto'> 
    <img src={Not} className='w-100'/>
    </div>
   
   </div>
   </>
  )
}

export default NotFound