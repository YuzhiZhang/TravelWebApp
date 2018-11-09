<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped lang="stylus">
  @import "~@/assets/styles/varibles.styl"
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #ffff
    .header-left
      width: .64rem
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
    .header-right
      width: 1.24rem
      text-align: center
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
