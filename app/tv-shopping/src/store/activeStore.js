import create from 'zustand';
const initialData = 'INACTIVE' // ACTIVE, PROGRESS


const activeStore = create((set) => ({
  status: initialData,
  setStatus: (_status) =>
    set((state) => ({
        status: _status
    })),
  clearStatus: () =>
    set({
      recipeList: [],
    }),
}));

export default activeStore;