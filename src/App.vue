<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link :to="{ name: 'Home' }">
        <v-toolbar-title class="white--text">
          Website constructor
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn :to="{ name: 'Create page' }">
        <v-icon left>mdi-plus</v-icon>
        Create
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
