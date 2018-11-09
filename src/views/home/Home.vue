<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../../components/home/HomeHeader.vue'
import HomeSwiper from '../../components/home/HomeSwiper.vue'
import HomeIcons from '../../components/home/HomeIcons.vue'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>
