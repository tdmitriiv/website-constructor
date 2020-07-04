import { ActionTree } from 'vuex';
import { RootState, PagesState } from '@/store/types';
import { getList } from '@/http/apiPages';

const actions: ActionTree<PagesState, RootState> = {
  async fetchPages({ commit }): Promise<void> {
    const pages = await getList();
    commit('loadList', pages);
  },
};

export default actions;
