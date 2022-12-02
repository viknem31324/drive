export default {
  actions: {

  },
  mutations:{

  },
  state: {
    slideArr: [
      { id: 1, title: "Бесплатная парковка", descr: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.", img: 'slider/jp-valery-1052513-unsplash.jpg', btnTheme: 'btn-green' },
      { id: 2, title: "Страховка", descr: "Полная страховка страховка автомобиля", img: 'slider/jp-valery-1052513-unsplash (1).jpg', btnTheme: 'btn-blue' },
      { id: 3, title: "Бензин", descr: "Полный бак на любой заправке города за наш счёт", img: 'slider/jp-valery-1052513-unsplash (2).jpg', btnTheme: 'btn-red' },
      { id: 4, title: "Обслуживание", descr: "Автомобиль проходит еженедельное ТО", img: 'slider/jp-valery-1052513-unsplash (3).jpg', btnTheme: 'btn-purple' },]

  },
  getters: {
    getSlideArr(state:any) {
      return state.slideArr;
    }
  }
}