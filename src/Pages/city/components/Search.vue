<template>
  <div class="Search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音"/>
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .Search
    height : .72rem
    padding : 0 .1rem
    background : $bgColor
    .search-input
      box-sizing : border-box
      height : .62rem
      line-height : .62rem
      width : 100%
      padding : 0 .1rem
      text-align : center
      border-radius : .06rem
      color : #666
</style>
