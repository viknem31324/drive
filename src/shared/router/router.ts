import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from '@/pages/home/HomePage.vue';
import OrderPage from '@/pages/order/OrderPage.vue';

Vue.use(VueRouter);


const routes = [
    {path: '/', component: HomePage},
    {path: '/order', component: OrderPage},
    // {path: '/:id', component: () => import('./task-details')}
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
