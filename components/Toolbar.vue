<template>
  <div class="contaner">
    <img
      class="contaner__logo"
      src="../static/logo_normal_word.png"
    >
    <div class="contaner__toolbar">
      <button
        class="toolbar__link__homepage"
        src="#"
      >
        <nuxt-link to="/">
          <h3>
            首頁
          </h3>
        </nuxt-link>
      </button>
      <button
        src="#"
      >
        <nuxt-link to="/activities/">
          <h3>
            活動
          </h3>
        </nuxt-link>
      </button>
      <button
        class="toolbar__link__about_me"
        src="#"
      >
        <h3>學習資源</h3>
      </button>
      <button
        class="toolbar__link__about_me"
        src="#"
      >
        <nuxt-link to="/aboutMe/">
          <h3>
            關於
          </h3>
        </nuxt-link>
      </button>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .contaner
    display: flex
    height: 15%
    width: 100%
    justify-content: space-between
  .contaner__logo
    width: 100px
    height: 100px
  .contaner__toolbar
    display: flex
  button
    padding: 15px 32px
    text-align: center
    border-bottom: solid 2px #0c1214
    transition: 0.5s
    outline: none
  a
    text-decoration: none

  button:hover
      cursor: pointer
      border-bottom: solid 2px white
</style>
