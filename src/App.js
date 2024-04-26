import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import LayOut from './Components/LayOut/LayOut';
import Search from './Components/Search/Search';
import Categories from './Components/Categories/Categories';
import Area from './Components/Area/Area';
import Ingredients from './Components/Ingredients/Ingredients';
import Home from './Components/Home/Home';
import SubCategories from './Components/SubCategories/SubCategories';
import SubArea from './Components/SubArea/SubArea';
import SubIngredient from './Components/SubIngredient/SubIngredient';
import MealDetails from './Components/MealDetails/MealDetails';

function App() {

  let routes=createBrowserRouter([
    { path:"shifoo-chef/",element:<LayOut />,children:[
      {path:"",element:<Home />},
      {path:"/search",element:<Search />},
      {path:"/categories",element:<Categories />},
      {path:"/area",element:<Area />},
      {path:"/ingredients",element:<Ingredients />},
      {path:"/subCategories/:strCategory",element:<SubCategories/>},
      {path:"/subArea/:strArea",element:<SubArea/>},
      {path:"/subIngredient/:strIngredient",element:<SubIngredient/>},
      {path:"/mealDetails/:idMeal",element:<MealDetails/>},
     
  
      {path:"*",element:<NotFound />},
  
    ]}
  ])
  
  return (
   <>
    <RouterProvider router={routes}/>
   </>
  );
}

export default App;
