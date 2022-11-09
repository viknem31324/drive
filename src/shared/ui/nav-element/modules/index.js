export default {
  actions: {

  },
  mutations:{

  },
  state: {
    arrNav: [
      {name: 'Парковка', link: '/', id: 1},
      {name: 'Страховка', link: '/', id: 2},
      {name: 'Бензин', link: '/', id: 3},
      {name: 'Обслуживание', link: '/', id: 4},
    ]

  },
  getters: {
    getNavArr(state) {
      return state.arrNav;
    }
  }
}