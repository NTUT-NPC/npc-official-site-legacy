<template>
  <div>
    <figure class="card" tabindex="0">
      <img class="card-image" src alt>
      <div class="box">
        <div class="box-side-borders" />
        <blockquote class="text">
{{ text }}
</blockquote>
      </div>
      <figcaption>
        <cite class="cite">— {{ author }} —</cite>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'AnimationQuote',
  props: {
    text: {
      type: String,
      require: true,
      default: ''
    },
    author: {
      type: String,
      require: true,
      default: ''
    }
  }
}
</script>

<style lang="sass" scoped>
  $line-height: 1.6
  $transition: .5s
  $border-width: 2px

  template
    height: 100vh
    margin: 0
    display: flex
    flex-wrap: wrap
    justify-content: space-evenly
    align-items: center
    font-family: serif

  *, *::before, *::after
    box-sizing: border-box

  .card
    position: relative
    display: block
    width: 640px
    height: 300px
    margin: 0
    margin-top: 50px
    margin-bottom: 50px
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    outline: none;
    animation: slide-in 1s backwards;

    &:last-child
      animation-delay: .4s

    @keyframes slide-in
      from
        opacity: 0
        transform: translateY(30px)

    &.dark
      color: white

      &::before
        background-image: radial-gradient(hsla(0, 0%, 0%, .8), hsla(0, 0%, 0%, .6) 50%, transparent), linear-gradient(to top, hsl(240, 100%, 6%), hsl(202, 53%, 44%))

    &::before
      content: ""
      position: absolute
      z-index: -1
      top: 0
      left: 0
      bottom: 0
      right: 0
      opacity: 0.1
      transition: $transition

  .box
    width: 450px
    padding: 30px
    position: relative
    font-size: 22px
    line-height: $line-height
    transition: $transition * 1.2

    .card:hover &,
    .card:focus &
      transform: translateY(-20px)

  .text
    margin: 0
    transform: scale(.9)
    transition: $transition
    text-align: justify

    .card:hover &,
    .card:focus &
      transform: none

  .cite
    position: absolute
    left: 50%
    bottom: 0
    transform: translate(-50%, 100%)
    transition: transform $transition * .4 $transition * .15, letter-spacing $transition * .4

    .card:hover &,
    .card:focus &
      transition-delay: $transition, $transition * 1.15
      letter-spacing: .1em
      transform: translate(-50%, -20px)

  .box,
  .box-side-borders
    &::before,
    &::after
      content: ""
      position: absolute
      pointer-events: none
      transition: $transition .1s
      background: currentColor

  // Borders
  .box
    &::before
      top: 0
      left: 0
      width: 100%
      height: $border-width

    &::after
      bottom: 0
      left: 0
      width: 100%
      height: $border-width

    .card:hover &,
    .card:focus &
      &::before
        width: 390px
        transform: translate(30px, calc(#{$line-height}em - .1em + 32px))

      &::after
        width: 390px
        transform: translate(30px, calc(.1em - 30px))

  .box-side-borders
    &::before,
    &::after
      transition: height $transition ($transition * .2), transform ($transition * .8) ($transition * .4) ease-in-out

    &::before
      bottom: 0
      left: 0
      width: $border-width
      height: 100%
      transform-origin: bottom

    &::after
      top: 0
      right: 0
      width: $border-width
      height: 100%
      transform-origin: top

    .card:hover &,
    .card:focus &
      &::before,
      &::after
        height: 390px
        transition: transform $transition ($transition * .2), height ($transition * .6) ($transition * .6) ease-in-out
      &::before
        transform: translate(30px, calc(-30px - #{2 * $line-height - 0.1}em)) rotate(90deg)
      &::after
        transform: translate(-30px, calc(30px + #{3 * $line-height + 0.1}em)) rotate(90deg)

  .card-image
    position: absolute
    z-index: -2
    top: 0
    left: 0
    width: 100%
    height: 100%
    -o-object-fit: cover
    object-fit: cover
    transform-origin: 80% 20%
    transition: ($transition * 2) cubic-bezier(0.32, 0.16, 0, 1)
    filter: brightness(1.3) contrast(0.8)

    .card.dark &
      filter: brightness(.8) contrast(.8)

    .card:hover &,
    .card:focus &
      transform: scale(1.05)

</style>
