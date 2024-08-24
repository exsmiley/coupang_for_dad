import create from 'zustand';
const initialData = [
    {
      "name": "blueberries",
      "image": "blueberries.jpg",
      "amount": {
        "metric": {
          "value": 222,
          "unit": "g"
        },
        "us": {
          "value": 1.5,
          "unit": "cups"
        }
      }
    },
    {
      "name": "egg white",
      "image": "egg-white.jpg",
      "amount": {
        "metric": {
          "value": 1,
          "unit": ""
        },
        "us": {
          "value": 1,
          "unit": ""
        }
      }
    },
    {
      "name": "flour",
      "image": "flour.png",
      "amount": {
        "metric": {
          "value": 2,
          "unit": "Tbsps"
        },
        "us": {
          "value": 2,
          "unit": "Tbsps"
        }
      }
    },
    {
      "name": "granulated sugar",
      "image": "sugar-in-bowl.png",
      "amount": {
        "metric": {
          "value": 150,
          "unit": "g"
        },
        "us": {
          "value": 0.75,
          "unit": "cup"
        }
      }
    },
    {
      "name": "fresh lemon juice",
      "image": "lemon-juice.jpg",
      "amount": {
        "metric": {
          "value": 1,
          "unit": "tsp"
        },
        "us": {
          "value": 1,
          "unit": "tsp"
        }
      }
    },
    {
      "name": "nutmeg",
      "image": "ground-nutmeg.jpg",
      "amount": {
        "metric": {
          "value": 1,
          "unit": "pinch"
        },
        "us": {
          "value": 1,
          "unit": "pinch"
        }
      }
    },
    {
      "name": "pie dough round",
      "image": "pie-crust.jpg",
      "amount": {
        "metric": {
          "value": 2,
          "unit": ""
        },
        "us": {
          "value": 2,
          "unit": ""
        }
      }
    },
    {
      "name": "quick cooking tapioca",
      "image": "tapioca-pearls.png",
      "amount": {
        "metric": {
          "value": 2,
          "unit": "Tbsps"
        },
        "us": {
          "value": 2,
          "unit": "Tbsps"
        }
      }
    },
    {
      "name": "trimmed rhubarb",
      "image": "rhubarb.jpg",
      "amount": {
        "metric": {
          "value": 305,
          "unit": "g"
        },
        "us": {
          "value": 2.5,
          "unit": "cups"
        }
      }
    },
    {
      "name": "salt",
      "image": "salt.jpg",
      "amount": {
        "metric": {
          "value": 0.333,
          "unit": "tsps"
        },
        "us": {
          "value": 0.333,
          "unit": "tsps"
        }
      }
    },
    {
      "name": "unsalted butter",
      "image": "butter-sliced.jpg",
      "amount": {
        "metric": {
          "value": 0.5,
          "unit": "Tbsps"
        },
        "us": {
          "value": 0.5,
          "unit": "Tbsps"
        }
      }
    }
  ]


const ingredientStore = create((set) => ({
  ingredientList: initialData,
  addToIngredientList: (product) =>
    set((state) => ({
        ingredientList: [...state.ingredientList, product],
    })),
  removeFromIngredientList: (id) =>
    set((state) => ({
        ingredientList: state.ingredientList.filter((product) => product.id !== id),
    })),
  clearIngredientList: () =>
    set({
        ingredientList: [],
    }),
}));

export default ingredientStore;