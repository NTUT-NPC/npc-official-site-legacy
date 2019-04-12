<template>
  <div>
    <div class="body__line">
      <h1>小辰辰經典語錄</h1>
    </div>
    <animation-quote :text="text" :author="author" class="body__quote" />
    <div class="body__line">
      <h2>小辰辰與他的小夥伴</h2>
    </div>
    <div class="body__avatars">
      <div v-for="person in people" :key="person.id">
        <avatar :username="person.name" :size="avatarSize" :src="person.src" class="body__avatar" />
        <span class="body__name">{{ person.name }}</span>
      </div>
    </div>
    <div class="body__follow">
      <h3>- Follow Us -</h3>
    </div>
    <div class="body__follow-button">
      <button class="button follow__button-animation">
        Facebook
      </button>
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
      text: ' Don\'t be into trends. Don\'t make fashion own you, but you decide what you are, what you want to express by the way you dress and the way to live.',
      author: '前社長 小辰辰',
      avatarSize: 100,
      people: [
        { name: '洨辰辰', src: require('~/static/organizers/yaoandy.jpg') },
        { name: '陳季宏', src: require('~/static/organizers/fourseasonred.jpg') },
        { name: '蔡政賓', src: require('~/static/organizers/Caizhengbin.jpg') },
        { name: '杜方宇', src: require('~/static/organizers/Dufangyu.jpg') },
        { name: '吳博翰', src: require('~/static/organizers/wubrian.jpg') },
        { name: '林庭緯', src: require('~/static/organizers/tingway.jpg') },
        { name: '邱柏翰', src: require('~/static/organizers/hans.jpg') },
        { name: '神崎秀吉', src: require('~/static/organizers/showgi.jpg') }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  $color: #5533ff
  $deeper: darken($color, 5%)

  *
    background-color: #0c1214
    color: white

  button
    border: none
    text-decoration: none
    color: rgba(white, .95)
    cursor: pointer

  .body__quote
    display: flex
    justify-content: center

  .body__avatars
    margin-top: 20px
    display: flex
    flex-direction: row
    justify-content: center
    flex-wrap: wrap

  .body__avatar
    margin-right: 10px
    margin-bottom: 10px

  .body__name
    margin-left: 25px

  .body__line
    display: flex
    margin-top: 10px
    border: gray 1px solid
    justify-content: center

  .body__follow
    display: flex
    margin-top: 10px
    border: gray 1px solid
    justify-content: center

  .body__follow-button
    display: flex
    justify-content: center

  .button
    padding: 2rem 7rem
    background: white
    text-align: center
    display: inline-block
    font-size: 1.7rem
    text-transform: uppercase
    font-weight: 700
    position: relative
    will-change: transform

  .follow__button-animation
    letter-spacing: .05rem
    transition: .5s all ease-in-out
    position: relative
    background: transparent

    &:before
      border-top: .3rem solid white
      border-bottom: .3rem solid white
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
