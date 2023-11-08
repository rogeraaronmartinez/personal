const allRecipeButtons = document.getElementById('allRecipeButtons');
const recipeIngredientsAndDirections = document.getElementById('recipeIngredientsAndDirections');

const recipes = {
    recipe1: {
      name: "Beef Stew",
      ingredients: ["4 packets powdered unflavored gelatin (1 ounce; 30g)", 
      "3 oil- or salt-packed anchovy fillets, rinsed (or 1 tablespoon Asian fish sauce)", 
      "3 tablespoons tomato paste (2.5 ounces; 75g)", 
      "1 tablespoon (15ml) soy sauce", 
      "1 tablespoon (15ml) Worcestershire sauce", 
      "2 tablespoons (30ml) vegetable oil", 
      "3 pounds (1.25kg) whole boneless beef chuck roast, cut into 3 steaks",
      "Kosher salt and freshly ground black pepper", 
      "4 cups (950ml) homemade or store-bought low-sodium chicken stock", 
      "10 ounces (275g) white button mushroom, quartered",
      "4 medium carrots (10 ounces; 275g), 2 left whole, 2 cut into bite-sized pieces", 
      "8 ounces (225g) frozen or fresh pearl onions (thawed if frozen, peeled if fresh)", 
      "1 large yellow onion, unpeeled, split in half (10 ounces; 275g)",
      "2 small ribs celery (3 ounces; 85g)", 
      "3 medium cloves garlic, unpeeled", 
      "1 cup sherry, dry vermouth, or red wine (8 ounces; 235mL)",
      "2 tablespoons all-purpose flour (about 3/4 ounce; 20g)", 
      "2 bay leaves", 
      "4 sprigs thyme", 
      "1 pound (450g) Yukon gold potatoes, peeled and cubed", 
      "4 ounces (113g) frozen peas"
        ],
      directions: ["Combine stock, tomato paste, anchovies, gelatin, soy sauce, and Worcestershire sauce in a blender and blend on high speed until homogenous. Set aside.", 
      "Adjust oven rack to lowest position and preheat oven to 300°F (150°C). In a large Dutch oven, heat oil over medium-high heat until shimmering. Season beef all over with salt and pepper and add to Dutch oven. Cook, turning occasionally, until beef is well browned on 2 sides, about 10 minutes. Transfer beef to a rimmed baking sheet or large plate and set aside.", 
      "Add mushrooms to Dutch oven and cook, stirring, until liquid is released and mushrooms begin to brown, about 6 minutes, lowering heat as necessary to prevent scorching. Add diced carrots and pearl onions and cook, stirring, until well-browned on all sides. Season to taste with salt and pepper, transfer to a bowl, and set aside.", 
      "Add halved yellow onion to Dutch oven, cut-side-down. Add whole carrots, celery stalks, and garlic. Cook, turning carrots, celery, and garlic occasionally until all the vegetables are well-browned, about 4 minutes.", 
      "Add wine or sherry, scrape up browned bits with a wooden spoon, and cook until reduced by 3/4, about 3 minutes. Add broth mixture and bring to a simmer. Remove from heat.", 
      "Cut seared steaks into 1 1/2- to 2-inch chunks and transfer to a large bowl. Toss with flour. Add beef and any juices accumulated in the tray or plate to the Dutch oven along with bay leaves and thyme sprigs. Stir to combine and return to a simmer over medium heat. Transfer to oven, cover with lid partially open, and cook until beef is starting to become tender, about 1 1/2 hours. Liquid should hold a slow, steady simmer the entire time. Adjust oven temperature if necessary during cooking.", 
      "Remove stew from oven. Using tongs, fish out and discard carrot, celery, thyme, bay leaves, onion, and garlic. Add potatoes and reserved sautéed mushrooms, pearl onions, and carrots to stew, return to oven, and continue to cook, partially covered, until beef, potatoes, and carrots are tender and broth has thickened, 45 minutes to 1 hour.", 
      "Remove stew from oven. If necessary, place over a burner and simmer for up to 15 minutes to reduce to desired consistency. Stir in peas. Season to taste with salt and pepper if necessary. Serve immediately, or refrigerate overnight or for up to 5 days and reheat to serve" 
      ]
    },

    recipe2: {
      name: "Banana Bread",
      ingredients: ["4 ripe mashed bananas",
      "2 eggs",
      "1/3 cup vegetable oil",
      "1 tsp vanilla extract",
      "1 1/4 cups white sugar",
      "1/2 cup dark brown sugar",
      "1 tsp cinnamon",
      "1 3/4 cups flour",
      "1 tsp baking soda", "1/2 tsp salt"],
      directions: ["Preheat oven to 325 F", 
      "Spray pans: 4 small loaf pans or 1 regular loaf pan", 
      "Blend together bananas, eggs, oil, and vanilla with a mixer at low speed", 
      "Add in sugars and fully incorporate", 
      "Add cinnamon, flour, baking soda and salt. Mix until just combined", 
      "Pour into prepared pan(s) and bake until toothpick inserted comes out clean", 
      "- Small pans: about 40 minutes", 
      "- Regular loaf pan: about 1 hour and 10 minutes. Start checking at 50 minutes"]
    }
  };


function displayRecipe(recipe) {
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
            displayRecipe(recipe);
        });

        allRecipeButtons.appendChild(button);
        }
};