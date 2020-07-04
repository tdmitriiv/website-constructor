<template>
  <div>
    <h1>Homepage</h1>
    <PageCard
      v-for="(page, index) in pages"
      :key="index"
      :page="page"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';
import { Page } from '@/types/entities';
import PageCard from '@/components/home/PageCard.vue';

const page = namespace('page');

@Component({
  components: {
    PageCard,
  },
})
export default class Home extends Vue {
  pages: Page[] = [];

  @page.Action('fetchPages')
  fetchPages!: () => Promise<Page[]>

  async beforeMount() {
    this.pages = await this.fetchPages();
  }
}
</script>
