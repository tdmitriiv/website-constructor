<template>
  <div>Homepage</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Page } from '@/types/entities';

@Component
export default class Home extends Vue {
  pages: Array<Page> = [];
}
</script>
