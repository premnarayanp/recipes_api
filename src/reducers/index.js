// import {combineReducers} from 'redux';


import {
   ADD_RECIPES_LIST,
   ADD_FAVORITE_LIST,
   ADD_RECIPES_TO_FAVORITE,
   REMOVE_RECIPES_TO_FAVORITE
  } from '../actions/index';
  
  
  const initialRecipesState = {
    recipesList:[],
    favoriteRecipes:[]
  };
  
  export default function recipesReducer(state = initialRecipesState, action) {
  
    switch (action.type) { 
      case ADD_RECIPES_LIST:
        return {
          ...state,
          recipesList: action.recipesList,
        }; 

        case ADD_FAVORITE_LIST:
            return {
              ...state,
              favoriteRecipes: action.localRecipesList,
            }; 
  
  
      case ADD_RECIPES_TO_FAVORITE:
        return {
          ...state,
          favoriteRecipes: [action.recipes, ...state.favoriteRecipes],
        };  
  
      default:
        return state;
    }
  }

  