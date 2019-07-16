<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或者拼音" />
    </div>
    <div class="search-content" ref="searchContent" v-show="keyword">
      <ul>
        <li v-for="(item, index) of list" :key="index" class="search-item">{{ item.name }}</li>
        <li v-show="hasNoData" class="search-item">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null,
      scroll: null
    }
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return false
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          if (this.cities.hasOwnProperty(i)) {
            this.cities[i].forEach(item => {
              if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
                result.push(item)
              }
            })
          }
        }
        this.list = result
      }, 100)
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.searchContent)
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/varibles.styl'
.search
  height .72rem
  padding 0 .1rem
  background $bgColor
  .search-input
    box-sizing border-box
    width 100%
    height .62rem
    padding 0 .1rem
    line-height .62rem
    text-align center
    border-radius .06rem
    color #666
.search-content
  z-index 1
  overflow hidden
  position absolute
  top 1.58rem
  left: 0
  right: 0
  bottom: 0
  background: #eee
  .search-item
    line-height: .62rem
    padding-left: .2rem
    color: #666
</style>
