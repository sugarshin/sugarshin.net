<template>
  <div class="TopPage">
    <div class="TopPage__Container">
      <div class="TopPage__Image">
        <div class="TopPage__Image__Container">
          <img src="~/assets/image/portrait.png" />
        </div>
      </div>
      <div class="TopPage__Text">
        <Bio class="TopPage__Text__Bio" />
        <ul class="TopPage__Text__List TopPage__Text__Profile">
          <li is="ListItem" v-for="(info, i) in informations" :key="i" class="TopPage__Text__Profile__Item">
            <span class="TopPage__Text__Profile__ListItem__IconContainer">
              <Octicon :name="info.icon" />
            </span>
            <span>{{ info.text }}</span>
          </li>
        </ul>
        <ul class="TopPage__Text__List TopPage__Text__LinksLog">
          <li is="ListItem" class="TopPage__Text__Profile__Item" href="https://blog.sugarshin.net/">
            <span class="TopPage__Text__Profile__ListItem__IconContainer">
              <Octicon name="pencil" />
            </span>
            <span>Blog</span>
          </li>
          <li is="ListItem" class="TopPage__Text__Profile__Item" href="https://slides.sugarshin.net/">
            <span class="TopPage__Text__Profile__ListItem__IconContainer">
              <Octicon name="note" />
            </span>
            <span>Slides</span>
          </li>
        </ul>
        <ul class="TopPage__Text__List">
          <li is="ListItem" v-for="(link, i) in links" :key="i" class="TopPage__Text__Profile__Item" :href="link.url">
            <span class="TopPage__Text__Profile__ListItem__IconContainer">
              <Octicon name="link" />
            </span>
            <span>{{ link.text }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Octicon from '~/components/Octicon.vue'
import Bio from '~/components/Bio.vue'
import ListItem from '~/components/ListItem.vue'

export default Vue.extend({
  components: {
    Octicon,
    Bio,
    ListItem,
  },
  data() {
    return {
      informations: [
        { icon: 'terminal', text: 'Software Developer' },
        { icon: 'location', text: 'Tokyo, Japan' },
      ],
      links: [
        { url: 'https://github.com/sugarshin/', text: 'GitHub' },
        { url: 'https://www.linkedin.com/in/shingosato/', text: 'LinkedIn' },
        { url: 'https://keybase.io/sugarshin', text: 'Keybase' },
        { url: 'https://x.com/sugarshin/', text: 'X' },
        { url: 'https://instagram.com/sugarshin', text: 'Instagram' },
        { url: 'https://www.facebook.com/sngsato', text: 'Facebook' },
        { url: 'https://www.strava.com/athletes/sugarshin', text: 'Strava' },
      ],
    }
  },
})
</script>

<style lang="stylus" scoped>
// smallest ipad (ipad mini (6th gen))
small-tablet-horizontal-width-portrait = 744px
breakpoint = small-tablet-horizontal-width-portrait
.TopPage
  flex-direction: column
  display: flex
  justify-content: center
  align-items: center
  padding: 4% 0
  @media screen and (min-width: breakpoint)
    height: 100vh
    padding: 0
    flex-direction: row
.TopPage__Container
  flex-direction: column
  display: flex
  justify-content: center
  align-items: center
  @media screen and (min-width: breakpoint)
    flex-direction: row
    align-items: start
.TopPage__Image
  width: 56.25%
  margin: 0 0 4%
  @media screen and (min-width: breakpoint)
    flex-basis: 24%
    width: auto
    margin: 0 1% 0 2%
.TopPage__Image__Container
  width: 56.25%
  min-width: 180px;
  @media screen and (min-width: breakpoint)
    width: auto
    align-items: start
  img
    max-width: 100%
    height: auto
.TopPage__Text
  width: 56.25%
  @media screen and (min-width: breakpoint)
    flex-basis: 24%
    margin: 0 2% 0 1%
    width: auto
.TopPage__Text__List
  list-style: none
  padding: 0
  margin: 0
.TopPage__Text__Profile
  margin-bottom: 4%
.TopPage__Text__LinksLog
  margin-bottom: 4%
.TopPage__Text__Profile__ListItem__IconContainer
  margin-right: .2em
  display: inline-block
  width: 16px
  text-align: center
  vertical-align: middle
  line-height: 1
.TopPage__Text__Bio
  margin-bottom: 8%
</style>
