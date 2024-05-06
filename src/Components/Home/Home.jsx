import React from 'react'
import styles from "./Home.module.css"
import axios from 'axios'
import { useQuery } from 'react-query'
import { Hourglass } from 'react-loader-spinner'
import Categories from './../Categories/Categories';
import img1 from "../../Assets/imges/1.jpeg"
import img2 from "../../Assets/imges/2.jpg"
import img3 from "../../Assets/imges/3.jpg"
import { Fade, Text } from 'animation-react'
import Game from '../Game/Game'

const Home = () => {

  function getMeals() {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
   
    
  }

  let {data,isLoading}= useQuery('meals',getMeals)
  console.log(data?.data?.meals);


  return (
    <>
    <div className=' container my-5 min-hi'>
    <div className="row">
      <div className="col-md-4 p-0">
        <img src={img1} style={{height:"220px"}} className='w-100 rounded-3'/>
        <img src={img2} style={{height:"220px"}} className='w-100 rounded-3'/>
      </div>
      <div className="col-md-8 p-0 border border-4 border-danger rounded-4">
       
       <Game/>
     
     
      </div>
    </div>
    </div>
    
    <Categories/>
    </>
  )
}

export default Home