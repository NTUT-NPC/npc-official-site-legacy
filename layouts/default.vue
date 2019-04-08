<template>
  <div>
    <toolbar />
    <nuxt />
    <foot />
  </div>
</template>

<style lang="sass">
  *
    font-family: 微軟正黑體
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
