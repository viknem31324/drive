import Vue from 'vue';
import Vuex from 'vuex';

import sliders from '../../widgets/slider/modules';
import nav from '../../shared/ui/nav-element/modules';
import social from '../../shared/ui/list-social/modules';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
    },
    modules: {
        sliders,
        nav,
        social
    }
})