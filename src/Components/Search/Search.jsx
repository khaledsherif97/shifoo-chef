import React, { useEffect, useState } from 'react'
import styles from "./Search.module.css"
import { Link } from 'react-router-dom'
import { Hourglass } from 'react-loader-spinner'
import axios from 'axios'
import { useQuery } from 'react-query'

const Search = () => {
  async function searchMeals(searchTerm) {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      return response.data.meals;
    } catch (error) {
      console.error("Error fetching meals:", error);
      
      return [];
    }
     finally {
      setIsLoading(false);
    }
  }
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        const fetchedMeals = await searchMeals(searchTerm);
        setMeals(fetchedMeals);
      } else {
        setMeals([]); 
      }
    };

    fetchData();
  }, [searchTerm]);
  return (
    <div className=' container min-hi'>
      
      <form>
   <div className='form-group mb-3'>
            <label htmlFor='search' className="mb-2 bg-main p-2 text-white rounded-3 my-3 fw-bold">Search for meals by name:</label>
            <input  
            type='text' 
            className='form-control border border-2 border-danger' 
            id="search" 
            name="search" 
            value={searchTerm}
            onChange={handleSearchChange} />  
          </div>
   </form>
   {isLoading?<Hourglass
   visible={true}
   height="100"
   width="100"
   ariaLabel="hourglass-loading"
   wrapperStyle={{}}
   wrapperClass="position-absolute  start-50"
   colors={['#C22F2F', '#C22F2F']}
  />:<div>
     {meals.length > 0 && (
        <div className='row '>
        {meals.map((ser)=> <div key={ser.idMeal} style={{height:"250px"}} className='col-md-4 my-2 rounded-3 position-relative item overflow-hidden '>
        <Link className=' text-decoration-none' to={'mealDetails/'+ser.idMeal}>
          <img  src={ser.strMealThumb} className='w-100 h-100 bg-op rounded-3 '/>
          <div style={{height:"250px"}} className='bg-danger-subtle  rounded-3 textMeal opacity-75'>
            <h4 className='mainColor fw-bold text-center '>{ser.strMeal}</h4>
            <p className='text-center text-black'>{ser.strInstructions}</p>
            

          </div>
        </Link>

        </div>)}
        
        </div>
      )}
    </div>}
     
      {meals.length === 0 && searchTerm && <p className=' bg-main text-white fs-2 fw-bold text-center'>No meals found for "{searchTerm}"</p>}
    </div>
  );
}

export default Search