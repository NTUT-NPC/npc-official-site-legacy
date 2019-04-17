<template>
  <div class="contaner">
    <img
      class="contaner__logo"
      src="../static/logo_normal_word.png"
    >
    <div class="contaner__middle" />
    <div class="contaner__toolbar">
      <div class="toolbar__link">
        <button
          class="toolbar__link__homepage"
          src="#"
        >
          <nuxt-link to="/">
            <p>
              首頁
            </p>
          </nuxt-link>
        </button>
        <button
          class="toolbar__link__about_me"
          src="#"
        >
          <nuxt-link to="/activities/">
            <p>
              活動
            </p>
          </nuxt-link>
        </button>
        <button
          class="toolbar__link__about_me"
          src="#"
        >
          <p>學習資源</p>
        </button>
        <button
          class="toolbar__link__about_me"
          src="#"
        >
          <nuxt-link to="/aboutMe/">
            <p>
              關於
            </p>
          </nuxt-link>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  p
    margin: 0;
  .contaner
    display: flex
    height: 10%
    width: 100%
    .contaner__logo
      width: 80px
      height: 80px
      margin-left: 25px
    .contaner__middle
      height: 100%
      flex: 3
    .contaner__toolbar
      position: relative
      flex: 2
      display: flex
      .toolbar__link
        height: 100%
        position: relative
        left: 20%
        display: flex
        align-items: center
  button
    background-color: #0c1214
    border: none
    color: white
    padding: 15px 32px
    text-align: center
    font-size: 16px
    border-bottom: solid 2px #0c1214
    transition: 0.5s
    outline: none
    a
      text-decoration: none

  button:hover
      cursor: pointer
      border-bottom: solid 2px white
</style>
