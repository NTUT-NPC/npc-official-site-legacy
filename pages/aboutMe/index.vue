<template>
  <div class="about-container">
    <div class="body__line">
      <h2>關於</h2>
    </div>
    <animation-quote
      :text="aboutText"
      :author="author"
      class="body__quote"
    />
    <div class="body__line">
      <h2>使命</h2>
    </div>
    <animation-quote
      :text="missonText"
      :author="author"
      class="body__quote"
    />
    <div class="body__line">
      <h2>幹部</h2>
    </div>
    <div class="body__avatars">
      <div
        v-for="person in people"
        :key="person.id"
      >
        <avatar
          :username="person.name"
          :size="avatarSize"
          :src="person.src"
          class="avatars__avatar"
        />
        <div class="avatar__name">
          {{ person.name }}
        </div>
      </div>
    </div>
    <div class="body__group">
      <h2>定期聚</h2>
      <br>
      <p>歡迎加入我們，我們會在<strong class="text__color">每週二</strong>的 <strong class="text__color">18:00 ~ 21:00</strong> 舉行定期聚。追蹤我們的粉絲專頁獲得更多消息</p>
    </div>
    <div class="body__follow">
      <h2>- Follow Us -</h2>
    </div>
    <div class="follow__buttons">
      <div class="body__follow-button">
        <button
          class="button follow__button-animation"
          @click="openFacebook"
        >
          Facebook
        </button>
      </div>
      <div class="body__follow-button">
        <button
          class="button follow__button-animation"
          @click="openGithub"
        >
          Github
        </button>
      </div>
      <div class="body__follow-button">
        <button
          class="button follow__button-animation"
          @click="openInstagram"
          >
            Instagram
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AnimationQuote from '@/components/AnimationQuote'
import Avatar from 'vue-avatar'

export default {
  name: 'AboutMe',
  components: {
    AnimationQuote,
    Avatar
  },
  data() {
    return {
      aboutText: '學習程式，並不是為了成為「程式設計師」，而是為了開拓更寬廣的學習途徑',
      missonText: '扭轉以往大家對學習程式的迷思，並提供許多管道給想要學習程式的你',
      author: '創社社長 小辰辰',
      avatarSize: 100,
      people: [
        { name: '創始元老 洨辰辰', src: require('~/static/organizers/yaoandy.jpg') },
        { name: '許雅淑', src: require('~/static/organizers/susan.jpeg') },
        { name: '腋毛', src: require('~/static/organizers/armpit_hair.jpeg') },
        { name: '黃發泉', src: require('~/static/organizers/fa_chuan.jpeg') },
        { name: '邱柏翰', src: require('~/static/organizers/hans.jpg') },
        { name: '孫億龍', src: require('~/static/organizers/e_long.jpeg') }
      ]
    }
  },
  methods: {
    openFacebook() {
      window.open('https://www.facebook.com/NPC.OwO/', '_blank')
    },
    openGithub() {
      window.open('https://github.com/NTUT-NPC', '_blank')
    },
    openInstagram() {
      window.open('https://www.instagram.com/npc.designer/?hl=zh-tw', '_blank')
    }
  }
}
</script>

<style lang="sass" scoped>
  .text__color
    color: #FAB24C
  *
    color: white

  h2
    font-size: 3rem

  p
    font-size: 1.5rem

  button
    border: none
    text-decoration: none
    color: rgba(white, .95)
    cursor: pointer
  .about-container
    padding: 32px
    .body__quote
      display: flex
      justify-content: center

    .body__avatars
      margin-top: 20px
      margin-bottom: 20px
      display: flex
      flex-direction: row
      justify-content: center
      flex-wrap: wrap

    .avatars__avatar
      margin-right: 10px
      margin-bottom: 10px

    .avatar__name
      margin-right: 10px
      margin-bottom: 10px
      text-align: center

    .body__line
      display: flex
      margin-top: 10px
      margin-bottom: 10px
      justify-content: center

    .body__group
      display: flex
      justify-content: center
      flex-direction: column
      align-items: center
      margin-top: 10px
      margin-bottom: 10px
      h2
        padding: 0
        margin: 0
      p
        margin: 0
        padding: 0

    .body__follow
      display: flex
      margin-top: 50px
      margin-bottom: 10px
      justify-content: center

    .body__follow-button
      display: flex
      justify-content: center

    .follow__buttons
      display: flex
      justify-content: center
      margin-bottom: 150px

    .button
      padding: 1rem 2rem
      background: white
      text-align: center
      display: inline-block
      font-size: 1.2rem
      text-transform: uppercase
      font-weight: 500
      position: relative
      will-change: transform

    .follow__button-animation
      letter-spacing: .05rem
      transition: .5s all ease-in-out
      position: relative
      background: transparent

      &:before
        border-top: .1rem solid white
        border-bottom: .1rem solid white
        display: block
        position: absolute
        background: transparent
        content: ''
        top: 0
        bottom: 0
        left: 100%
        right: 100%
        transition: .48s all ease-in-out

      &:hover
        letter-spacing: .4rem

      &:hover:before
        left: 25%
        right: 25%

</style>
