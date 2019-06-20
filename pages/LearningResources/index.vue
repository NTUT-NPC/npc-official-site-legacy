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
    <div class="body__row hidden-sm-and-down">
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

    <div class="cards hidden-sm-and-down">
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
          <v-card-title
            primary-title
            class="justify-center"
          >
            <div>
              <div class="headline ">
                {{ language.name }}
              </div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>
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
          <v-card-title
            primary-title
            class="justify-center"
          >
            <div>
              <div class="headline">
                {{ frontEnd.name }}
              </div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>
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
          <v-card-title
            primary-title
            class="justify-center"
          >
            <div class="headline">
              {{ i.name }}
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>
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
        >
          <v-img
            :src="other.src"
            aspect-ratio="1"
          />
          <v-card-title
            primary-title
            class="justify-center"
          >
            <div class="headline">
              {{ other.name }}
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>
        </el-card>
      </div>
    </div>
    <div class="cards hidden-md-and-up">
      <div class="small__cards">
        <el-card
          v-for="(language, id) in languages"
          :key="id"
          v-inview:parent="'animate'"
          v-inview:animate="'fadeInUp'"
          shadow="hover"
          class="box-card small__card"
        >
          <div class="small__card-contain">
            <v-img
              :src="language.src"
              aspect-ratio="1"
              max-width="150px"
            />
            <v-card-title
              primary-title
              class="justify-center"
            >
              <div class="headline">
                {{ language.name }}
              </div>
            </v-card-title>
            <div class="small__card-button">
              <v-btn color="#FCA222">
                了解更多
              </v-btn>
            </div>
          </div>
        </el-card>

        <el-card
          v-for="(i, id) in ios"
          :key="id"
          v-inview:parent="'animate'"
          v-inview:animate="'fadeInUp'"
          shadow="hover"
          class="box-card small__card"
        >
          <div class="small__card-contain">
            <v-img
              :src="i.src"
              aspect-ratio="1"
              max-width="150px"
            />
            <v-card-title
              primary-title
              class="justify-center"
            >
              <div class="headline">
                {{ i.name }}
              </div>
            </v-card-title>
            <div class="small__card-button">
              <v-btn color="#FCA222">
                了解更多
              </v-btn>
            </div>
          </div>
        </el-card>

        <el-card
          v-for="(frontEnd, id) in frontEnds"
          :key="id"
          v-inview:parent="'animate'"
          v-inview:animate="'fadeInUp'"
          shadow="hover"
          class="box-card small__card"
        >
          <div class="small__card-contain">
            <v-img
              :src="frontEnd.src"
              aspect-ratio="1"
              max-width="150px"
            />
            <v-card-title
              primary-title
              class="justify-center"
            >
              <div class="headline">
                {{ frontEnd.name }}
              </div>
            </v-card-title>
            <div class="small__card-button">
              <v-btn color="#FCA222">
                了解更多
              </v-btn>
            </div>
          </div>
        </el-card>

        <el-card
          v-for="(other, id) in others"
          :key="id"
          v-inview:parent="'animate'"
          v-inview:animate="'fadeInUp'"
          shadow="hover"
          class="box-card small__card"
        >
          <div class="small__card-contain">
            <v-img
              :src="other.src"
              aspect-ratio="1"
              max-width="150px"
            />
            <v-card-title
              primary-title
              class="justify-center"
            >
              <div class="headline">
                {{ other.name }}
              </div>
            </v-card-title>
            <div class="small__card-button">
              <v-btn color="#FCA222">
                了解更多
              </v-btn>
            </div>
          </div>
        </el-card>
      </div>
    </div>
    <div class="final__row">
      <div class="final__block">
        <h2 class="row__text">
          課程許願池
        </h2>
        <p>找不到想要的課程嗎</p>
        <v-btn
          class="final__button"
          color="#FCA222"
        >
          <p>許願</p>
        </v-btn>
      </div>

      <div class="row__seperate-line" />

      <div class="final__block">
        <h2 class="row__text">
          分享獨門祕技
        </h2>
        <p>分享自己的寶典給社團</p>
        <v-btn
          class="final__button"
          color="#FCA222"
        >
          <p>分享</p>
        </v-btn>
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
        { name: 'git', src: require('~/static/learning/git.png') },
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
        { name: 'cocoapods', src: require('~/static/learning/cocoapods.png') }
      ],
      others: [
        { name: 'flutter', src: require('~/static/learning/flutter.png') },
        { name: 'line bot', src: require('~/static/learning/line.png') },
        { name: '資安', src: require('~/static/learning/hacker.png') },
        { name: '日本語', src: require('~/static/learning/japanese.png') }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

.container
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

.body__carousal
  margin-top: 70px
  margin-left: 0px
  width: 100%

.carousal__image
  object-fit: cover

.body__row
  border: 1px solid gray
  padding: 30px
  margin-top: 70px
  width: 600px
  height: 150px
  border-radius: 10px
  display: flex
  justify-content: center
  align-items: center

.row__text
  margin-left: 20px
  margin-right: 20px
  font-size: 2rem
  font-weight: 500

.row__seperate-line
  width: 2px
  background-color: gray
  height: 60px

.resources__title h2
  font-size: 4rem
  margin-top: 80px
  color: white

.cards
  display: flex
  justify-content: center
  align-items: center

.resources__cards
  margin: 1vw 1vw
  opacity: 0
  animation-delay: .3s
  animation-duration: 1s

.resources__card
  width: 200px
  height: 300px
  margin: 20px 10px
  .text
    font-size: 14px

.resources__col
  margin-top: 200px

.final__row
  // border: 1px solid gray
  padding: 30px
  margin-top: 70px
  margin-bottom: 70px
  padding-top: -10px
  width: 600px
  height: 150px
  border-radius: 10px
  display: flex
  justify-content: center
  align-items: center

@media screen and (max-width: 480px)
  .final__row
    width: 400px
    h2
      font-size: 1.5rem

.final__block
  display: flex
  flex-direction: column
  align-items: center
  .final__button
    font-size: 16px
    margin-top: 30px
    border-radius: 3vh
    &:hover
      cursor: pointer
      color: white
      animation: pulse 1s infinite
.small__cards
  position: relative
  display: flex
  flex-direction: column
  align-items: center

.small__card
  margin-top: 30px
  width: 30%
  height: 200px
  min-width: 400px
  min-height: 10vw

.small__card-contain
  display: flex
  flex-direction: row

.small__card-button
  position: absolute
  margin: 120px 5px 10px 270px

</style>
