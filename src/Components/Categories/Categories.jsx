import React from 'react'
import styles from "./Categories.module.css"
import axios from 'axios'
import { useQuery } from 'react-query'
import { Hourglass } from 'react-loader-spinner'
import { Link } from 'react-router-dom';

const Categories = () => {
  
  function getCategories() {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
   
    
  }

  let {data,isLoading}= useQuery('categories',getCategories)
  console.log(data?.data?.categories);

  return (
    <>
    <div className=' container p-5 min-hi '>
      {isLoading?<Hourglass
       visible={true}
       height="100"
       width="100"
       ariaLabel="hourglass-loading"
       wrapperStyle={{}}
       wrapperClass="position-absolute  start-50 "
       colors={['#C22F2F', '#C22F2F']}
      />: <div className='row '>
        <h2 className='fw-bolder fs-1 bg-op text-white rounded-3 p-2'>Categories:</h2>
       
        {data?.data?.categories.map((cat)=> <div key={cat.idCategory} style={{height:"250px"}} className='col-md-4 my-2 rounded-3 position-relative item overflow-hidden '>
        <Link className=' text-decoration-none' to={'subCategories/'+cat.strCategory}>
          <img  src={cat.strCategoryThumb} className='w-100 h-100 bg-op rounded-3 '/>
          <div style={{height:"250px"}} className='bg-danger-subtle  rounded-3 textMeal opacity-75'>
            <h4 className='mainColor fw-bold text-center '>{cat.strCategory}</h4>
            <p className='text-center text-black'>{cat.strCategoryDescription}</p>
            

          </div>
        </Link>

        </div>)}
        
        </div>}

    </div>
    </>
  )
}

export default Categories