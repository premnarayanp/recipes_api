 // action types
export const ADD_RECIPES_LIST='ADD_RECIPES_LIST'
export const ADD_FAVORITE_LIST='ADD_FAVORITE_LIST'
export const ADD_RECIPES_TO_FAVORITE='ADD_RECIPES_TO_FAVORITE'
export const REMOVE_RECIPES_TO_FAVORITE='REMOVE_RECIPES_TO_FAVORITE'
 
//action creator function
export function addRecipesList(recipesList){
return{
    type:ADD_RECIPES_LIST,
    recipesList
}
}

export function addFavoriteList(localRecipesList){
    return{
        type:ADD_FAVORITE_LIST,
        localRecipesList
    }
    }

export function addRecipesToFavorite(recipes){
return{
    type:ADD_RECIPES_TO_FAVORITE,
    recipes
}
}

export function RemoveRecipesToFavorite(recipes){
return{
    type:REMOVE_RECIPES_TO_FAVORITE,
    recipes
}
}


