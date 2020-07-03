<template>
  <div>
    <h1>Homepage</h1>
    TODO
    button
    page list
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Page } from '@/types/entities';
import { getList } from '@/http/apiPages';

@Component
export default class Home extends Vue {
  pages: Array<Page> = [];

  async beforeMount() {
    this.pages = await getList();
  }
}
</script>
