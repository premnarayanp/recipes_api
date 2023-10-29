const API_ROOT = 'https://www.themealdb.com/api/json/v1/1/search.php?';

export const API_URLS = {
  getRecipesByFirstLetter: (firstLetter) => `${API_ROOT}f=${firstLetter}`,
  getRecipesByName: (name) => `${API_ROOT}s=${name}`,
};

//export const LOCAL_STORAGE_TOKEN_KEY = '__myTokens_token__';
