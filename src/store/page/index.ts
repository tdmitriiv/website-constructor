import { Module } from 'vuex';
import { RootState, PagesState } from '@/store/types';
import actions from './actions';
import mutations from './mutations';

const state: PagesState = {
  pages: [],
};

const namespaced = true;

const page: Module<PagesState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
};

export default page;
