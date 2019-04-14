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
    </div>
    <cards />
    <div class="title">
      <p>我們平常都在幹嘛呢？</p>
    </div>
    <what-we-do img-src="learning_source.png" title="社聚" content="let's have fun" :bool="true" />
    <what-we-do img-src="learning_source.png" title="校外進修" content="let's have fun" :bool="false" />
    <what-we-do img-src="learning_source.png" title="社團出遊" content="let's have fun" :bool="true" />
    <what-we-do img-src="learning_source.png" title="校外比賽" content="let's have fun" :bool="false" />
    <what-we-do img-src="learning_source.png" title="合作開發" content="let's have fun" :bool="true" />
    <div class="title">
      <p>經歷</p>
    </div>
    <history />
  </div>
</template>

<script>

import History from '@/components/History.vue'
import Logo from '@/components/Npc_logo.vue'
import Cards from '@/components/Cards.vue'
import WhatWeDo from '@/components/WhatWeDo.vue'
export default {
  components: {
    History,
    Logo,
    Cards,
    WhatWeDo
  }
}
</script>

<style lang="sass">
  *
    padding: 0
    margin: 0
  .container
    display: flex
    flex-direction: column
    align-items: center
    .main
      height: 80vh
      display: flex
      justify-content: space-around
      align-items: center
      .main_title
        font-size: 4rem
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
    .title
      display: flex
      margin: 50px 0px 80px 0px
      font-size: 3rem
      justify-content: center
      align-items: center
  .second_body
    display: flex
    flex-direction: column
    align-items: center
    .second_title
      font-size: 3rem
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
