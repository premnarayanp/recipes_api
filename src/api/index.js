import { API_URLS } from "../utils";

//custom fetch methods for all api
const customFetch = async (url) => {

  try {
      const response = await fetch(url);
      // console.log("json", response);
      const jsonData = await response.json();
      // console.log("json", jsonData);
      const recipes = jsonData.meals;
      //console.log(recipes);

    if (recipes) {
      return {
        recipes,
        success: true,
        message:"recipes found"
      };
    }

    throw new Error("Not Found");
  } catch (error) {
    console.error('error');
    return {
      message: error.message,
      success: false,
      recipes:null
    };
  }
};

export const getRecipesByFirstLetter = (firstLetter) => {
  //const searchURL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  return customFetch(API_URLS.getRecipesByFirstLetter(firstLetter), {
    method: 'GET',
  });
};

export const getRecipesByName = (name) => {
  //const searchURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  return customFetch(API_URLS.getRecipesByName(name), {
    method: 'GET',
  });
};
