<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="" class="icon-img-content">
      </div>
      <p class="icon-desc">热门景点</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<style scoped lang="stylus">
  @import "~@/assets/styles/varibles.styl"
  .icons
    height 0
    padding-bottom 50%
    .icon
      position relative
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 25%
      .icon-img
        position absolute
        left 0
        top 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding-bottom .1rem
        .icon-img-content
          display block
          margin 0 auto
          height 100%
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align center
        color $darkTextColor
</style>
