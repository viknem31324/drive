import Vue from 'vue';
import Vuex from 'vuex';

import slider from '../../widgets/slider/modules';
import nav from '../ui/nav-element/modules';
import social from '../ui/list-social/modules';
import orderNav from '../../entities/order-nav/modules';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
    },
    modules: {
        orderNav,
        slider,
        nav,
        social
    }
})