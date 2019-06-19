<template>
  <div class="container">
    <main-page />
    <div class="second_body section">
      <cards />
    </div>
    <div class="section">
      <h2 class="section__title">
        我們平常都在幹嘛呢？
      </h2>
      <what-we-do img-src="社聚.jpg" title="社聚" content="定期在學校社辦聚會，沒是寫寫程式一起討論。培養社員間的感情" :bool="true" />
      <what-we-do img-src="107-1_MLCC上課.jpg" title="校外進修" content="有空參加校外的課程，在課餘時間精進自己，並將學習的新知教導給社員" :bool="false" />
      <what-we-do img-src="演算法比賽-1.jpg" title="校外比賽" content="參加校外比賽，增加自己比賽的經歷，並且增廣見聞" :bool="true" />
    </div>
  </div>
</template>

<script>

import Cards from '@/components/ClubFeature.vue'
import WhatWeDo from '@/components/WhatWeDo.vue'
import MainPage from '@/components/MainPage.vue'

export default {
  components: {
    MainPage,
    Cards,
    WhatWeDo
  },
  data() {
    return {
      centerDialogVisible: true
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
    margin: 0 !important
  /deep/ .el-dialog__body
    padding: 0 !important
    .container
      padding: 0 !important
  /deep/ .el-dialog--center .el-dialog__body
    padding: 0 !important
  .section
    display: flex
    flex-direction: column
  .__title
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
  .second_body
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
  .section__title
    text-align: center
  .time_line
    margin-top: 50px
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
