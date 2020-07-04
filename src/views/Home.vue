<template>
  <div>
    <h1>Homepage</h1>
    <v-card
      color="#385F73"
      dark
      v-for="(page, index) in pages"
      :key="index"
    >
      <v-card-actions>
        <v-btn
          text
          dark
        >
          <v-icon left>mdi-pencil</v-icon>
          Edit
        </v-btn>
        <v-btn
          text
          dark
        >
          <v-icon left>mdi-eye</v-icon>
          Preview
        </v-btn>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
          <span>Delete</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-drag</v-icon>
            </v-btn>
          </template>
          <span>Drag</span>
        </v-tooltip>
      </v-card-actions>
      <v-card-title class="headline">
        {{ page.name }}
      </v-card-title>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {
  Action,
  namespace,
} from 'vuex-class';
import { Page } from '@/types/entities';

const page = namespace('page');

@Component
export default class Home extends Vue {
  pages: Page[] = [];

  @page.Action('fetchPages')
  fetchPages!: () => Promise<Page[]>

  async beforeMount() {
    this.pages = await this.fetchPages();
  }
}
</script>
