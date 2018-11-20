<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from '@/components/city/CityHeader'
import CitySearch from '@/components/city/CitySearch'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style scoped lang="stylus">
</style>
