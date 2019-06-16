<template>
  <div>
    <div
      class="body__carousal hidden-sm-and-down"
    >
      <el-carousel
        type="card"
        :interval="5000"
        height="20vw"
      >
        <el-carousel-item
          v-for="(activity, index) in carousalActivities"
          :key="index"
        >
          <v-img
            :src="activity.image"
            class="carousal__image"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="body__title">
      <h2>Projects</h2>
    </div>
    <div
      v-inview:parent="'animate'"
      v-inview:animate="'fadeIn'"
      class="project__cards"
    >
      <el-card
        v-for="(project, index) in projects"
        :key="index"
        shadow="hover"
        class="box-card project__card"
        @click.native="router(project.link)"
      >
        <div slot="header">
          <strong>{{ project.name }}</strong>
        </div>
        <div class="github__buttons">
          <gh-btns-star
            :slug="project.name"
          />
          <gh-btns-fork
            :slug="project.name"
          />
        </div>
        <div class="github__description">
          <p class="text__style">
            {{ project.description }}
          </p>
        </div>
      </el-card>
    </div>
    <div class="body__title">
      <h2>Activities</h2>
    </div>
    <div
      v-inview:parent="'animate'"
      v-inview:animate="'fadeIn'"
      class="activities__cards"
    >
      <el-card
        v-for="(activitie, index) in activities"
        :key="index"
        shadow="hover"
      >
        <div slot="header">
          <strong>{{ activitie.name }}</strong>
        </div>
        <div class="activities__description">
          <p class="text__style">{{ activitie.description }}</p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import inView from 'in-view'

export default {
  name: 'Activities',
  componetns: {
    inView
  },
  data() {
    return {
      aniMap: {
        wikisec: {
          card: true
        }
      },
      acfsec: [
        {
          name: 'card1',
          hidden: true
        },
        {
          name: 'card2',
          hidden: true
        }
      ],
      projects: [
        {
          name: 'NTUT-NPC/npc-official-site',
          link: 'https://github.com/NTUT-NPC/npc-official-site',
          description: 'It\'s the official web site of NPC ',
          stars: 1,
          forks: 0
        },
        {
          name: 'NTUT-NPC/TAT-IOS',
          link: 'https://github.com/NTUT-NPC/npc-official-site',
          description: 'ios app for Taipei Tech student',
          stars: 1,
          forks: 0
        },
        {
          name: 'NTUT-NPC/ntut-server',
          link: 'https://github.com/NTUT-NPC/npc-official-site',
          description: 'An API server for a series of application of Taipei Tech that write by NTUT Programming Club.',
          stars: 1,
          forks: 0
        },
        {
          name: 'NTUT-NPC/TAT-Android',
          link: 'https://github.com/NTUT-NPC/TAT-Android',
          description: 'An App for Taipei Tech Student. ',
          stars: 1,
          forks: 0
        }

      ],
      carousalActivities: [
        { image: require('~/static/activities/MLCC.jpg'), link: '' },
        { image: require('~/static/activities/npc_meet.png'), link: '' },
        { image: require('~/static/activities/python_basic.png'), link: '' }
      ],
      activities: [
        { name: 'MLCC',
          description:
            '如果你錯過上一次的課程，這一次的活動千萬別再錯過囉！' +
            '現在，在很多的領域中，都急需 AI 的人才，你還不跟上時代的浪潮嗎？' +
            '我們會用兩天的密集課程，來為大家介紹 Machine Learning 的原理，並實作自己的 AI 模型，並對資料進行預測及分析。'
        },
        { name: '社烤', description: '哇尬藝烤肉，拜託來啦' },
        { name: '社聚',
          description:
            '學程式找不到伴？程式不會不知道能問誰？放學後找不到事情做？' +
            '那就千萬別錯過我們程式設計社每週一的定期聚！' +
            '每週一我們會聚再一起寫程式、聊聊天，歡迎有興趣的人來找我們玩～'
        },
        { name: 'Python入門',
          description:
            '你覺得程式很遙遠無法企及嗎？' +
            '覺得程式很難不好入門嗎？' +
            '我們設計了一個關於資料處理及視覺化的 python 入門課程' +
            '不論你現在的程度到哪裡 都會有人帶著你' +
            '還在苦惱不知道怎麼踏入程式嗎？' +
            '還不趕快來！！'
        },
        { name: '講師演講', description: '嘿嘿嘿~ 最近有很多人私訊小編，詢問這學期的社團活動內容，所以在這邊統一公布喔！' },
        { name: '期初大會',
          description:
            '想藉由程式做到一些很炫砲的事情嗎?' +
            '在經過寒假幹部們激烈的討論後，活動內容變得更棒，不只有專業講師深入淺出的演講、進階社課，' +
            '讓大家參與起來舒適更有成就感，還不找朋友一起來嗎'
        },
        { name: '網頁實戰課程',
          description: '大家還記得上週的網頁基礎課程嗎？' +
            '這週會延續前兩次的基礎，並使用 Bootstrap 4 框架 快速建構網頁！' +
            '如果之前有事沒有參加到，但有一點基礎，也可以來聽聽看~' },
        { name: '網頁實戰課程',
          description: '大家還記得上週的網頁基礎課程嗎？' +
            '這週會延續上週的基礎，帶領大家來完成屬於自己的網頁版名片喔！' +
            '如果之前有事沒有參加到，但有一點基礎，也可以來聽聽看^_^'
        }
      ],
      activeName: '1',
      isAutoPlay: false,
      isShow: false
    }
  },
  created() {
    this.fetchGithub()
  },
  mounted() {
    this.isShow = true
  },
  methods: {
    async fetchGithub() {
      const resopnse = await this.$axios.$get('https://api.github.com/orgs/NTUT-NPC/repos')
      for (let i = 0; i < resopnse.length; i++) {
        const repo = resopnse[i]
        this.$data.projects.push({
          name: repo.full_name,
          link: repo.html_url,
          description: repo.description,
          stars: repo.stargazers_count,
          forks: repo.forks
        })
      }
    },
    router(link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<style lang="sass" scoped>
  p
    color: black
  .body__carousal
    margin: 8vw 0
    padding: 0 10vw
    .el-carousel__item
      h3
        color: #475669
        font-size: 18px
        opacity: 0.75
        margin: 0
    .el-carousel__item
      &:nth-child(2n)
        background-color: #99a9bf

    .el-carousel__item
      &:nth-child(2n + 1)
        background-color: #d3dce6

  .body__title
    margin: 50px 160px 0 160px

  .carousal__image
    object-fit: cover

  .project__cards
    margin: 1vw 1vw
    display: flex !important
    justify-content: center
    flex-wrap: wrap
    opacity: 0
    animation-delay: .3s
    animation-duration: 1s

  .project__card
    width : 22vw
    margin: 1vw
    .text
      font-size: 14px

    .item
      margin-bottom: 18px

    .clearfix:before,
    .clearfix:after
      display: table
      content: ""

    .clearfix:after
      clear: both

  .github__buttons
    display: flex
  .github__description
    margin-top: 30px
  .text__style
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
  .activities__cards
    display: flex !important
    justify-content: center
    flex-wrap: wrap
    animation-duration: 2s
    opacity: 0
    .el-card
      width: 22vw
      overflow: hidden
      margin: 1vw
    .activities__description
      margin-top: -5px

</style>
