<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <span v-html="iconSvg" />
</template>

<script>
import Vue from 'vue'
import octicons from 'octicons'

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    iconSvg() {
      return octicons[this.name].toSVG()
    }
  }
})
</script>
