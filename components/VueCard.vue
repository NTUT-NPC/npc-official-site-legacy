<template>
  <v-flex class="grid-list">
    <div class="card__container">
      <div class="img__conatiner">
        <v-img :src="require(`~/static/${item.imgSrc}`)" />
      </div>
      <div class="card__text">
        <v-card-title>
          <p class="text__title text-truncate">
            {{ item.title }}
          </p>
        </v-card-title>
        <div class="text_contain">
          <p>{{ item.content }}</p>
          <div class="buttom__about">
            <v-bottom-sheet v-model="sheet">
              <template v-slot:activator>
                <v-btn
                  color="#22b590"
                  dark
                >
                  了解更多
                </v-btn>
              </template>
            </v-bottom-sheet>
          </div>
        </div>
      </div>
    </div>
  </v-flex>
</template>

<style lang="sass" scoped>
*
  padding: 0
  .card__container
    border-radius: 10px
    padding: 5%
    display: flex
    flex-direciton: column
    background-color: gray
    position: relative
    .img__conatiner
      min-width: 200px
      min-height: 200px
    .card__text
      margin-left: 50px
      display: flex
      flex-direction: column
      align-items: start
      text-align: left
      .text__title
        font-size: 2rem
      .text__contain
        margin-top: 50px
        font-size: 1rem
      .buttom__about
        position: absolute
        right: 10px
        bottom: 10px
</style>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true,
      default: () => {}
    }
  },
  computed: {
    url() {
      return require(`~/static/${this.imgSrc}`)
    }
  }
}
</script>
