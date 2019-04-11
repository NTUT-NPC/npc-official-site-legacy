<template>
  <div>
    <animation-quote :text="text" :author="author" class="body__quote" />
  </div>
</template>

<script>
import AnimationQuote from '@/components/AnimationQuote'

export default {
  name: 'AboutMe',
  components: {
    'animation-quote': AnimationQuote
  },
  data() {
    return {
      text: ' Don\'t be into trends. Don\'t make fashion own you, but you decide what you are, what you want to express by the way you dress and the way to live.',
      author: '社長 小辰辰'
    }
  }
}
</script>

<style lang="sass" scoped>

  .body__quote
    display: flex
    justify-content: center
</style>
