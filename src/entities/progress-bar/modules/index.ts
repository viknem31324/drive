export default {
  actions: {},
  mutations: {},
  state: {
    minPrice: 8000,
    maxPrice: 12000,
    progressBar: [
      { title: "Пункт выдaчи", value: "" },
      { title: "Модель", value: "Hyndai, i30 N" },
      { title: "Цвет", value: "Голубой" },
      { title: "Длительность аренды", value: "1д 2ч" },
      { title: "Тариф", value: "На сутки" },
      { title: "Полный бак", value: "Да" },
    ],
  },
  getters: {
    getPrice(state:any) {
      return 'от ' + state.minPrice + ' до ' + state.maxPrice + ' ₽';
    },
    getProgress(state:any) {
      return state.progressBar;
    },
  },
};
