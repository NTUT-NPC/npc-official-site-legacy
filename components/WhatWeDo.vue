<template>
  <v-card
    v-inview:parent="'animate'"
    v-inview:animate="'fadeInUp'"
    class="card"
  >
    <div class="test">
      <div class="title">
        {{ title }}
      </div>
      <span class="content">
        <hr>
        {{ content }}
      </span>
    </div>
    <img :src="require(`~/static/${imgSrc}`)">
  </v-card>
</template>

<style lang="sass" scoped>
  *
    font-family: "微軟正黑體"!important
  .title
    font-size: 72px
    margin-bottom: 20px
  .content
    margin-top: 5px
    margin-bottom: 3vw
    text-align: center
  .test
    // position: absolute
    height: 100%
    width: 300px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    color: white
  .card
    margin-top: 50px
    width: 80vw
    height: 30vw
    display: flex  !important
    justify-content: center
    align-items: center
    overflow: hidden
    background-color: black
  img
    position: absolute
    width: 100%
    border-radius: 0
  img:hover
    transition: 0.5s
    opacity: 0.3
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
