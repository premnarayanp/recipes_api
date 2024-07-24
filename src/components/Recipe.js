import React from 'react';
import '../styles/recipes.css'

class Recipe extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          isInMyFavorite:false
        };
      }

    render(){
      const {recipes}=this.props;

    //   function handleMoreInfo(){
          
    //   }

    
   function checkMyFavorite(){
        
    }

    function handleAddFavoriteClick(){
           
    }

    function handleRemoveFavoriteClick(){
          
    }

    return (
      <div className="Recipe">
        <span className='recipe_title'>{recipes.strMeal}</span>
        <div className='recipe_thumbnail'>
           <img src={recipes.strMealThumb} alt='meal_thumbnail'/>
        </div>
        <div className='action_bar'>
            <button className='more_inf_btn' >more..</button>
           {this.state.isInMyFavorite ?<button className='add_favorite_btn'  onClick={this.handleAddFavoriteClick}>Add Favorite</button>
           :<button className='remove_favorite_btn'  onClick={this.handleRemoveFavoriteClick}>Remove Favorite</button>
           }
        </div>
      </div>
    );
  }

}
export default Recipe;
