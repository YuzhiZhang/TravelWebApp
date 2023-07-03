<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="i-ant-design-left-outlined header-back"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
}
</script>

<style scoped lang="stylus">

.header
  position relative
  overflow hidden
  height: $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  background $bgColor
  font-size .32rem

  .header-back
    position absolute
    left 0
    top 50%
    transform translateY(-50%)
    width .64rem
    text-align center
    font-size .4rem
    color #fff
</style>
