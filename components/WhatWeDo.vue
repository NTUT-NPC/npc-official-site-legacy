<template>
  <div
    :class="[bool? 'card1 card':'card card2']"
  >
    <div class="text">
      <p class="title text_color">
        {{ title }}
      </p>
      <div class="content">
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
    height: 330px
    margin: 0px 100px 0px 100px
    // margin-top: 80px
    display: flex
    justify-content: center
    .text
      margin-left: 150px
      width: 400px
      display: flex
      margin-top: 50px
      flex-direction: column
      justify-content: center
      .title
        font-size: 2rem
      .content
        flex: 4
        font-size: 1rem
    .img_container
      img
        margin: 0px 100px 0px 100px
        width: 200px
        height: 200px

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
