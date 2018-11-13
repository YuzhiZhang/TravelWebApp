<template>
  <div class="home">
    <home-header :city="city"></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
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
  name: 'home',
  data() {
    return {
      city: ''
    }
  },
  components: {
    HomeWeekend,
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  },
  methods: {
    getHomeInfo() {
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        this.city = res.city
      }
    }
  },
  mounted() {
    this.getHomeInfo()
  }
}
</script>
