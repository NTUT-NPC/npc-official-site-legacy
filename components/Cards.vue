<template>
  <div class="card-container">
    <ul class="card">
      <li>
        <img src="../static/idea_cometure.png" alt="" class="icon">

        <div class="title">
          <p>實現你的創意</p>
        </div>
      </li>
      <li>
        <img src="../static/learning_source.png" alt="" class="icon">
        <div class="title">
          <p>許多學習資源</p>
        </div>
      </li>
      <li>
        <img src="../static/partnner.png" alt="" class="icon">
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
    .card
      display: flex
      justify-content: space-between
      align-items: center
      li
        list-style-type: none
        .title
          display: flex
          justify-content: center
          margin-top: 20px
        img
          width: 180px
          height: 180px
    .title
      font-size: 2rem
</style>
