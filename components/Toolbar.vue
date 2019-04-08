<template>
  <div class="toolbar">
    <img class="toolbar__logo" src="#">
    <div class="toolbar__link">
      <button class="toolbar__link__homepage" src="#">
        homepage
      </button>
      <button class="toolbar__link__about_me" src="#">
        aboutme
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
  .toolbar
    display: flex
    height: 10%
    width: 100%
    background-color: #0c1214
    .toolbar__logo
      color: white
    .toolbar__link
      margin-left: 50px
      display: flex
      align-items: center
      justify-content: space-around
</style>
