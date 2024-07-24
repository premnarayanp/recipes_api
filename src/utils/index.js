export * from './constants';
 const favoritesKey = '_MYFavoritesKey_';

//add in my favorites
 export function addInFavorites(mealId, mealName) {
  let favoritesList = getFavoritesFromLocal(favoritesKey);
  let mealKey = 'meal' + mealId;
  
  favoritesList[mealKey] = mealName;
  // console.log("after fav", favoritesList);
  storeFavoritesInLocal(favoritesKey, favoritesList);
}

//remove in my favorites
export function removeFavorites(mealId, mealName) {
  let favoritesList = getFavoritesFromLocal(favoritesKey);
  let mealKey = 'meal' + mealId;
  // favoritesList[mealKey] = false;
  favoritesList[mealKey] = mealName;
  delete favoritesList[mealKey];
  storeFavoritesInLocal(favoritesKey, favoritesList);
}

// add meals in  favorite,s localStorage in key value pair
function storeFavoritesInLocal(key, favoritesList) {
  let favoritesListStr = JSON.stringify(favoritesList);
  localStorage.setItem(key, favoritesListStr);
  console.log(favoritesList);
  //console.log("meals Stored successfully");
}

// get favorites from localStorage
function getFavoritesFromLocal(key) {
  let favoritesListStr = localStorage.getItem(key);
  if (favoritesListStr == null) {
      return {};
  }
  let favoritesList = JSON.parse(favoritesListStr);
  //console.log("Meals get successfully");
  return favoritesList;
}

