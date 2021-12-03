<template>
  <span
    class="title"
    :class="{
      small: isSmall,
      inverted,
      'as-title': showAsTitle,
      green: showGreen,
    }"
  >
    <span>[</span><slot /><span>]</span>
  </span>
</template>

<script>
export default {
  name: 'TitleHeading',
  props: {
    isSmall: {
      type: Boolean,
      default: false,
    },
    inverted: {
      type: Boolean,
      default: false,
    },
    showGreen: {
      type: Boolean,
      default: false,
    },
    showAsTitle: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
.title {
  @apply font-bold text-5xl text-white;

  & span {
    @apply text-secondary font-medium;
  }

  &:hover {
    & span {
      @apply opacity-100 !important;
    }
  }

  &.small {
    @apply text-2xl;
  }

  &.inverted {
    @apply text-black;

    & span {
      @apply text-white;
    }
  }

  &.green {
    @apply text-primary;
  }

  &:not(.as-title) {
    & span {
      @apply opacity-0;
    }
  }

  &.as-title {
    @apply block text-center mb-8;
  }
}

@media only screen and (max-width: 980px) {
  .title {
    @apply text-3xl mb-4;

    &.small {
      @apply text-lg;
    }
  }
}
</style>
