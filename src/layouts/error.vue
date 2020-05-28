<template>
  <div class="ErrorPage">
    <h2>
      <Octicon name="alert" /> {{ error.statusCode }} | {{ error.statusCode === 404 ? 'Notfound' : 'Error occurred' }}
    </h2>
  </div>
</template>

<script>
import Vue from 'vue'
import Octicon from '~/components/Octicon'

export default Vue.extend({
  layout: 'default',
  components: {
    Octicon,
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="stylus" scoped>
.ErrorPage
  height: 100vh
  text-align: center
  display: flex
  align-items: center
  justify-content: center
</style>
