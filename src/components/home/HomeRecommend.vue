<template>
  <div class="recommend">
    <div class="title">猜你喜欢</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [
        {
          id: '0000',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1809/87/8796d4dfe0366858a3.water.png_200x200_ca6e25bf.png',
          title: '世界之窗',
          desc: '一个下午让你走遍全世界~'
        },
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1412/b5/c99be07b7b79cfb5900e03a35bc3051f.water.jpg_200x200_e839eb8e.jpg',
          title: '深圳欢乐谷',
          desc: '狂欢无罪，够胆你就来！'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_200x200_86f2e623.jpg',
          title: '锦绣中华民俗村',
          desc: '56个民族56支花~'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~@/assets/styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        margin-top .2rem
        line-height .44rem
        background #ff9300
        padding 0 .16rem
        border-radius .06rem
        -webkit-border-radius .06rem
        -moz-border-radius .06rem
        color #fff
</style>
