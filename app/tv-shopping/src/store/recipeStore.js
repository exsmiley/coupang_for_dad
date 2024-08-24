import create from 'zustand';
const initialData = [
  {
    "id": 665769,
    "title": "Zucchini Pizza Boats",
    "image": "https://img.spoonacular.com/recipes/665769-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 662264,
    "title": "summer vegetable pizza",
    "image": "https://img.spoonacular.com/recipes/662264-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 642371,
    "title": "Elk Italian Sausage Pizza With Ricotta Cheese, Sautéd Mushrooms and Onion",
    "image": "https://img.spoonacular.com/recipes/642371-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 651624,
    "title": "Mexican Fiesta Salad Pizza",
    "image": "https://img.spoonacular.com/recipes/651624-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 632771,
    "title": "Artichoke, Kalamata, & Sun-Dried Tomato Mini-Pizzas With Garlic and Rosemary",
    "image": "https://img.spoonacular.com/recipes/632771-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 680975,
    "title": "BLT Pizza",
    "image": "https://img.spoonacular.com/recipes/680975-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 663553,
    "title": "Tomato and Bacon Pizza With Rice Crust",
    "image": "https://img.spoonacular.com/recipes/663553-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 652592,
    "title": "Multigrain Tandoori Pizza With Paneer Tikka",
    "image": "https://img.spoonacular.com/recipes/652592-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 715495,
    "title": "Turkey Tomato Cheese Pizza",
    "image": "https://img.spoonacular.com/recipes/715495-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 1095810,
    "title": "Buffalo Mozzarella & Pepperoni Pizza with a Cauliflower Crust",
    "image": "https://img.spoonacular.com/recipes/1095810-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 647124,
    "title": "Homemade Thin Crust Pizza + Pesto + Potato",
    "image": "https://img.spoonacular.com/recipes/647124-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 654523,
    "title": "Paneer & Fig Pizza",
    "image": "https://img.spoonacular.com/recipes/654523-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 663366,
    "title": "Thin Crust Genoa Salami Pizza",
    "image": "https://img.spoonacular.com/recipes/663366-312x231.png",
    "imageType": "png"
  },
  {
    "id": 636593,
    "title": "Butternut Squash Pizza",
    "image": "https://img.spoonacular.com/recipes/636593-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 655847,
    "title": "Pesto Veggie Pizza",
    "image": "https://img.spoonacular.com/recipes/655847-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 662605,
    "title": "Sweet Potato, Sausage and Caramelized Onion Pizza",
    "image": "https://img.spoonacular.com/recipes/662605-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 644953,
    "title": "Goat Cheese Pesto Pizza",
    "image": "https://img.spoonacular.com/recipes/644953-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 651956,
    "title": "Mini eggplant pizza",
    "image": "https://img.spoonacular.com/recipes/651956-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 637434,
    "title": "Chanterelle and Mangalitsa Speck Pizza",
    "image": "https://img.spoonacular.com/recipes/637434-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 716300,
    "title": "Plantain Pizza",
    "image": "https://img.spoonacular.com/recipes/716300-312x231.jpg",
    "imageType": "jpg"
  }
];


const useStore = create((set) => ({
  recipeList: initialData,
  addToRecipeList: (product) =>
    set((state) => ({
        recipeList: [...state.recipeList, product],
    })),
  removeFromRecipeList: (id) =>
    set((state) => ({
        recipeList: state.recipeList.filter((product) => product.id !== id),
    })),
  clearRecipeList: () =>
    set({
      recipeList: [],
    }),
}));

export default useStore;