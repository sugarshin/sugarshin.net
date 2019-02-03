<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html="html" />
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    markdown: {
      type: String,
      required: true
    }
  },
  computed: {
    html() {
      return this.markdown
    }
  }
})
</script>
