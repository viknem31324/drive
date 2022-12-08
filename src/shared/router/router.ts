import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from '@/pages/home/HomePage.vue';
import OrderPage from '@/pages/order/OrderPage.vue';
import OrderLocation from '@/widgets/OrderLocation/OrderLocation.vue';
import OrderModels from '@/widgets/OrderModels/OrderModels.vue';
import OrderAdditionally from '@/widgets/OrderAdditionally/OrderAdditionally.vue';
import OrderTotal from '@/widgets/OrderTotal/OrderTotal.vue';

Vue.use(VueRouter);


const routes = [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/order',
      component: OrderPage,
      children: [
        {
        path: 'location',
        component: OrderLocation,
        },
        {
          path: 'models',
          component: OrderModels,
        },
        {
          path: 'additionally',
          component: OrderAdditionally,
        },
        {
          path: 'total',
          component: OrderTotal,
        },
      ],
    },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
