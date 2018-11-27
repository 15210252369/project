<template>
  <div id="app">
    <router-view/>
    <foot v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import foot from 'components/foot/foot'

  export default {
    components: {
      foot
    }
  }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  .app
    width:100%
    height: 100%
    background:#f5f5f5
</style>
