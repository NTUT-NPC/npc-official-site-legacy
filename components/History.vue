<template>
  <div>
    <img :src="imgSrc" alt="">
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
  }
}
</script>
