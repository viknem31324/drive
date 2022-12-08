export default {
  actions: {

  },
  mutations:{

  },
  state: {
    orderNavArr: [
      {name: 'Местоположение', link: '/order/location'},
      {name: 'Модель', link: '/order/models'},
      {name: 'Дополнительно', link: '/order/additionally'},
      {name: 'Итого', link: '/order/total'}
    ],

  },
  getters: {
    getOrderNavArr(state:any) {
      return state.orderNavArr;
    }
  }
}