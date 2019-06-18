<template>
  <div class="container">
    <div class="body__carousal">
      <el-carousel
        :interval="5000"
        arrow="always"
        height="30vw"
      >
        <el-carousel-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-img
            :src="item.src"
            class="carousal__image"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="body__row">
      <p class="row__text">
        學習永遠不設限
      </p>
      <div class="row__seperate-line" />
      <p class="row__text">
        社團線上學習資源
      </p>
      <div class="row__seperate-line" />
      <p class="row__text">
        變大神從學習開始
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LearningResources',
  data() {
    return {
      items: [
        { src: require('~/static/activities/MLCC.jpg') },
        { src: require('~/static/activities/npc_meet.png') },
        { src: require('~/static/activities/python_basic.png') }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

.container
  display: flex
  flex-direction: column
  //justify-content: center
  align-items: center

.body__carousal
  margin-top: 70px
  margin-left: 0px
  width: 100%
  border: 1px solid white
.carousal__image
  object-fit: cover

.body__row
  border: 1px solid gray
  margin-top: 70px
  width: 500px
  height: 150px
  border-radius: 10px
  display: flex
  justify-content: center
  align-items: center

.row__text
  margin-left: 15px
  margin-right: 15px
  font-size: 2rem
  font-weight: 500

.row__seperate-line
  float: left
  width: 2px
  background-color: gray
  height: 60px

</style>
