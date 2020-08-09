<template>
  <div>
    <div class="mb-1">
      {{ label }}:
      <span
        :class="[
          'spacing__direction',
          !isSplit ? 'spacing__direction-active' : ''
        ]"
        @click="toggleSpacingDirections(false)"
      >
        Все
      </span>
      <span
        :class="[
          'spacing__direction',
          isSplit ? 'spacing__direction-active' : ''
        ]"
        @click="toggleSpacingDirections(true)"
      >
        По отдельности
      </span>
    </div>
    <template v-if="!isSplit">
      <v-text-field
        class="spacing__input"
        :value="value"
        outlined
        append-icon="mdi-arrow-all"
        @change="changeSpacingValue"
      />
    </template>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { SpacingSides } from '@/types/forminputs';

@Component
export default class SpacingInput extends Vue {
  isSplit = false;

  directions = ['top', 'right', 'bottom', 'left'];

  @Prop({ default: '' })
  label!: string;

  @Prop({ type: [Object, Number, String] })
  value!: number | string | SpacingSides;

  toggleSpacingDirections(isSplit = false) {
    this.isSplit = isSplit;
  }

  changeSpacingValue(value: number | SpacingSides) {
    this.$emit('input', value);
  }
}
</script>
<style>
  .spacing__input {
    max-width: 100px;
  }
  .spacing__direction {
    cursor: pointer;
    display: inline-block;
    margin: 0 3px;
    text-decoration: underline;
  }
  .spacing__direction-active {
    font-weight: 700;
  }
</style>
