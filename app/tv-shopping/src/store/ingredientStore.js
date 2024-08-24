import create from 'zustand';
const initialData = [
    {
      "name": "tomatoes",
      "image": "https://pixabay.com/get/gd0f58f2f90996b8966239b5278ae74e41368abe517e4aa42952b4d4ecebb8ffea0391bc4f5b6d0bb6d95f875287aaf3a_640.jpg"
    },
    {
      "name": "cucumber",
      "image": "https://pixabay.com/get/g4df3e343dbd8d877f9a050ba3be9993710a003d80d3431fa195c1a398bba2603414f9f00420298591c0390451710e21cb36b46941cf3f463565a72f951fa47b1_640.jpg"
    },
    {
      "name": "red bell pepper",
      "image": "https://pixabay.com/get/g60fef83944b361d27737caa9d87c5fede5c646a7fd0834f117282e9fc190e70972fd254527cf1a489610711481c8c8a382bbbb25bd9352f5efd4ebc875bcfedd_640.jpg"
    },
    {
      "name": "shallot",
      "image": "https://pixabay.com/get/g987244ca234a03f2d987d8c31bbe6f9d8e64e6d6d80a4d2f16b19eaa06372f860a2698148215c12b18db57c6662c047046e276b529e9a76f8cf2dbdfc126fa53_640.jpg"
    },
    {
      "name": "olive oil",
      "image": "https://pixabay.com/get/gf1a58b03233f9f7eb4fb38b4de13872adfff1089ebb7c58a1aaba110c72f17e04251beec9560473e695c945af4646d00644d55f58c7d6098c3570d40920464b4_640.jpg"
    },
    {
      "name": "rice vinegar",
      "image": "https://pixabay.com/get/g4cb5416ac86525e3e69356253cdf84113bdce7ebc6a39fe7a30d43423233fd764fee976f21d3a1c9a153d41b0e197142f5585e1a4890eff7965e097f80b2fc97_640.jpg"
    },
    {
      "name": "baguette",
      "image": "https://pixabay.com/get/gc32db2c320134817f374457bfc49855a037ee60c959e43e1ab11bff29af5ec9dc8ce54796bdd736ec6b66988df5baf608a52e0ac4d387c924c61f9c7c8db17a5_640.jpg"
    },
    {
      "name": "cumin",
      "image": "https://pixabay.com/get/gf05441e4b01284adcdf3c43a6d5a211a26ca4bd28488d59fed6c9f824fad5a142f75f5ed31b04b94b7885bfa26d4039d2736d081433b56e2c86ac1e5125ef871_640.jpg"
    },
    {
      "name": "salt",
      "image": "https://pixabay.com/get/ge847c333a8d667b5379f62f95ce30e78ed2def73162abf8ca395b1b901b2b390900dee7acaa521c84738fa98033c86adfaadd74a8d45af4c84e4d6cb24531d02_640.jpg"
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