const recipeListEl = document.getElementById("recipe-list"); //parent element

// appending children to the parent and dispaly rendering to DOM
const dispayRecipes = (recipes) => {
  recipeListEl.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-list");

    const recipeImageEl = document.createElement("img");
    recipeImageEl.src = recipe.image;
    recipeImageEl.alt = "recipe-item";

    const recipeTitleEl = document.createElement("h2");
    recipeTitleEl.innerHTML = recipe.title;

    const recipeIngredientsEl = document.createElement("p");
    recipeIngredientsEl.innerHTML = `<strong>Ingredients: </strong>${recipe.extendIngredients.map(
      (ingredient) => ingredient.original.join(", ")
    )}`;

    const recipeLinkEl = document.createElement("a");
    recipeLinkEl.href = recipe.srcUrl;
    recipeLinkEl.innerHTML = "View Recipe";

    recipeListEl.appendChild(recipeImageEl);
    recipeListEl.appendChild(recipeTitleEl);
    recipeListEl.appendChild(recipeItemEl);
  });
};

const getRecipes = async () => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${"b7slQWwmipkKCeIRR9wNJbeamDACksOP"}`
  );
  const data = await Response.data();
  return data.recipes;
};

const init = async () => {
  const recipes = await getRecipes();
  dispayRecipes(recipes);
};
init();
