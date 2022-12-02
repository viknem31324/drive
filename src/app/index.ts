import Vue from 'vue';
import App from './App.vue';
import {router}  from '../shared/router/router';
import {store} from '../shared/store/store';
import '@/shared/assets/styles/index.scss';

export const app = new Vue({
    router,
    store,
    render: h => h(App),
  })