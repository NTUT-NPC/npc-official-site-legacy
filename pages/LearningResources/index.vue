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
    <div class="resources__title">
      <h2>猜你想學</h2>
    </div>

    <div class="cards">
      <div
        v-inview:parent="'animate'"
        v-inview:animate="'fadeIn'"
        class="resources__cards"
      >
        <el-card
          v-for="(language, id) in languages"
          :key="id"
          shadow="hover"
          class="box-card resources__card"
        >
          <v-img
            :src="language.src"
            aspect-ratio="1"
          />
        </el-card>
      </div>

      <div
        v-inview:parent="'animate'"
        v-inview:animate="'fadeIn'"
        class="resources__cards resources__col"
      >
        <el-card
          v-for="(frontEnd, id) in frontEnds"
          :key="id"
          shadow="hover"
          class="box-card resources__card"
        >
          <v-img
            :src="frontEnd.src"
            aspect-ratio="1"
          />
        </el-card>
      </div>

      <div
        v-inview:parent="'animate'"
        v-inview:animate="'fadeIn'"
        class="resources__cards"
      >
        <el-card
          v-for="(i, id) in ios"
          :key="id"
          shadow="hover"
          class="box-card resources__card"
        >
          <v-img
            :src="i.src"
            aspect-ratio="1"
          />
        </el-card>
      </div>

      <div
        v-inview:parent="'animate'"
        v-inview:animate="'fadeIn'"
        class="resources__cards resources__col"
      >
        <el-card
          v-for="(other, id) in others"
          :key="id"
          shadow="hover"
          class="box-card resources__card"
        />
      </div>
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
      ],
      languages: [
        { name: 'c++', src: require('~/static/learning/cpp.png') },
        { name: 'python', src: require('~/static/learning/python.png') },
        { name: 'golang', src: require('~/static/learning/golang.jpeg') },
        { name: 'git version control', src: require('~/static/learning/git.png') },
        { name: 'ruby', src: require('~/static/learning/ruby.png') }
      ],
      frontEnds: [
        { name: 'vue.js', src: require('~/static/learning/vue.png') },
        { name: 'react.js', src: require('~/static/learning/react.png') },
        { name: 'angular', src: require('~/static/learning/angular.png') },
        { name: 'j query', src: require('~/static/learning/jquery.png') }
      ],
      ios: [
        { name: 'Swift', src: require('~/static/learning/swift.png') },
        { name: 'RxSwift', src: require('~/static/learning/rxswift.png') },
        { name: 'objective-c', src: require('~/static/learning/objectivec.png') },
        { name: 'cocoaPods', src: require('~/static/learning/cocoapods.png') }
      ],
      others: [
        { name: 'flutter' },
        { name: 'line bot' },
        { name: 'Security' },
        { name: 'Japanese' }
      ]
    }
  },
  computed: {
    cardsCol(index) {
      return index % 2 === 0 ? '' : ''
    }
  }
}
</script>

<style lang="sass" scoped>

.container
  display: flex
  flex-direction: column
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
  padding: 30px
  margin-top: 70px
  width: 550px
  height: 150px
  border-radius: 10px
  display: flex
  justify-content: center
  align-items: center

.row__text
  margin-left: 20px
  font-size: 2rem
  font-weight: 500

.row__seperate-line
  float: left
  width: 2px
  background-color: gray
  height: 60px

.resources__title h2
  font-size: 4rem
  margin-top: 50px
  color: white

.cards
  display: flex

.resources__cards
  margin: 1vw 1vw
  opacity: 0
  animation-delay: .3s
  animation-duration: 1s

.resources__card
  width : 200px
  height: 300px
  margin: 20px 10px
  .text
    font-size: 14px

.resources__col
  margin-top: 200px

</style>
