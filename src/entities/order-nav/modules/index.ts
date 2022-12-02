export default {
  actions: {

  },
  mutations:{

  },
  state: {
    orderNavArr: [
      {name: 'Местоположение', link: '#'},
      {name: 'Модель', link: '#'},
      {name: 'Дополнительно', link: '#'},
      {name: 'Итого', link: '#'}
    ],

  },
  getters: {
    getOrderNavArr(state:any) {
      return state.orderNavArr;
    }
  }
}