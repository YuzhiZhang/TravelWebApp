<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from '@/components/city/CityHeader.vue'
import CitySearch from '@/components/city/CitySearch.vue'
import CityList from '@/components/city/CityList.vue'
import CityAlphabet from '@/components/city/CityAlphabet.vue'

export default {
  name: 'CityPage',
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: '',
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  methods: {
    getCityInfo() {
      axios.get('/mock/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange(letter) {
      this.letter = letter
    },
  },
  mounted() {
    this.getCityInfo()
  },
}
</script>

<style scoped lang="stylus"></style>
