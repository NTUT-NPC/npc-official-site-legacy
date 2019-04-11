<template>
  <div class="container">
    <div class="main">
      <div class="main_describe">
        <div class="main__club_name">
          <p>北科</p>
          <h2>程式設計研究社</h2>
          <button class="main__register">
            加入我們
          </button>
        </div>
      </div>
      <img alt="npc_big_logo" class="npc_big_logo">
    </div>
    <div class="slide">
      <!-- <slide /> -->
    </div>
  </div>
</template>

<script>

// import Slide from '@/components/Slide.vue'
export default {
  components: {
    // Slide
  }
}
</script>

<style lang="sass">
.main
  height: 80vh
  display: flex
  .main_describe
    flex: 1
    display: flex
    align-items: center
    margin-left: 50px
  .npc_big_logo
    flex: 1
  .main__register
    background-color: #0c1214
    border: 1px solid yellow
    border-radius: 40% 40% 40% 40%
    color: white
    padding: 5px 10px
    text-align: center
    font-size: 16px
    &:hover
      cursor: pointer
h2
  color: white
p
  color: white
.container__main__club_name
  color: white
</style>
