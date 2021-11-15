<template>
  <footer>
    <Facebook class="icon fb" />
    <Instagram class="icon ig" />
  </footer>
</template>

<script>
import Facebook from '@/assets/icon/facebook.svg'
import Instagram from '@/assets/icon/Instagram.svg'
export default {
  components: {
    Facebook,
    Instagram,
  },
}
</script>

<style lang="postcss" scoped>
footer {
  @apply bg-secondary text-white text-right px-6 py-3;
  & .icon {
    @apply fill-current;

    width: 30px;
    height: 30px;

    &.ig {
      width: 42px;
      height: 42px;
    }
  }
}
</style>
