<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from '@/components/city/CityHeader'
import CitySearch from '@/components/city/CitySearch'
import CityList from '@/components/city/CityList'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>

<style scoped lang="stylus">
</style>
