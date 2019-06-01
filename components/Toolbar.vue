<template>
  <div fixed="true">
    <v-toolbar class="hidden-sm-and-down web" flat color="#0c1214" fixed>
      <img
        class="contaner__logo"
        src="../static/logo_normal_word.png"
      >
      <v-spacer />
      <nuxt-link to="/">
        <button>
          <h3>
            首頁
          </h3>
        </button>
      </nuxt-link>
      <nuxt-link to="/activities/">
        <button
          src="#"
        >
          <h3>
            活動
          </h3>
        </button>
      </nuxt-link>
      <button
        class="toolbar__link__about_me"
        src="#"
      >
        <h3>學習資源</h3>
      </button>
      <nuxt-link to="/aboutMe/">
        <button
          src="#"
        >
          <h3>
            關於
          </h3>
        </button>
      </nuxt-link>
      <nuxt-link to="/">
        <button
          src="#"
        >
          <h3>
            登入
          </h3>
        </button>
      </nuxt-link>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      class="hidden-md-and-up"
      fixed
      background-color="#0c1214"
    /><v-toolbar class="hidden-md-and-up" flat dark color="#0c1214">
      <v-toolbar-side-icon class="burger_size" @click.stop="drawer = !drawer" />
    </v-toolbar>
  </div>
</template>

<style lang="sass" scoped>
  .contaner__logo
    width: 70px
    height: 70px
  .web button
    padding: 15px 32px
    text-align: center
    border-bottom: solid 2px #0c1214
    transition: 0.5s
    outline: none
  a
    text-decoration: none
  .web button:hover
    cursor: pointer
    border-bottom: solid 2px white
  /deep/ .burger_size i
    font-size: 36px
  .v-navigation-drawer
    background-color: #0c1214

</style>

<script>
export default {
  data: () => ({
    drawer: false
  })

}
</script>
