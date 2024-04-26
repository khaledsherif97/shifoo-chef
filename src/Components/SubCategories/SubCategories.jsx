import React from 'react'
import styles from "./SubCategories.module.css"
import axios from 'axios'
import { useQuery } from 'react-query'
import { Hourglass } from 'react-loader-spinner'
import { Link, useParams } from 'react-router-dom';

const SubCategories = () => {
  let param=useParams()
  function getSubCategories(param) {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${param}`)
   
    
  }
 
  let {data,isLoading}= useQuery('subCategories',()=>getSubCategories(param.strCategory))
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
        <h2 className='fw-bolder fs-1 bg-op text-white rounded-3 p-2'>Sub Categories:</h2>

        {data?.data?.meals.map((scat)=> <div key={scat.idMeal} style={{height:"250px"}} className='col-md-4 my-2 rounded-3 position-relative item overflow-hidden '>
        <Link className=' text-decoration-none' to={'mealDetails/'+scat.idMeal}>
          <img  src={scat.strMealThumb} className='w-100 h-100 bg-main rounded-3 '/>
          <div style={{height:"250px"}} className='bg-danger-subtle  rounded-3 textMeal opacity-75 position-relative'>
            <h4 className='mainColor fw-bold position-absolute top-50 start-0'>{scat.strMeal}</h4>
          
            

          </div>
          </Link>

        </div>)}
     
        </div>}

    </div>
    </>
  )
}

export default SubCategories