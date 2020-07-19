import { Component } from 'vue'
import { ValidationFunc } from 'vuelidate/lib/validators';

export interface FormBuilderField {
  component: Component,
  label: string,
  name: string,
  options?: Object,
  validation?: Record<string, ValidationFunc>,
}

export interface FormBuilderProps {
  fields: Array<FormBuilderField>
}

