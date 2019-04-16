<template>
  <div>
    <div class="body__carousal">
      <el-carousel
        indicator-position="outside"
        autoplay="false"
      >
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="body__projects">
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
          <span>{{ project.name }}</span>
          <el-button
            style="border: none;"
            size="medium"
            circle="true"
          />
        </div>
        <div>
          <span>{{ project.description }}</span>
          <br>
          <span>starts: {{ project.stars }}</span>
          <br>
          <span>fork: {{ project.forks }}</span>
          <br>
          <gh-btns-star slug="vuejs/vue" show-count />
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
      projects: []
    }
  },
  created() {
    this.fetchGithub()
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
  .body__carousal
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

  .body__projects
    margin-left: 160px

  .project__cards
    margin: 50px 0 50px 160px
    display: flex
    flex-direction: row
    flex-wrap: wrap

  .project__card
    height: 250px
    width: 250px
    margin: 20px
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

</style>
