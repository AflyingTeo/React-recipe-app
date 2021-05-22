import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Recipe from './Components/Recipe/Recipe';

function App() {

  const APP_ID= '8634c5e4';
  const APP_KEY= '0390722093b24c9c8ad1ee0af10b32e4';
  const [recipes, setRecipes] = useState([]);
  useEffect( () => {
    // console.log('Effect has been run')
    getRecipes();
  },[]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">

        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
          key= {recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image= {recipe.recipe.image}
        /> 
      ))}
    </div>
  );
}

export default App;
