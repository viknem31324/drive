import Vue from 'vue';
import App from './App.vue';
import {router, store} from './providers';
import './index.scss';

export const app = new Vue({
    router,
    store,
    render: h => h(App),
  })