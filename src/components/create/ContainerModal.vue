<template>
  <VDialog max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <VBtn
        v-bind="attrs"
        v-on="on"
      >
        Добавить контейнер
      </VBtn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Добавить контейнер</span>
      </v-card-title>
      <v-card-text>
        <ContainerForm/>
        1. Кол-во секций (sectionCount): range slider 1-5
        2. Margin & Padding / Демо справа
        3. Background
      </v-card-text>
    </v-card>
  </VDialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { VSlider } from 'vuetify/lib';
import FormBuilder from '@/utils/formbuilder/formbuilder';
import PageProvider from '@/components/create/PageProvider.vue';

@Component({
  components: {
    ContainerForm: new FormBuilder().withProvider(PageProvider)
      .addField({
        component: VSlider,
        label: 'Количество секций',
        name: 'sectionCount',
        options: {
          attrs: {
            min: 1,
            max: 5,
            ticks: 'always',
            'tick-size': 4,
            'tick-labels': [1, 2, 3, 4, 5],
          },
        },
      })
      .build(),
  },
})
export default class ContainerModal extends Vue {}
</script>

<style scoped>

</style>
