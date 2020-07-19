import { VTextField } from 'vuetify/lib';
import PageProvider from '@/components/create/PageProvider.vue';
import FormBuilder from '@/utils/formbuilder/formbuilder';

export default class FormDirector {
  builder: FormBuilder

  constructor(builder: FormBuilder) {
    this.builder = builder;
  }

  makePageForm() {
    return this.builder
      .withProvider(PageProvider)
      .addField({
        component: VTextField,
        label: 'Наименование',
        name: 'name',
      })
      .build();
  }
}
