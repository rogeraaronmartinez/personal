const allRecipeButtons = document.getElementById('allRecipeButtons');
const recipeIngredientsAndDirections = document.getElementById('recipeIngredientsAndDirections');

const recipes = {
    recipe1: {
      name: "Beef Stew",
      ingredients: ["3 lbs Chuck Roast", "1 quart chicken stock", "3 tbsp tomato paste", "3 sardines, rinsed"],
      directions: ["Cut roast into 2 steaks and sear on all sides", "Mix stock, tomato paste and sardines in blender", "Preheat oven to 300 degrees F"]
    },

    recipe2: {
      name: "Recipe 2",
      ingredients: ["Ingredient 1", "Ingredient 2"],
      directions: ["Step 1", "Step 2"]
    }
  };


function displayRecipeIngredientsAndDirections(recipe) {
    const recipeName = document.createElement('h2');
    recipeName.textContent = recipe.name;
    
    const ingredientsList = document.createElement('ul');
    recipe.ingredients.forEach(ingredient => {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient;
        ingredientsList.appendChild(listItem);
    });

    const directionsList = document.createElement('ol');
    recipe.directions.forEach(direction => {
        const listItem = document.createElement('li');
        listItem.textContent = direction;
        directionsList.appendChild(listItem);
    });

    recipeIngredientsAndDirections.innerHTML = '';
    recipeIngredientsAndDirections.appendChild(recipeName);
    recipeIngredientsAndDirections.appendChild(document.createTextNode('Ingredients:'));
    recipeIngredientsAndDirections.appendChild(ingredientsList);
    recipeIngredientsAndDirections.appendChild(document.createTextNode('Directions:'));
    recipeIngredientsAndDirections.appendChild(directionsList);
};



for (const recipeKey in recipes) {
    if (recipes.hasOwnProperty(recipeKey)) {
        const recipe = recipes[recipeKey];

        const button = document.createElement('button');
        button.textContent = recipe.name;
        button.addEventListener('click', () => {
            displayRecipeIngredientsAndDirections(recipe);
        });

        allRecipeButtons.appendChild(button);
        }
};