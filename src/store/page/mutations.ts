import { MutationTree } from 'vuex';
import { PagesState } from '@/store/types';
import { Page } from '@/types/entities';

const mutations: MutationTree<PagesState> = {
  loadList(state, payload: Page[]) {
    state.pages = payload;
  },
};

export default mutations;
