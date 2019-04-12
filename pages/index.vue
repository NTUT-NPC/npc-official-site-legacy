<template>
  <div class="container">
    <div class="main">
      <div class="main_describe">
        <div class="main__club_name">
          <h2>北科</h2>
          <h2 class="main_title">
            程式設計研究社
          </h2>
          <button class="main__register">
            加入我們
          </button>
        </div>
      </div>
      <logo class="npc_big_logo" />
    </div>
    <div class="second_body">
      <div class="second_title">
        <p>為甚麼加入我們？</p>
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
import Logo from '@/components/Npc_logo.vue'
export default {
  components: {
    History,
    Logo
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
  justify-content: space-around
  align-items: center
  .main_title
    font-size: 72px
  .main_describe
    display: flex
    align-items: center
  .main__register
    margin-top: 20px
    background-color: #0c1214
    border: 1px solid orange
    border-radius: 24px
    color: orange
    padding: 8px 12px
    text-align: center
    font-size: 18px
    &:hover
      cursor: pointer
      background: orange
      color: white
      animation: pulse 1s infinite
.second_body
  display: flex
  flex-direction: column
  align-items: center
  .second_title
    font-size: 50px
  .body_cards
    display: flex
    li
      list-style-type: none
    .card
      margin-left: 100px
.time_line
  margin-top: 50px
.npc_big_logo
  svg
    width: 300px
    height: 300px

$main-color: #FFB945

@keyframes pulse
  0%
    transform: scale(1)
  50%
    transform: scale(1.1)
    box-shadow: 0px 0px 0px 5px rgba($main-color, 0)
  100%
    transform: scale(1)
    box-shadow: 0px 0px 0px 15px rgba($main-color, 0)

</style>
