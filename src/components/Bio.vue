<template>
  <div class="Bio__Container">
    <h1 class="Container__Title">
      <span>Shingo Sato</span>
      <span class="Container__Title__Username">
        @sugarshin
      </span>
    </h1>
    <div class="Container__Descr">
      <span class="Container__Nowrap">
        Software Engineer
      </span>
      and
      <span class="Container__Nowrap">
        Engineering Manager
      </span>
      at
      <a href="https://www.lycorp.co.jp/en/" class="Container__Nowrap">LY Corporation</a>,
      <span class="Container__Nowrap">
        Co-Founder
      </span>
      at
      <a href="https://ins0.jp/" class="Container__Nowrap">
        instance0, inc.
      </a>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.Container__Title
  display: flex
  flex-direction: column
  font-size: 1.8rem
  margin: 0 0 8%
.Container__Title__Username
  font-size: 1.4rem
.Container__Descr
  a
    color: #168eea
    text-decoration: none
    &:hover
      text-decoration: underline
.Container__Nowrap
  white-space: nowrap
</style>
