import React from 'react'
import styles from "./SubIngredient.module.css"
import axios from 'axios'
import { useQuery } from 'react-query'
import { Hourglass } from 'react-loader-spinner'
import { Link, useParams } from 'react-router-dom';

const SubIngredient = () => {
  let param=useParams()
  function getSubIng(param) {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${param}`)
   
    
  }
 
  let {data,isLoading}= useQuery('subIng',()=>getSubIng(param.strIngredient))
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
        <h2 className='fw-bolder fs-1 bg-main text-white rounded-3 p-2'>Sub Ingredient:</h2>

        {data?.data?.meals.map((sing)=> <div key={sing.idMeal} style={{height:"250px"}} className='col-md-4 my-2 rounded-3 position-relative item overflow-hidden '>
        <Link className=' text-decoration-none' to={'/mealDetails/'+sing.idMeal}>
          <img  src={sing.strMealThumb} className='w-100 h-100 bg-main rounded-3 '/>
          <div style={{height:"250px"}} className='bg-danger-subtle  rounded-3 textMeal opacity-75 position-relative'>
            <h4 className='mainColor fw-bold position-absolute top-50 start-0'>{sing.strMeal}</h4>
          
            

          </div>
          </Link>
          

        </div>)}
     
        </div>}

    </div>
    </>
  )
}

export default SubIngredient