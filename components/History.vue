<template>
  <div>
    <!-- <img :src="url" alt=""> -->
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      require: true,
      default: ''
    }
  },
  computed: {
    url() {
      return require(`~/static/${this.imgSrc}`)
    }
  }
}
</script>
