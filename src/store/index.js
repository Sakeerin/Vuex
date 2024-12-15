import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './modules/counter/index.js';

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state(){
        return {
            // counter: 0,
            isLoggedIn: false
        };
    },
    mutations: rootMutations,
    // {
        // increment(state){
        //     // state.counter++;
        //     state.counter = state.counter + 2;
        // },
        // increase(state, payload){
        //     state.counter = state.counter + payload.value;
        // },
        // setAuth(state, payload){
        //     state.isLoggedIn = payload.isAuth;
        // },
    // },
    actions: rootActions,
    getters: rootGetters,
});

export default store;