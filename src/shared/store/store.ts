import Vue from 'vue';
import Vuex from 'vuex';

import slider from '../../widgets/slider/modules';
import nav from '../ui/nav-element/modules';
import social from '../ui/list-social/modules';
import orderNav from '../../entities/order-nav/modules';
import order from '../../pages/order/modules';
import progressBar from '../../entities/progress-bar/modules';
import checkList from '../../entities/check-list/modules';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
    },
    modules: {
        checkList,
        progressBar,
        order,
        orderNav,
        slider,
        nav,
        social
    },
});