<template>
  <div class="RemapPrivacyPage">
    <Markdown :markdown="markdown" />
  </div>
</template>

<script>
import Vue from 'vue'
import Markdown from '~/components/Markdown.vue'
import markdown from '~/assets/md/remap-privacy.md'

export default Vue.extend({
  components: {
    Markdown
  },
  data() {
    return {
      markdown
    }
  }
})
</script>

<style lang="stylus" scoped>
.RemapPrivacyPage
  max-width: 980px
  padding: 10px
  margin: 0 auto
</style>
