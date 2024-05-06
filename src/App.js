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
      {index:true,element:<Home />},
      {path:"/shifoo-chef/search",element:<Search />},
      {path:"/shifoo-chef/categories",element:<Categories />},
      {path:"/shifoo-chef/area",element:<Area />},
      {path:"/shifoo-chef/ingredients",element:<Ingredients />},
      {path:"/shifoo-chef/subCategories/:strCategory",element:<SubCategories/>},
      {path:"/shifoo-chef/subArea/:strArea",element:<SubArea/>},
      {path:"/shifoo-chef/subIngredient/:strIngredient",element:<SubIngredient/>},
      {path:"/shifoo-chef/mealDetails/:idMeal",element:<MealDetails/>},
     
  
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
