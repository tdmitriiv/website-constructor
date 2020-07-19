<template>
  <div>
    <h1>Create page</h1>
    <PageForm/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import FormDirector from '@/utils/formbuilder/formdirector';
import FormBuilder from '@/utils/formbuilder/formbuilder';

@Component({
  components: {
    PageForm: new FormDirector(new FormBuilder()).makePageForm(),
  },
})
export default class PageCreate extends Vue {}
</script>
