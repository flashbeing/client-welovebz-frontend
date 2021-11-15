<template>
  <Nuxt class="page" />
</template>

<style lang="postcss">
html {
  @apply font-serif;

  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.page {
  @apply bg-primary text-white h-screen;
}

@media (max-width: theme('screens.md')) {
  .page {
    @apply h-auto;
  }
}
</style>
