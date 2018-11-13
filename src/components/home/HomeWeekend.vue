<template>
  <div class="recommend">
    <div class="title">周末去哪</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      recommendList: [
        {
          id: '0000',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/b9/f9d8ace21c06.jpg_r_640x214_1f239a81.jpg',
          title: '粤东泡汤好去处',
          desc: '全时四季的温泉，度假的天堂'
        },
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg',
          title: '深圳必游TOP10',
          desc: '来到深圳，你需要来这里签到'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
          title: '欢乐长隆',
          desc: '世界欢乐汇聚长隆'
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
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom  33.9%
  .item-info
    padding .1rem
    .item-img
      width 100%
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()

</style>
