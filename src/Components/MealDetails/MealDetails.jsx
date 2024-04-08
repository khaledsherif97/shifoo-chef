import React from 'react'
import styles from "./MealDetails.module.css"
import axios from 'axios'
import { useQuery } from 'react-query'
import { Hourglass } from 'react-loader-spinner'
import { Link, useParams } from 'react-router-dom';

const MealDetails = () => {
  let param=useParams()
  function getMeal(param) {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param}`)
   
    
  }
 
  let {data,isLoading}= useQuery('meal',()=>getMeal(param.idMeal))
  console.log(data?.data?.meals);
  return (<>
  <div className=' container p-5  min-hi'>
  {isLoading?<Hourglass
   visible={true}
   height="100"
   width="100"
   ariaLabel="hourglass-loading"
   wrapperStyle={{}}
   wrapperClass="position-absolute  start-50"
   colors={['#C22F2F', '#C22F2F']}
  />: <div className=' '>
    <h2 className='fw-bolder fs-1 bg-op text-white rounded-3 p-2'>Meal Details:</h2>

    {data?.data?.meals.map((meal)=> <div className='row my-2'>
      <div className="col-md-4 my-2">
      <img src={meal.strMealThumb} className='w-100 rounded-2' />
      <h3 className=' fw-bolder w-100 bg-op text-white my-2 rounded-2 ps-2 py-2'>{meal.strMeal}</h3>
      </div>
      <div className="col-md-8 my-2  rounded-2 text-white py-2 bg-op">
        <h3>Instructions :</h3>
        <p>{meal.strInstructions}</p>
        <p><span className='fw-bold'>Area : </span>{meal.strArea}</p>
        <p><span className='fw-bold'>Category : </span>{meal.strCategory}</p>
        <a target='_blank' href={meal.strSource} className='btn btn-success fs-5 fw-bold me-3'>source</a>
        <a target='_blank' href={meal.strYoutube} className='btn btn-info fs-5 fw-bold'>Youtube</a>

      </div>

    </div>)}
 
    </div>}

</div>


  </>)
}

export default MealDetails