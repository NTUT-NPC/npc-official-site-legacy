<template>
  <v-timeline>
    <v-timeline-item
      v-for="(year, index) in years"
      :key="index"
      :color="year.color"
      small
    >
      <template v-slot:opposite>
        <span
          class="headline font-weight-bold text__color"
          v-text="item.date"
        />
        <vue-card :item="item" />
      </template>
    </v-timeline-item>
  </v-timeline>
</template>

<style lang="sass" scoped>
  .v-timeline-item
    width: 1200px
  .text__color
    color: #22b590
</style>

<script>
import VueCard from '@/components/VueCard.vue'

export default {
  components: {
    VueCard
  },
  data: () => ({
    items: [
      {
        title: '標題一',
        date: '2018/04/23',
        content: '內容一...',
        imgSrc: 'learning_source.png'
      },
      {
        title: '標題二',
        date: '2018/04/22',
        content: '內容二...',
        imgSrc: 'learning_source.png'
      },
      {
        title: '標題三',
        date: '2018/04/21',
        content: '內容三...',
        imgSrc: 'learning_source.png'
      },
      {
        title: '標題四',
        date: '2018/04/21',
        content: '內容四...',
        imgSrc: 'learning_source.png'
      }
    ] }),
  computed: {
    url() {
      return require(`~/static/${this.imgSrc}`)
    }
  }
}
</script>
