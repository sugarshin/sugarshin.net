<template>
  <div class="TopPage">
    <div class="TopPage__Image">
      <img src="~/assets/image/portrait.png" />
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
        <li is="ListItem" class="TopPage__Text__Profile__Item" href="//blog.sugarshin.net/">
          <span class="TopPage__Text__Profile__ListItem__IconContainer">
            <Octicon name="pencil" />
          </span>
          <span>Blog</span>
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
        { icon: 'terminal', text: 'Software Engineer' },
        { icon: 'location', text: 'Tokyo, Japan' },
      ],
      links: [
        { url: 'https://github.com/sugarshin/', text: 'GitHub' },
        { url: 'https://keybase.io/sugarshin', text: 'Keybase' },
        { url: 'https://twitter.com/sugarshin/', text: 'Twitter' },
        { url: 'https://instagram.com/sugarshin', text: 'Instagram' },
        { url: 'https://www.facebook.com/sngsato', text: 'Facebook' },
        { url: 'https://www.strava.com/athletes/sugarshin', text: 'Strava' },
      ],
    }
  },
})
</script>

<style lang="stylus" scoped>
.TopPage
  flex-direction: column
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  @media screen and (min-width: 768px)
    flex-direction: row
.TopPage__Image
  width: 56.25%
  margin: 0 0 4%
  @media screen and (min-width: 768px)
    flex-basis: 24%
    width: auto
    margin: 0 2%
    order: 2
  img
    max-width: 100%
    height: auto
.TopPage__Text
  width: 56.25%
  @media screen and (min-width: 768px)
    flex-basis: 24%
    width: auto
    order: 1
.TopPage__Text__List
  list-style: none
  padding: 0
  margin: 0
  @media screen and (min-width: 768px)
    text-align: right
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
