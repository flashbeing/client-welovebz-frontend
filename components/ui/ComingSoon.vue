<template>
  <div class="coming-soon-container">
    <img :src="require('~/assets/images/face-smile.png')" class="face-smile" />
    <span>{{ $t('common.comingSoon') }}</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.coming-soon-container {
  @apply flex flex-col items-center gap-16;

  & > .face-smile {
    @apply pt-24;

    width: 60%;
  }

  & > span {
    @apply text-4xl;
  }
}

@media (max-width: theme('screens.md')) {
  .coming-soon-container {
    @apply gap-8;
    & > .face-smile {
      @apply pt-0;
    }
    & > span {
      @apply text-3xl;
    }
  }
}
</style>
