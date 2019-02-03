<template>
  <li class="ListItem__Container">
    <a v-if="href" :href="href" :target="target">
      <slot></slot>
    </a>
    <slot v-else></slot>
  </li>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      validator: val => ['_self', '_blank', '_parent', '_top'].includes(val),
      default: '_self'
    }
  }
})
</script>

<style lang="stylus" scoped>
.ListItem__Container
  a
    color: #168eea
    text-decoration: none
    &:hover
      text-decoration: underline
</style>
