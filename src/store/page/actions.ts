import { ActionTree } from 'vuex';
import { RootState, PagesState } from '@/store/types';
import { getList } from '@/http/apiPages';
import { Page } from '@/types/entities';

const actions: ActionTree<PagesState, RootState> = {
  async fetchPages({ commit }): Promise<Page[]> {
    const pages = await getList();
    commit('loadList', pages);
    return pages;
  },
  removePage({ commit }, id: number): void {
    commit('remove', id);
  },
};

export default actions;
