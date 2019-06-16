<template>
  <div
    v-inview:parent="'animate'"
    v-inview:animate="'fadeIn'"
    class="card-container"
  >
    <div class="section__title">
      <h2>為甚麼加入我們？</h2>
    </div>
    <ul class="web_card feature hidden-sm-and-down">
      <li>
        <img
          src="../static/idea_cometure.png"
          alt=""
        >

        <div class="title">
          <p>實現你的創意</p>
        </div>
      </li>
      <li>
        <img src="../static/learning_source.png" alt="">
        <div class="title">
          <p>許多學習資源</p>
        </div>
      </li>
      <li>
        <img src="../static/partnner.png" alt="">
        <div class="title">
          <p>帶著你進步的夥伴</p>
        </div>
      </li>
    </ul>
    <ul class="phone_card feature hidden-md-and-up">
      <li>
        <img
          src="../static/idea_cometure.png"
          alt=""
        >

        <div class="title">
          <p>實現你的創意</p>
        </div>
      </li>
      <li>
        <img src="../static/learning_source.png" alt="">
        <div class="title">
          <p>許多學習資源</p>
        </div>
      </li>
      <li>
        <img src="../static/partnner.png" alt="">
        <div class="title">
          <p>帶著你進步的夥伴</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
  .card-container
    width: 100%
    opacity: 0
    animation-direction: 1s
  .feature
    display: flex
    justify-content: center
  .web_card
    img
      width: calc(100px + 5vw)
      height: calc(100px + 5vw)
      margin: 50px
  .phone_card
    flex-direction: column
    img
      width: 35vw
      height: 35vw
  li
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    list-style-type: none
    margin: 5% 5%
  .title
    text-align: center
    margin-top: 20px
    font-size: 2rem
  .section__title
    display: flex
    justify-content: center
    font-size: 3rem
    font-weight: 500
</style>
