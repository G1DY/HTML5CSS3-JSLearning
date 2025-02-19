const recipeListEl = document.getElementById("recipe-list");

const getRecipes = async () => {
  const res = await fetch();
  const data = await Response.data();
  return data.recipes;
};

const init = async () => {
  const recipes = await getRecipes();
};
init();
