<template>
  <div class="main__container">
    <el-dialog
      :visible.sync="centerDialogVisible"
      :show-close="false"
      width="25%"
    >
      <login @dismiss="dismissModal" />
    </el-dialog>
    <div class="main_describe">
      <div class="main__club_name hidden-sm-and-down">
        <h1>北科</h1>
        <h2 class="main_title">
          程式設計研究社
        </h2>
        <button
          v-if="!this.$store.state.isLogin"
          class="main__register"
          @click="showModal"
        >
          加入我們
        </button>
        <button
          v-else
          class="main__register"
          @click="logOut"
        >
          登出
        </button>
      </div>
    </div>
    <div class="npc_big_logo">
      <logo />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.main__container
  height: 100vh
  display: flex
  justify-content: center
.npc_big_logo
  display: flex
  justify-content: center
  align-items: center
  /deep/ svg
    max-width: 400px
    max-height: 400px
    width: 80vw
    height: 80vw
.main
  height: 80vh
  width: 100%
  display: flex
  justify-content: space-around
  align-items: center
.main__club_name
  margin-right: 80px
.main_title
  font-size: 4rem
.main_describe
  display: flex
  align-items: center
.main__register
  margin-top: 20px
  background-color: #FAB24C
  border: 1px solid orange
  border-radius: 24px
  color: white
  padding: 8px 12px
  text-align: center
  font-weight: 1000
  font-size: 1.3rem
  &:hover
    cursor: pointer
    color: white
    animation: pulse 1s infinite
</style>

<script>

import Logo from '@/components/NpcLogo.vue'
import Login from '@/components/Login.vue'
export default {
  components: {
    Logo,
    Login
  },
  data() {
    return {
      centerDialogVisible: false
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOut')
    },
    showModal() {
      this.centerDialogVisible = true
    },
    dismissModal() {
      this.centerDialogVisible = false
    }
  }
}
</script>
