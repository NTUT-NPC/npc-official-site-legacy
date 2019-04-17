<template>
  <div
    :class="[bool? 'card1 card':'card card2']"
  >
    <div class="text">
      <div class="content">
        <p class="title text_color">
          {{ title }}
        </p>
        <p>{{ content }}</p>
      </div>
    </div>
    <div class="img_container">
      <img :src="require(`~/static/${imgSrc}`)" alt="" width="500px" heght="500px">
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .card1
    flex-direction: row-reverse
  .card
    height: 100%
    margin: 0px 100px 0px 100px
    margin-top: 30px
    display: flex
    justify-content: center
    .text
      margin-left: 100px
      width: 400px
      display: flex
      flex-direction: column
      justify-content: center
      .title
        font-size: 2rem
        margin: 50px
      .content
        display: flex
        flex-direction: column
        align-items: center
        font-size: 1rem
    .img_container
      img
        margin: 0px 100px 0px 100px
        width: 300px
        height: 200px
        object-fit: cover

</style>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      require: true,
      default: ''
    },
    title: {
      type: String,
      require: true,
      default: ''
    },
    content: {
      type: String,
      require: true,
      default: ''
    },
    bool: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  computed: {
    url() {
      return require(`~/static/${this.imgSrc}`)
    }
  }
}
</script>
