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
import CityHeader from '@/components/city/CityHeader'
import CitySearch from '@/components/city/CitySearch'
import CityList from '@/components/city/CityList'
import CityAlphabet from '@/components/city/CityAlphabet'
export default {
  name: 'City',
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
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
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
