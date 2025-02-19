const recipeListEl = document.getElementById("recipe-list"); //parent element

// appending children to the parent and dispaly rendering to DOM
const displayRecipes = (recipes) => {
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
    recipeIngredientsEl.innerHTML = `<strong>Ingredients: </strong>${recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(", ")}`;

    const recipeLinkEl = document.createElement("a");
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.innerHTML = "View Recipe";

    recipeItemEl.appendChild(recipeImageEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeIngredientsEl);
    recipeItemEl.appendChild(recipeLinkEl);

    recipeListEl.appendChild(recipeItemEl);
  });
};

const getRecipes = async () => {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?number=10&apiKey=b7slQWwmipkKCeIRR9wNJbeamDACksOP`
    );
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();
    return data.recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

const init = async () => {
  const recipes = await getRecipes();
  displayRecipes(recipes);
};
init();
