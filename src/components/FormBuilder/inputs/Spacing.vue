<template>
  <div>
    <h4>{{ label }}</h4>
    <spacing-input
      v-model="spacing.margin"
      label="Margin"
    />
    <spacing-input
      v-model="spacing.padding"
      label="Padding"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { SpacingData } from '@/types/forminputs';
import SpacingInput from '@/components/FormBuilder/inputs/SpacingInput.vue';

@Component({
  components: {
    SpacingInput,
  },
})
export default class Spacing extends Vue {
  spacing: SpacingData = {
    margin: 0,
    padding: 0,
  }

  @Prop({ default: '' })
  label!: string;

  @Prop({ type: Object, default: () => ({}) })
  value!: SpacingData;
}
</script>
