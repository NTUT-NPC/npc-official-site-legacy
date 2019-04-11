<template>
  <div class="toolbar">
    <img class="toolbar__logo" src="#">
    <div class="toolbar__link">
      <button class="toolbar__link__homepage" src="#">
        首頁
      </button>
      <button class="toolbar__link__about_me" src="#">
        關於我們
      </button>
      <button class="toolbar__link__about_me" src="#">
        學習資源
      </button>
      <button class="toolbar__link__about_me" src="#">
        登入
      </button>
    </div>
  </div>
</template>

<style lang="sass">

  button
    background-color: #0c1214
    border: none
    color: white
    padding: 15px 32px
    text-align: center
    font-size: 16px
    border-bottom: solid 2px #0c1214
    transition: 0.5s
  button:hover
      cursor: pointer
      border-bottom: solid 2px white
  .toolbar
    position: relative
    display: flex
    height: 10%
    width: 100%
    background-color: #0c1214
    .toolbar__logo
      color: white
    .toolbar__link
      position: relative
      left: 60%
      margin-left: 50px
      display: flex
      align-items: center
      justify-content: space-around
</style>
