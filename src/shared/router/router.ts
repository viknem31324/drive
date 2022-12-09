import Vue from "vue";
import VueRouter from "vue-router";
// import { store } from "../store/store";
import order from '../../pages/order/modules';

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
          name: 'location',
          path: 'location',
          component: OrderLocation,
        },
        {
          name: 'models',
          path: 'models',
          component: OrderModels,
          // beforeEnter(to:any, from:any, next:any) {
          //   if(order.state.cityPoint === ''){
          //     next(false);
          //   }else {
          //     next();
          //   }
          // }
        },
        {
          name: 'additionally',
          path: 'additionally',
          component: OrderAdditionally,
          // beforeEnter(to:any, from:any, next:any) {
          //   if(order.state.cityPoint === '' || order.state.model === ''){
          //     next(false);
          //   }else {
          //     next();
          //   }
          // }
        },
        {
          name: 'total',
          path: 'total',
          component: OrderTotal,
          // beforeEnter(to:any, from:any, next:any) {
          //   if(order.state.cityPoint === '' || order.state.model === '' && order.state.color === '' && order.state.order === '' && order.state.rate === '' && order.state.tank === ''){
          //     next(false);
          //   }else {
          //     next();
          //   }
          // }
        },
      ],
    },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
