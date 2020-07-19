<template>
  <div>
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Provide } from 'vue-property-decorator';
import { Page } from '@/types/entities';

@Component
export default class PageProvider extends Vue {
  @Provide('post') post = (data: Page) => {
    console.log('create page', data);
    return {
      success: 'Успех',
    };
  }

  @Provide('fetch') fetch = () => {
    console.log('fetch page object');
  }
}
</script>
