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
    <div
      class="d-flex"
      v-else
    >
      <v-text-field
        class="spacing__input mr-2"
        :value="value[direction.name]"
        :label="direction.name"
        outlined
        :append-icon="`mdi-arrow-${direction.icon}`"
        @change="changeSpacingValue($event, direction.name)"
        :key="direction.name"
        v-for="direction in directions"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { SpacingSides, Direction } from '@/types/forminputs';

@Component
export default class SpacingInput extends Vue {
  isSplit = false;

  directions = [
    {
      name: Direction.Top,
      icon: 'up',
    },
    {
      name: Direction.Right,
      icon: 'right',
    },
    {
      name: Direction.Bottom,
      icon: 'down',
    },
    {
      name: Direction.Left,
      icon: 'left',
    },
  ];

  @Prop({ default: '' })
  label!: string;

  @Prop({ type: [Object, Number, String] })
  value!: number | string | SpacingSides;

  toggleSpacingDirections(isSplit = false): void {
    const { value } = this;
    if (this.isSplit === isSplit) {
      return;
    }
    if (isSplit && typeof value !== 'object') {
      this.changeSpacingValue({
        top: value,
        right: value,
        bottom: value,
        left: value,
      });
    } else {
      this.changeSpacingValue(0);
    }
    this.isSplit = isSplit;
  }

  changeSpacingValue(value: number | SpacingSides, direction?: Direction) {
    console.log(direction, typeof this.value, typeof value === 'string');
    if (
      direction
      && typeof this.value === 'object'
      && typeof value === 'string'
    ) {
      const currentSpacing = {
        ...this.value,
      };
      currentSpacing[direction] = value;
      this.$emit('input', currentSpacing);
      return;
    }
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
