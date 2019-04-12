<template>
  <div class="container">
    <div class="main">
      <div class="main_describe">
        <div class="main__club_name">
          <p>北科</p>
          <h2>程式設計研究社</h2>
          <button class="main__register">
            加入我們
          </button>
        </div>
      </div>
      <img alt="npc_big_logo" class="npc_big_logo">
    </div>
    <div class="second_body">
      <div class="second_title">
        <p>為甚麼學程式</p>
      </div>
      <div class="second_body_container">
        <ul class="body_cards">
          <li v-for="(card,index) in second_body" :key="index">
            <div class="card">
              <div class="card_img">
                <img :src="card.img" alt="">
              </div>
              <div class="content">
                <p>{{ card.text }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <history class="time_line" />
  </div>
</template>

<script>

import History from '@/components/History.vue'
export default {
  components: {
    History
  },
  data() {
    return {
      second_body: [
        { text: 'first card content', img: '#' },
        { text: 'second card content', img: '#' },
        { text: 'third card content', img: '#' }
      ]
    }
  }
}
</script>

<style lang="sass">
*
  padding: 0
  margin: 0
.main
  height: 80vh
  display: flex
  postion: relative
  .main_describe
    flex: 1
    display: flex
    align-items: center
    margin-left: 50px
  .npc_big_logo
    flex: 1
  .main__register
    margin-top: 20px
    background-color: #0c1214
    border: 1px solid yellow
    border-radius: 24px
    color: white
    padding: 5px 10px
    text-align: center
    font-size: 16px
    &:hover
      cursor: pointer
.second_body
  display: flex
  flex-direction: column
  align-items: center
  .body_cards
    display: flex
    li
      list-style-type: none
    .card
      margin-left: 100px
.time_line
  margin-top: 50px
h2
  color: white
p
  color: white
.container__main__club_name
  color: white
</style>
