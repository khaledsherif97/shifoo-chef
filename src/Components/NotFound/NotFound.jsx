import React from 'react'
import styles from "./NotFound.module.css"
import Not from "../../Assets/imges/404 Error with a cute animal-cuate.png"

const NotFound = () => {
  return (
   <>
   <div style={{height:"500px"}} className=' container position-relative'>
   <img style={{height:"500px", width:"700px" , position: "absolute" ,left: "200px"}} src={Not} className=''/>
   </div>
   </>
  )
}

export default NotFound