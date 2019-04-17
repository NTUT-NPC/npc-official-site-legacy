<template>
  <v-timeline>
    <v-timeline-item
      v-for="(item, index) in items"
      :key="index"
      v-inview:parent="'animate'"
      v-inview:animate="'fadeInUp'"
      color="orange"
      small
    >
      <template v-slot:opposite>
        <span
          class="headline font-weight-bold text__color"
          v-text="item.date"
        />
        <vue-card class="card__content" :item="item" />
      </template>
    </v-timeline-item>
  </v-timeline>
</template>

<style lang="sass" scoped>
  .v-timeline-item
    width: 1200px
    opacity: 0
    animation-direction: 1s
    display: flex !important
  .text__color
    margin-bottom: 50px
    color: orange
  .card__content
    margin-top: 30px
  .v-timeline::before
    background-color: white
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
        title: '社員博覽會',
        date: '106學年度上學期',
        content: '這是我們創社以來，第一次的社員博覽會，找到了許多有共同目標的夥伴們',
        imgSrc: '106社團博覽會_171123_0005.jpg'
      },
      {
        title: '光大創創workshop',
        date: '106學年度下學期',
        content: '這是下學期我們與光大創創所合開的一堂專攻班，辦給沒有程式基礎的人，推廣程式教育',
        imgSrc: '106-2 光大創創workshop-1.jpg'
      },
      {
        title: '參觀Google台灣總部',
        date: '107學年度上學期',
        content: '有機會能夠進入台灣Google總部，位於101內不是所有人都能夠有幸參觀到的。',
        imgSrc: '107-1期末google參觀.jpg'
      },
      {
        title: '唐鳳演講',
        date: '107學年度上學期',
        content: '我們學期末與學校一起合作，邀請唐鳳來為我們演講，唐鳳精闢的演講讓大家都印象深刻',
        imgSrc: '107-1最後唐鳳.JPG'
      },
      {
        title: '社員大會',
        date: '107學年度下學期',
        content: '我們這一次的社員大會準備得十分齊全，讓各位社員了解到我們社團的營運，與成為社員的許許多多福利',
        imgSrc: '108-1第一次社員大會.JPG'
      }
    ] }),
  computed: {
    url() {
      return require(`~/static/${this.imgSrc}`)
    }
  }
}
</script>
