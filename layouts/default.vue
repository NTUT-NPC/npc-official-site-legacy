<template>
  <div>
    <toolbar />
    <nuxt />
    <foot />
  </div>
</template>

<style lang="sass">
  *
    font-family: "Helvetica", "Arial", "文泉驛正黑", "WenQuanYi Zen Hei", "黑體-繁", "Heiti TC", "微軟正黑體", "Microsoft JhengHei"
    background-color: #0c1214
  h1
    4rem
  h2
    3rem
  h3
    2rem
  h4 p
    1rem
  h1 h2 h3 h4 p
    color: white
</style>

<script>
import Toolbar from '@/components/Toolbar.vue'
import Foot from '@/components/Footer.vue'

export default {
  components: {
    Toolbar,
    Foot
  }
}
</script>
