<template>
  <div class="container">
    <div>
      <el-dialog
        :visible.sync="centerDialogVisible"
        width="30%"
        center
      >
        <login />
      </el-dialog>
    </div>
    <div class="main">
      <div class="main_describe">
        <div class="main__club_name">
          <h1>北科</h1>
          <h2 class="main_title">
            程式設計研究社
          </h2>
          <button class="main__register" @click="centerDialogVisible = true">
            加入我們
          </button>
        </div>
      </div>
      <div class="np_big_logo">
        <logo />
      </div>
    </div>
    <div class="second_body section">
      <cards />
    </div>
    <div class="daily section">
      <h2 class="section__title">
        我們平常都在幹嘛呢？
      </h2>
      <what-we-do img-src="社聚.jpg" title="社聚" content="定期在學校社辦聚會，沒是寫寫程式，與大家一起討論。不時還會玩點桌遊，培養社員間的感情" :bool="true" />
      <what-we-do img-src="107-1_MLCC上課.jpg" title="校外進修" content="有空參加校外的課程，在課餘時間精進自己，並將學習的新知教導給社員" :bool="false" />
      <what-we-do img-src="演算法比賽-1.jpg" title="校外比賽" content="不時參加校外比賽，增價自己比賽的經歷，並且增廣見聞，看看外面的世界實力如何" :bool="true" />
    </div>
    <div class="experience section">
      <h2 class="section__title">
        經歷
      </h2>
      <history />
    </div>
  </div>
</template>

<script>

import History from '@/components/History.vue'
import Logo from '@/components/NpcLogo.vue'
import Cards from '@/components/ClubFeature.vue'
import WhatWeDo from '@/components/WhatWeDo.vue'
import Login from '@/components/Login.vue'
export default {
  components: {
    History,
    Logo,
    Cards,
    WhatWeDo,
    Login
  },
  data() {
    return {
      isModalVisible: false,
      centerDialogVisible: false
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    }
  }
}
</script>

<style lang="sass" scoped>
  /deep/ .el-dialog
    background:  #c8c8c8 !important
    padding: 0 !important
  /deep/ .el-dialog__headerbtn
    z-index: 2005 !important
    color: white
  /deep/ .el-dialog__header
    padding: 0 !important
  /deep/ .el-dialog__body
    padding: 0 !important
    .container
      padding: 0 !important
  /deep/ .el-dialog--center .el-dialog__body
    padding: 0 !important
  .section
    margin: 100px  0 0 0
    display: flex
    flex-direction: column
    &__title
      font-size: 3rem
      margin: 0 auto 32px auto
      text-align: center
      letter-spacing: 4px
      padding: 4px
      display: inline
      font-weight: 700

  .container
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
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
        background-color: #0c1214
        border: 1px solid orange
        border-radius: 24px
        color: orange
        padding: 8px 12px
        text-align: center
        font-size: 18px
        &:hover
          cursor: pointer
          background: orange
          color: white
          animation: pulse 1s infinite

  .second_body
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
    .second_title
      font-size: 3rem
  .time_line
    margin-top: 50px
  .npc_big_logo
    svg
      width: 300px
      height: 300px
  .main__login
    width: 525px
    position: relative
    z-index: 10

  $main-color: #FFB945

  @keyframes pulse
    0%
      transform: scale(1)
    50%
      transform: scale(1.1)
      box-shadow: 0px 0px 0px 5px rgba($main-color, 0)
    100%
      transform: scale(1)
      box-shadow: 0px 0px 0px 15px rgba($main-color, 0)

</style>
