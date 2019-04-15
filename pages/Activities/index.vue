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
      >
        <div slot="header">
          <span>{{ project.name }}</span>
          <el-button
            style="border: none;"
            icon="fab fa-github"
            size="medium"
            circle="true"
          />
        </div>
        <div>
          {{ project.description }}
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
        { name: 'TAT-IOS', link: '', description: 'It\'s Taipei Tech unofficial app' },
        { name: 'TAT-Android', link: '', description: '' },
        { name: 'Python-101', link: '', description: '' },
        { name: 'ntut-server', link: '', description: '' },
        { name: 'crawler-tutorial', link: '', description: '' },
        { name: 'CTFd', link: '', description: '' },
        { name: 'npc-verify', link: '', description: '' }
      ]
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

  .project__card
    width: 200px
    height: 200px
    margin-right: 20px
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
