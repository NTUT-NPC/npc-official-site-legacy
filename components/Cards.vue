<template>
  <div
    v-inview:parent="'animate'"
    v-inview:animate="'fadeIn'"
    class="card-container"
  >
    <ul class="card">
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
  .card
    display: flex
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
  img
    width: 70%
    height: 70%
  .title
    font-size: 2rem
</style>
