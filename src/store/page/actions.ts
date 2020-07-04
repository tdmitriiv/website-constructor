import { ActionTree } from 'vuex';
import { RootState, PagesState } from '@/store/types';
import { getList } from '@/http/apiPages';
import { Page } from '@/types/entities';

const actions: ActionTree<PagesState, RootState> = {
  async fetchPages({ commit }): Promise<Page[]> {
    const pages = await getList();
    commit('updateList', pages);
    return pages;
  },
  removePage({ commit }, id: number): void {
    commit('remove', id);
  },
  updatePageList({ commit }, pages: Page[]) {
    commit('updateList', pages);
  },
};

export default actions;
