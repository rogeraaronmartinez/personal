const allRecipeButtons = document.getElementById('allRecipeButtons');
const recipeIngredientsAndDirections = document.getElementById('recipeIngredientsAndDirections');

/* Sample Recipe Template
    recipe3: {
        name: "",
        ingredients: ["", ""],
        directions: ["", ""],
        meal: ["Breakfast", "Lunch", "Dinner", "Appetizer", "Drink", "Dessert", "Side", "Snack"],
        prepTime: ["15 minutes", "30 minutes", "1 hour", "2+ hours"],
        cookTime: ["< 1 hour", "1 hour", "2+ hours"],
        occasion: ["Any", "Holidays", "Weeknight"],
        notes: "",
        contributor: "",
        link: ""
    }
*/


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
      ],
      meal: ["Dinner"],
      prepTime: ["1 hour"],
      cookTime: ["2+ hours"],
      occasion: ["Any"],
      notes: "",
      contributor: "Roger Martinez",
      link: "https://www.seriouseats.com/all-american-beef-stew-recipe"
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
      "- Regular loaf pan: about 1 hour and 10 minutes. Start checking at 50 minutes"],
      meal: ["Breakfast", "Appetizer", "Dessert", "Side", "Snack"],
      prepTime: ["15 minutes"],
      cookTime: ["< 1 hour"],
      occasion: ["Any", "Holidays", "Weeknight"],
      notes: "",
      contributor: "Roger Martinez",
      link: ""
    },

    recipe3: {
        name: "Spaghetti with Carbonara Sauce",
        ingredients: ["Kosher salt",
        "1 pound (450g) dried spaghetti",
        "1/2 cup (~3 ounces) diced guanciale, pancetta, or bacon",
        "3 tbsp extra-virgin olive oil, divided",
        "2 whole large eggs plus 6 yolks",
        "1/4 cup grated Pecorino Romano",
        "1/4 cup grated Parmigiano-Reggiano",
        "1 tsp black pepper",
        ],
        directions: [
        "Bring a pot of salted water to a boil. Add pasta and cook, stirring, until al dente",
        "Meanwhile, combine pancetta/bacon with 2 tbsp olive oil in a large skillet and cook stirring frequently until fat has rendered and meat is crisp, about 7 minutes",
        "In a large, metal oven-safe mixing bowl, whisk together eggs/yolks, Romano, Reggiano and pepper",
        "Using tongs and/or strainer, transfer pasta to skillet with meat+fat; save pasta water",
        "Add 1 tbsp olive oil to pasta and stir; let cool slightly",
        "Scrape pasta/meat+fat into egg mixture and add 1/2 cup pasta water; stir well",
        "Set mixing bowl of pasta over hot pasta water to gently heat; stir well until sauce thickens",
        "Remove from heat, and serve, add salt and pepper and extra cheese as needed"],
        meal: ["Dinner"],
        prepTime: ["15 minutes"],
        cookTime: ["< 1 hour"],
        occasion: ["Any", "Weeknight"],
        notes: "Remember not to oversalt your pasta water; you'll add some of it to your sauce, which will already have salty ingredients. Feel free to substitute another dried pasta, such as penne, if desired. Guanciale, cured pork jowl, is generally considered the most authentic choice here; it's fattier than pancetta or bacon and often more heavily spiced, creating a pasta with pronounced spice notes and an extra-unctuous texture. Pancetta delivers the cleanest porky flavor, while American bacon, though less traditional, adds a hit of pleasant smoke. Use whichever you prefer.",
        contributor: "Roger Martinez",
        link: "https://www.seriouseats.com/pasta-carbonara-sauce-recipe"
    },

    recipe4: {
        name: "Chicago Thin-Crust Pizza",
        ingredients: [
            "300 g flour", 
            "kosher salt - 2.5% of weight of flour (7.5 g)",
            "sugar - 2.5% weight of flour (7.5 g)", 
            "instant yeast - 0.5% weight of flour (1.5 g) ",
            "olive/corn/vegetable oil - 10% weight of flour (30 g)", 
            "water - 50% weight of flour (150 g)",
            "", 
            "",
            "", 
            "",
            ""],
        directions: [
            "Combine the flour, salt, sugar, and yeast in a stand mixer. Stir together, then add the oil and water. Mix together by hand or with the dough hook until a shaggy ball is formed. Cover the bowl loosely and let it rest for 10 minutes. Knead by hand or with a dough hook until the dough is smooth and satiny, about 10 minutes.",
            "Divide the dough into two equal balls and coat them lightly with oil. Transfer to quart-sized lidded deli containers or gallon-sized zipperlock bags. Refrigerate for 3 to 5 days.",
            "The day before baking, take a ball of dough out of the fridge and coat it lightly in semolina flour. Roll with a rolling pin to a 14-inch circle. Dust with more semolina as necessary to keep it from sticking. After rolling both balls out, transfer them to a parchment-lined cutting board or counter and let them rest, uncovered overnight.", 
            "To bake Pizza: You'll need about 2 cups of pizza sauce (your own or store-bought), a pound of low-moisture mozzarella cheese (full fat grate-it-yourself if you can, part-skim pre-grated if you can't), and toppings as desired. I usually use a half pound of Italian sausage applied raw in little bits all over the pie, a sprinkle of dried Italian seasoning and romano cheese, and some drained hot Chicago-style giardiniera.",
            "Preheat a baking stone or steel to 500°F. Transfer one disk of dough to a pizza peel with the dryer side (the side that was facing up) down. Top with sauce and cheese to the edges. Add toppings. Transfer to the stone and bake until it's crispy and browned, 10 to 12 minutes. Transfer to a cutting board, let it rest so you don't burn your mouth, cut into squares, and serve (or eat it all yourself)."
            ],
        meal: ["Dinner"],
        prepTime: ["30 minutes"],
        cookTime: ["< 1 hour", "1 hour", "2+ hours"],
        occasion: ["Any"],
        notes: "Makes 2, 14-inch pizzas. Need a pizza stone or cast iron skillet. Kim's Uncle and Nick and Vito's have great pizza.",
        contributor: "Roger Martinez",
        link: "https://www.youtube.com/watch?v=5mIbyUgNOlo"
    },

    recipe5: {
        name: "Chicago Style Giardiniera",
        ingredients: [
            "1 cup serrano peppers, small dice",
            "1 cup cauliflower, small dice",
            "1/2 cup red bell pepper, small dice",
            "1/2 cup carrot, small dice",
            "1/2 cup celery, small dice",
            "1/2 cup kosher sea salt",
            "1/2 cup sport peppers, small dice",
            "1/2 cup green olives, small dice",
            "4 cloves garlic, minced",
            "1 tbsp red pepper flakes",
            "1 1/2 tsp dried oregano",
            "1/2 tsp celery seeds",
            "1 cup white vinegar",
            "3/4 cup extra virgin olive oil",
            "1/4 cup chile oil (optional)",
            ""],
        directions: [
            "To make the Chicago Giardiniera, combine the Serranos, cauliflower, red bell, carrot and celery in a small container. Add the 1/2 cup salt and toss to coat. Cover and let brine in the refrigerator overnight.",
            "The next day, rinse the veggies and discard any collected water. Place the veggies in a mixing bowl and add the sport peppers, green olives, garlic, red pepper flakes, oregano and celery seeds. Toss well.",
            "Transfer to a quart sized mason jar. Add the vinegar and oils. Store in the refrigerator. Best after 2-3 days of sitting.",
        ],
        meal: ["Topping"],
        prepTime: ["30 minutes"],
        cookTime: ["< 1 hour"],
        occasion: ["Any"],
        notes: "This pickled veggie relish is perfect on Italian beef sandwiches, brats, eggs, and pasta salad to name a few.",
        contributor: "Roger Martinez",
        link: "https://www.atbbq.com/blogs/recipes/how-to-make-giardiniera"
    },

    recipe6: {
        name: "Smoked BBQ Ribs",
        ingredients: [
            "1 full rack ribs pork or beef",
            "mustard",
            "dry rub or just salt/pepper",
            "apple vinegar or apple juice",
            "butter",
            "honey",
            "brown sugar",
            "bbq sauce"
        ],
        directions: [
            "Trim ribs of extra fat or sharp edges and bones sticking out",
            "Remove membrane from back if desired",
            "Spread light coat of mustard all over both sides",
            "Sprinkle entire rack with dry rub, or just use salt/pepper ~1/2 and 1/2 of each",
            "Put on smoker and cook at 250 F for roughly 2-3 hours",
            "Spray lightly with vinegar or juice to keep moist while smoking",
            "Remove from heat, wrap in foil, combined with butter, sugar, and honey, top side down",
            "Cook either in smoker or oven at 300 F until internal meat temp reaches 190 degrees F ",
            "Unwrap foil but let ribs sit in the foil juices, just top uncovered",
            "Spread BBQ sauce over the top and cook for another 20 minutes",
            "Remove from heat, let sit for 20 minutes, then cut and serve"],
        meal: ["Dinner"],
        prepTime: ["15 minutes"],
        cookTime: ["2+ hours"],
        occasion: ["Any"],
        notes: "",
        contributor: "Roger Martinez",
        link: ""
    },

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