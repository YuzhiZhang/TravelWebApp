<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconsList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../../components/home/HomeHeader.vue'
import HomeSwiper from '../../components/home/HomeSwiper.vue'
import HomeIcons from '../../components/home/HomeIcons.vue'
import HomeRecommend from '../../components/home/HomeRecommend.vue'
import HomeWeekend from '../../components/home/HomeWeekend.vue'
import axios from 'axios'

export default {
  name: 'HomePage',
  data() {
    return {
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: [],
    }
  },
  components: {
    HomeWeekend,
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
  },
  methods: {
    getHomeInfo() {
      axios.get('/mock/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        let data = res.data
        this.swiperList = data.swiperList
        this.iconsList = data.iconsList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    },
  },
  mounted() {
    this.getHomeInfo()
  },
}
</script>
