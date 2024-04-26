import React from 'react'
import styles from "./Area.module.css"
import axios from 'axios'
import { useQuery } from 'react-query'
import { Hourglass } from 'react-loader-spinner'
import { Link } from 'react-router-dom';

const Area = () => {
    
  function getArea() {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
   
    
  }

  let {data,isLoading}= useQuery('area',getArea)
  console.log(data?.data?.meals);

  return (
    <>
    <div className=' container p-5 min-hi '>
      {isLoading?<Hourglass
       visible={true}
       height="100"
       width="100"
       ariaLabel="hourglass-loading"
       wrapperStyle={{}}
       wrapperClass="position-absolute  start-50"
       colors={['#C22F2F', '#C22F2F']}
      />: <div className='row '>
        <h2 className='fw-bolder fs-1 bg-op text-white rounded-3 p-2'>Areas:</h2>
        {data?.data?.meals.map((area)=> <div className='col-md-3 '>

        <Link className=' text-decoration-none' to={'subArea/'+area.strArea}>
          <div className='rounded-3 bg-op mx-1 my-2 text-center text-white py-2'>
        <i className="fa-solid fa-house-laptop fa-4x"></i>
        <h4>{area.strArea}</h4>
          </div>
          </Link>
        </div>)}
        </div>}

    </div>
    </>
  )
}

export default Area