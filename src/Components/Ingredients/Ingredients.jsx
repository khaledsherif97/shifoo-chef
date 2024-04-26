import React from 'react'
import styles from "./Ingredients.module.css"
import axios from 'axios'
import { useQuery } from 'react-query'
import { Hourglass } from 'react-loader-spinner'
import { Link } from 'react-router-dom';

const Ingredients = () => {
  function getIngredients() {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
   
    
  }

  let {data,isLoading}= useQuery('ingredients',getIngredients)
  console.log(data?.data?.meals);
  return (
    <>
    <div className=' container p-5  min-hi'>
      {isLoading?<Hourglass
       visible={true}
       height="100"
       width="100"
       ariaLabel="hourglass-loading"
       wrapperStyle={{}}
       wrapperClass="position-absolute  start-50"
       colors={['#C22F2F', '#C22F2F']}
      />: <div className='row '>
        <h2 className='fw-bolder fs-1 bg-main text-white rounded-3 p-2'>Ingredients:</h2>
        {data?.data?.meals.map((ing)=> <div key={ing.idIngredient} className='col-md-4 '>

        <Link className=' text-decoration-none' to={'/subIngredient/'+ing.strIngredient}>
          <div className='rounded-3 bg-main mx-1 my-2 text-center text-white py-2'>
          <i className="fa-solid fa-drumstick-bite pe-2 display-2"></i>
          <h4>{ing.strIngredient}</h4>
          
          </div>
          </Link>
        </div>)}
        </div>}

    </div>
    </>
  )
}

export default Ingredients