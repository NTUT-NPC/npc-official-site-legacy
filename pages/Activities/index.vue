<template>
  <div>
    <div class="body__carousal">
      <el-carousel
        indicator-position="inside"
        :autoplay="isAutoPlay"
        height="550px"
        type="card"
      >
        <el-carousel-item v-for="(activity, index) in carousalActivities" :key="index">
          <v-img
            :src="activity.image"
            height="100%"
            width="100%"
            class="carousal__image"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="body__title">
      <h2>Projects</h2>
    </div>
    <div class="project__cards">
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
          <gh-btns-star :slug="project.name" show-count />
          <gh-btns-fork :slug="project.name" show-count />
        </div>
        <div class="github__description">
          <p>{{ project.description }}</p>
        </div>
      </el-card>
    </div>
    <div class="body__title">
      <h2>Activities</h2>
    </div>
    <div class="activities__cards">
      <el-card v-for="(activitie, index) in activities" :key="index" shadow="hover">
        <div slot="header">
          <strong>{{ activitie.name }}</strong>
        </div>
        <div class="github__description">
          <p>{{ activitie.description }}</p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Activities',
  componetns: {

  },
  data() {
    return {
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
        { name: 'MLCC', description: '還不快點來學ML' },
        { name: '社烤', description: '哇尬藝烤肉，拜託來啦' },
        { name: 'MLCC', description: 'hahah' },
        { name: 'MLCC', description: 'hahah' },
        { name: 'MLCC', description: 'hahah' },
        { name: 'MLCC', description: 'hahah' },
        { name: 'MLCC', description: 'hahah' },
        { name: 'MLCC', description: 'hahah' },
        { name: 'MLCC', description: 'hahah' }
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
  .test
    color: white
  .fade-enter-active
    transition: all 8s ease

  .fade-enter
    transform: translateX(50px)
    opacity: 0

  .body__carousal
    margin: 0 160px 0 160px
    .el-carousel__item
      h3
        color: #475669
        font-size: 18px
        opacity: 0.75
        line-height: 300px
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
    margin: 50px 160px 50px 160px
    display: flex
    flex-direction: row
    flex-wrap: wrap

  .project__card
    height: 250px
    width: 250px
    margin: 10px
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

    .box-card
      width: 480px

  .github__buttons
    display: flex

  .github__description
    margin-top: 30px

  .activities__cards
    display: flex
    flex-direction: row
    flex-wrap: wrap
    margin: 50px 160px 50px 160px
    .el-card
      width: 250px
      height: 250px
      margin: 10px

</style>
