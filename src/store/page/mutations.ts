import { MutationTree } from 'vuex';
import { PagesState } from '@/store/types';
import { Page } from '@/types/entities';

const mutations: MutationTree<PagesState> = {
  loadList(state, payload: Page[]) {
    state.pages = payload;
  },
  remove(state, payload: number) {
    state.pages = state.pages.filter((page) => page.id !== payload);
  },
};

export default mutations;
