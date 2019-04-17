<template>
  <v-card
    v-inview:parent="'animate'"
    v-inview:animate="'fadeInUp'"
    :class="[bool ? 'card1 card':'card card2']"
  >
    <div class="content">
      <p class="content__title text_color">
        {{ title }}
      </p>
      <p class="content__info">
        {{ content }}
      </p>
    </div>
    <img :src="require(`~/static/${imgSrc}`)">
  </v-card>
</template>

<style lang="sass" scoped>
  *
    color: black
  .card1
    flex-direction: row-reverse
  .card
    opacity: 0
    animation-direction: 1s
    height: 100%
    display: flex !important
    justify-content: center
    margin: 16px 0
    overflow: hidden
    border-radius: 10px
    .content
      width: 50%
      padding: 40px
      display: flex
      flex-direction: column
      &__title
        font-size: 2.5rem
        margin-bottom: 8px
        font-weight: 700
      &__info
        font-size: 1.3rem
    img
      object-fit: cover
      height: 350px
      width: 50%
      border-radius: 0

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
