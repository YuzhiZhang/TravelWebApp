<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="" class="icon-img-content" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.icons .swiper-pagination'
        }
      }
    }
  },
  computed: {
    pages() {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~@/assets/styles/varibles.styl"
@import "~@/assets/styles/mixins.styl"
.icons >>> .swiper-container
  height 0
  padding-bottom 55%
  .swiper-pagination
    bottom 3px
.icons
  margin-top .1rem
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
      ellipsis()
</style>
