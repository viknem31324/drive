export default {
  actions: {

  },
  mutations:{
    setCity(state:any, value:any) {
      state.city = value;
    },
    setPoint(state:any, value:any) {
      state.point = value;
    },
  },
  state: {
    city: '',
    point: '',

  },
  getters: {
    getCity(state:any) {
      return state.city;
    },
    getPoint(state:any) {
      return state.point;
    },
    getCityPoint(state:any) {
      return state.city + ' ' + state.point;
    }
  },
}