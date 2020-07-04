<template>
  <div>
    <h1>Homepage</h1>
    <draggable
      :list="pageList"
      handle=".page__drag"
    >
      <PageCard
        class="page__item"
        v-for="(page, index) in pageList"
        :key="index"
        :page="page"
      />
    </draggable>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';
import draggable from 'vuedraggable';
import { Page } from '@/types/entities';
import PageCard from '@/components/home/PageCard.vue';

const page = namespace('page');

@Component({
  components: {
    PageCard,
    draggable,
  },
})
export default class Home extends Vue {
  @page.State('pages')
  pages!: Page[]

  @page.Action('fetchPages')
  fetchPages!: () => Promise<Page[]>

  @page.Action('updatePageList')
  updatePageList!: (pages: Page[]) => void;

  get pageList() {
    return this.pages;
  }

  set pageList(value) {
    this.updatePageList(value);
  }

  async beforeMount() {
    await this.fetchPages();
  }
}
</script>
