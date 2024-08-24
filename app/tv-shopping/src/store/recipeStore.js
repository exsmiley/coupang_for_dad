import create from 'zustand';
const initialData = [
    {
      "id": 637475,
      "image": "https://img.spoonacular.com/recipes/637475-312x231.jpg",
      "imageType": "jpg",
      "likes": 0,
      "missedIngredientCount": 2,
      "title": "Chavrie Fresh Goat Cheese With Dried Cranberries and Walnuts",
      "usedIngredientCount": 2
    },
    {
      "id": 1098388,
      "image": "https://img.spoonacular.com/recipes/1098388-312x231.jpg",
      "imageType": "jpg",
      "likes": 0,
      "missedIngredientCount": 3,
      "title": "Watermelon Salad with Feta, Walnut & Nigella Seeds",
      "usedIngredientCount": 2
    },
    {
      "id": 664912,
      "image": "https://img.spoonacular.com/recipes/664912-312x231.jpg",
      "imageType": "jpg",
      "likes": 0,
      "missedIngredientCount": 3,
      "title": "Waldorf Salad With Fresh Goat Cheese",
      "usedIngredientCount": 2
    },
    {
      "id": 634848,
      "image": "https://img.spoonacular.com/recipes/634848-312x231.jpg",
      "imageType": "jpg",
      "likes": 0,
      "missedIngredientCount": 3,
      "title": "Berries and Cream Yogurt Parfait",
      "usedIngredientCount": 2
    },
    {
      "id": 642406,
      "image": "https://img.spoonacular.com/recipes/642406-312x231.jpg",
      "imageType": "jpg",
      "likes": 0,
      "missedIngredientCount": 4,
      "title": "Endive Appetizer With Blue Cheese, Dried Cranberries and Walnuts",
      "usedIngredientCount": 2
    },
    {
      "id": 635297,
      "image": "https://img.spoonacular.com/recipes/635297-312x231.jpg",
      "imageType": "jpg",
      "likes": 0,
      "missedIngredientCount": 5,
      "title": "Bleu Cheese Stuffed Wine Cherries With Honeycomb",
      "usedIngredientCount": 2
    },
    {
      "id": 716410,
      "image": "https://img.spoonacular.com/recipes/716410-312x231.jpg",
      "imageType": "jpg",
      "likes": 0,
      "missedIngredientCount": 5,
      "title": "Cannoli Ice Cream w. Pistachios & Dark Chocolate",
      "usedIngredientCount": 2
    },
    {
      "id": 655438,
      "image": "https://img.spoonacular.com/recipes/655438-312x231.jpg",
      "imageType": "jpg",
      "likes": 0,
      "missedIngredientCount": 6,
      "title": "Pear Salad With Walnuts and Blue Cheese",
      "usedIngredientCount": 2
    },
    {
      "id": 644108,
      "image": "https://img.spoonacular.com/recipes/644108-312x231.jpg",
      "imageType": "jpg",
      "likes": 0,
      "missedIngredientCount": 6,
      "title": "Fusilli With Zucchini Flowers, Ricotta and Saffron",
      "usedIngredientCount": 2
    },
    {
      "id": 640508,
      "image": "https://img.spoonacular.com/recipes/640508-312x231.jpg",
      "imageType": "jpg",
      "likes": 0,
      "missedIngredientCount": 6,
      "title": "Cream Cheese Stuffed Baby Bell Pepper Appetizer",
      "usedIngredientCount": 2
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