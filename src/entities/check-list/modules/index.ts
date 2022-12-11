export default {
  actions: {},
  mutations: {
    setActiveCategori(state: any, value: String) {
      state.activeCategori = value;
    },
  },
  state: {
    activeCategori: "Все модели",
    categoriRadioBtn: [
      { text: "Все модели" },
      { text: "Эконом" },
      { text: "Премиум" },
    ],
  },
  getters: {
    getCategoriRadioBtn(state: any) {
        return state.categoriRadioBtn;
    },
    getActiveCategori(state: any) {
      return state.activeCategori;
    },
  },
};
