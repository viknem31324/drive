import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from '@/pages/home/HomePage.vue'

Vue.use(VueRouter);


const routes = [
    {path: '/', component: HomePage},
    // {path: '/:id', component: () => import('./task-details')}
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
