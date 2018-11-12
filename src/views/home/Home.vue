<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../../components/home/HomeHeader.vue'
import HomeSwiper from '../../components/home/HomeSwiper.vue'
import HomeIcons from '../../components/home/HomeIcons.vue'
import HomeRecommend from '../../components/home/HomeRecommend.vue'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  }
}
</script>
