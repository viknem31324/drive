export default {
  actions: {
    createProgress(context:any, value: string) {
      context.commit('setProgress', value);
    }
  },
  mutations:{
    setCityPoint(state:any, value:any) {
      state.cityPoint = value;
    },
    setModel(state:any, value:any) {
      state.model = value;
    },
    setProgress(state:any, value: string) {
      for(let i = 0; i < state.progressList.length; i++) {
        state.progressList[i].value = value;
      }
    },
  },
  state: {
    cityPoint: '',
    model: '',
    color: '',
    order: '',
    rate: '',
    tank: '',
    // progressList: [
    //   { title: "Пункт выдaчи", value: "" },
    //   { title: "Модель", value: "Hyndai, i30 N" },
    //   { title: "Цвет", value: "Голубой" },
    //   { title: "Длительность аренды", value: "1д 2ч" },
    //   { title: "Тариф", value: "На сутки" },
    //   { title: "Полный бак", value: "Да" },
    // ],

  },
  getters: {
    getCityPoint(state:any) {
      return state.cityPoint;
    },
    getModel(state:any) {
      return state.model;
    },
    getProgressList(state:any) {
      const progressList = [
        { title: "Пункт выдaчи", value: state.cityPoint },
        { title: "Модель", value: state.model },
        { title: "Цвет", value: state.color },
        { title: "Длительность аренды", value: state.order },
        { title: "Тариф", value: state.rate },
        { title: "Полный бак", value: state.tank },
      ];
      return progressList;
    },
    // getValue(state:any) {
    //   let arr = [];
    //   for(let i = 0; i < state.length-1; i++) {
    //     if(state[i] !== ''){
    //       arr.push(state[i]);
    //     }
    //   }
    // },
  },
}