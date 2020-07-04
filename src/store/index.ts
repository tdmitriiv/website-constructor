import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { RootState } from '@/store/types';
import page from '@/store/page';

Vue.use(Vuex);

const store: Store<RootState> = new Vuex.Store({
  state: {
    version: '0.0.1',
  },
  modules: {
    page,
  },
});

export default store;
