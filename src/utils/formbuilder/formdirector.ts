import { VTextField } from 'vuetify/lib';
import PageProvider from '@/components/create/PageProvider.vue';
import FormBuilder from '@/utils/formbuilder/formbuilder';
import Containers from '@/components/FormBuilder/inputs/Containers.vue';

export default class FormDirector {
  builder: FormBuilder;

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
      .addField({
        component: Containers,
        label: 'Контейнеры',
        name: 'containers',
      })
      .build();
  }
}
