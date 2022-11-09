export default {
  actions: {

  },
  mutations:{

  },
  state: {
    arrsSocial: [
      {link: 'https://web.telegram.org/', path: 'free-icon-telegram-3536661.png', alt: 'Telegram', id: 1},
      {link: 'https://www.facebook.com/', path: 'free-icon-facebook-174848.png', alt: 'Facebook', id: 2},
      {link: 'https://www.instagram.com/', path: 'free-icon-instagram-1409946.png', alt: 'Instagram', id: 3},
    ]

  },
  getters: {
    getSocialArr(state) {
      return state.arrsSocial;
    }
  }
}