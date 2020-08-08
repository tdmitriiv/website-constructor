<template>
  <div>
    <h4>{{ label }}</h4>
    <div v-if="value.length > 0">
      Список контейнеров:
      <div
        v-for="(container, index) in value"
        :key="index"
        class="containerBlock"
      >
        {{ index }}
      </div>
    </div>
    <div
      class="mb-3"
      v-else
    >
      Список контейнеров пуст, добавьте контейнер
    </div>
    <ContainerModal/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Container } from '@/types/entities';
import ContainerModal from '@/components/create/ContainerModal.vue';

@Component({
  components: {
    ContainerModal,
  },
})
export default class Containers extends Vue {
  isAddModalVisible = false;

  @Prop({ default: '' })
  label!: string;

  @Prop({ type: Array, default: () => [] })
  value!: Container[];

  showAddContainerModal(): void {
    console.log('Show add container');
    this.isAddModalVisible = true;
    this.$emit('input', [
      ...this.value,
      {
        sections: [],
      },
    ]);
  }
}
</script>

<style scoped>
  .containerBlock {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    position: relative;
  }
</style>
