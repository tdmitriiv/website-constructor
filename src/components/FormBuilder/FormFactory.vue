<template>
  <form
    class="form-factory"
    @submit.prevent="submit"
  >
    <div
      v-if="success"
      class="form-factory-success"
    >
      Success!
    </div>
    <template v-else>
      <FormGroup
        v-for="field in fieldsWithDefaults"
        :key="field.name"
      >
        <Component
          v-model="data[field.name]"
          :is="field.component"
          v-bind="{
            ...field.options.props,
            ...field.options.attrs,
          }"
          :id="`${_uid}-${field.name}`"
          @input="$v.data[field.name].$touch()"
          :label="field.label"
          :required="field.validation.required"
        />
        <FormInlineMessage
          v-if="$v.data[field.name].$error"
        >
          Please fill in this field correctly.
        </FormInlineMessage>
      </FormGroup>
      <VBtn
        type="submit"
        color="primary"
      >Submit</VBtn>
    </template>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate';

import FormGroup from './FormGroup.vue';
import FormInlineMessage from './FormInlineMessage.vue';

const defaultField = {
  component: null,
  label: '',
  name: '',
  options: {},
  validation: {},
};

export default {
  name: 'FormFactory',
  mixins: [validationMixin],
  inject: ['fetch', 'post'],
  components: {
    FormGroup,
    FormInlineMessage,
  },
  props: {
    fields: {
      default: () => [],
      type: Array,
    },
    id: {
      default: null,
      type: [Number, String],
    },
  },
  data() {
    return {
      data: {},
      success: false,
    };
  },
  computed: {
    fieldsWithDefaults() {
      return this.fields.map((x) => ({ ...defaultField, ...x }));
    },
  },
  async created() {
    if (this.id) {
      this.data = await this.fetch(this.id);
    }
  },
  methods: {
    async submit() {
      this.$v.$touch();
      if (this.$v.$error) return;

      const { success } = await this.post(this.data);
      this.success = success;
    },
  },
  validations() {
    const data = this.fieldsWithDefaults
      .filter((x) => x.validation)
      .reduce((prev, field) => ({
        ...prev,
        [field.name]: field.validation,
      }), {});
    return { data };
  },
};
</script>

<style scoped>
  .form-factory > :not(:first-child) {
    margin-top: 1em;
  }

  .form-factory-success {
    color: green;
  }
</style>
