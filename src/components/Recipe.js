import React from 'react';
import '../styles/recipes.css'

class Recipe extends React.Component{

    render(){
      const {recipes}=this.props;


    return (
      <div className="Recipe">
        <span className='recipe_title'>{recipes.strMeal}</span>
        <div className='recipe_thumbnail'>
           <img src={recipes.strMealThumb} alt='meal_thumbnail'/>
        </div>
        <div className='action_bar'>
            <button className='more_inf_btn'>more..</button>
            <button className='add_Remove_favorite_btn'>add</button>
        </div>
      </div>
    );
  }

}
export default Recipe;
