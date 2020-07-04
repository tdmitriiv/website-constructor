<template>
  <v-card
      class="mb-5"
      color="#385F73"
      dark
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
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Page } from '@/types/entities';

@Component
export default class PageCard extends Vue {
  @Prop()
  page!: Page
}
</script>
