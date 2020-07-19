import { Component } from 'vue';
import FormFactory from '@/components/FormBuilder/FormFactory.vue';
import {
  FormBuilderProps,
  FormBuilderField,
} from '@/types/formbuilder';

export default class FormBuilder {
  props: FormBuilderProps;

  provider!: Component;

  constructor(fields?: Array<FormBuilderField>) {
    this.props = {
      fields: fields || [],
    };
  }

  withProvider(provider: Component) {
    this.provider = provider;
    return this;
  }

  addField(field: FormBuilderField) {
    this.props.fields.push(field);
    return this;
  }

  build(): Component {
    const Provider = this.provider;
    const { props } = this;

    return {
      props: {
        id: {
          default: null,
          type: [Number, String],
        },
      },
      render(createElement) {
        return createElement(Provider, [
          createElement(FormFactory, { props }),
        ]);
      },
    };
  }
}
