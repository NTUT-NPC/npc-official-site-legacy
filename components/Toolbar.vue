<template>
  <div class="container">
    <el-dialog
      :visible.sync="centerDialogVisible"
      :show-close="false"
      width="25%"
    >
      <login @dismiss="dismissModal" />
    </el-dialog>
    <v-toolbar
      class="hidden-sm-and-down web"
      flat
      color="#0c1214"
      fixed
    >
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
        <button src="#">
          <h3>
            活動
          </h3>
        </button>
      </nuxt-link>
      <button
        v-if="this.$store.state.isLogin"
        class="toolbar__link__about_me"
        src="#"
      >
        <h3>學習資源</h3>
      </button>
      <nuxt-link to="/aboutMe/">
        <button src="#">
          <h3>
            關於
          </h3>
        </button>
      </nuxt-link>
      <nuxt-link to="/">
        <button
          v-if="this.$store.state.isLogin"
          src="#"
          @click="logOut"
        >
          <h3>
            登出
          </h3>
        </button>
        <button
          v-else
          src="#"
          @click="showModal"
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
      right
      background-color="#0c1214"
    >
      <v-list
        class="pa-1"
        dark
      >
        <v-list-tile
          v-if="drawer"
          @click.stop="drawer = !drawer"
        >
          <v-list-tile-action>
            <v-icon>
              chevron_right
            </v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile
          href="#"
          tag="div"
        >
          <v-list-tile-action>
            <v-icon>
              person
            </v-icon>
          </v-list-tile-action>
          <h3>登入</h3>
        </v-list-tile>
        <v-list-tile
          href="/"
          tag="div"
        >
          <v-list-tile-action>
            <v-icon>
              home
            </v-icon>
          </v-list-tile-action>
          <h3>首頁</h3>
        </v-list-tile>
        <v-list-tile
          href="/activities/"
          tag="div"
        >
          <v-list-tile-action>
            <v-icon>
              insert_invitation
            </v-icon>
          </v-list-tile-action>
          <h3>活動</h3>
        </v-list-tile>
        <v-list-tile
          href="/aboutMe/"
          tag="div"
        >
          <v-list-tile-action>
            <v-icon>
              supervised_user_circle
            </v-icon>
          </v-list-tile-action>
          <h3>關於</h3>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      class="toolbar hidden-md-and-up"
      flat
      fixed
      dark
      color="#0c1214"
    >
      <img
        class="contaner__logo"
        src="../static/logo_normal_word.png"
      >
      <p>北科程式設計研究社</p>
      <v-spacer />
      <v-toolbar-side-icon
        class="burger_size"
        @click.stop="drawer = !drawer"
      />
    </v-toolbar>
  </div>
</template>

<style lang="sass" scoped>
  /deep/ .el-dialog
    background:  #c8c8c8 !important
    padding: 0 !important
  /deep/ .el-dialog__headerbtn
    z-index: 2005 !important
    color: white
  /deep/ .el-dialog__header
    padding: 0 !important
    margin: 0 !important
  /deep/ .el-dialog__body
    padding: 0 !important
  /deep/ .container
    padding: 0 !important
  /deep/ .el-dialog--center .el-dialog__body
    padding: 0 !important
  .toolbar
    padding: 10px
  .container
    display: flex
    justify-content: center
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
  p
    font-size: 1.3rem
  .web button:hover
    cursor: pointer
    border-bottom: solid 2px white
  /deep/ .burger_size i
    font-size: 36px
  .v-navigation-drawer
    background-color: #0c1214

</style>

<script>

import Login from '@/components/Login.vue'
export default {
  components: {
    Login
  },
  data: () => ({
    drawer: false,
    centerDialogVisible: false
  }),
  methods: {
    showModal() {
      this.centerDialogVisible = true
    },
    dismissModal() {
      this.centerDialogVisible = false
    },
    logOut() {
      this.$store.dispatch('logOut')
    }
  }

}
</script>
