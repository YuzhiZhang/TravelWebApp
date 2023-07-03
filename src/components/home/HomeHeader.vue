<template>
  <div class="header">
    <div class="header-left flex justify-center items-center">
      <div class="i-ant-design-left-outlined back-icon"></div>
    </div>
    <div class="header-input flex items-center">
      <div class="header-input-icon i-ant-design-search-outlined">
      </div>
      <div class="header-input-content flex-1">
        输入城市/景点/游玩主题
      </div>

    </div>
    <router-link to="/city">
      <div class="header-right flex justify-center items-center">
        <div class="header-right-content">
          {{ city }}
        </div>
        <span class="i-ant-design-caret-down-filled arrow-icon"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
  },
}
</script>

<style scoped lang="stylus">

.header
  display: flex
  line-height: $headerHeight
  background: $bgColor
  color: #ffff
  .header-left
    width: 0.64rem
    .back-icon
      text-align: center
      font-size: 0.4rem
  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    background-color: #fff
    color: #ccc
    -webkit-border-radius: .1rem
    -moz-border-radius: .1rem
    border-radius: .1rem
    &-icon
      font-size: 0.32rem
    &-content
      font-size: 0.28rem
    .search-icon
      font-size: 0.32rem
  .header-right
    min-width: 1.04rem
    padding: 0 .1rem
    text-align: center
    color #fff
    .arrow-icon
      margin-left: .04rem
      font-size: .24rem
</style>
