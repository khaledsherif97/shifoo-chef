import React from 'react'
import styles from "./Game.module.css"
import { Fade, Text } from 'animation-react'
import axios from 'axios'
import { useQuery } from 'react-query';
import { Hourglass } from 'react-loader-spinner';

const Game = () => {

  function getGameMeal() {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
   
    
  }

  let {data,isLoading,refetch}= useQuery('meals',getGameMeal)


  console.log(data?.data?.meals);
  return (
    <>
     <div className=' text-center fs-3 fw-bold bg-main text-white rounded-3 my-2 mx-5 bg-op'>
      <Text 
        value="play with us"
        type="drop"
        delay={1}
        duration={1}
        isRepeat={true}
        option={""}
      /></div>
      
      <div className="row">
      <div className=''>
  {isLoading?<Hourglass
   visible={true}
   height="100"
   width="100"
   ariaLabel="hourglass-loading"
   wrapperStyle={{}}
   wrapperClass="position-absolute  start-50"
   colors={['#C22F2F', '#C22F2F']}
  />: <div className=' '>
    <h2 className='fw-bold fs-4 bg-op text-white rounded-3 ps-1 mx-4'> <Text 
        value="Meal Details :"
        type="drop"
        delay={1}
        duration={1}
        isRepeat={true}
        option={""}
      /></h2>
   
    {data?.data?.meals.map((meal)=> <div className='row px-3'>
    <div className="col-md-4">
    <Fade 
        type="left"
        translate="200px"
        delay={1}
        duration={1}
        isRepeat={true}
      > 
      
      <img src={meal.strMealThumb} className='w-100 rounded-2' />
      <h3 className=' fw-bold w-100 bg-op text-white my-2 rounded-2 fs-5 p-1  '>{meal.strMeal}</h3>
      
      </Fade>
      </div>
      <div className="col-md-8 rounded-2 text-white py-2 bg-op">
      <Fade 
        type="right"
        translate="200px"
        delay={1}
        duration={1}
        isRepeat={true}
      > 
      
        <h3>Instructions :</h3>
        <p>{meal.strInstructions.split(" ").slice(0,20).join(" ")}</p>
        <p><span className='fw-bold'>Area : </span>{meal.strArea}</p>
        <p><span className='fw-bold'>Category : </span>{meal.strCategory}</p>
        <a target='_blank' href={meal.strSource} className='btn btn-success fs-6 fw-smibold me-3'>source</a>
        <a target='_blank' href={meal.strYoutube} className='btn btn-info fs-6 fw-smibold'>Youtube</a>

      
      </Fade>
      </div>
    </div>)}
   
    </div>}

</div>
      </div>

      <div className='w-25  my-2 mx-auto'><button onClick={refetch} className='btn btn-danger fs-4 fw-smibold bg-main'>Click Here </button></div>
    </>
  )
}

export default Game