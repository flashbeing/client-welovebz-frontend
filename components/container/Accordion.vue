<template>
  <div class="main-container">
    <div
      class="title clickable"
      :class="{ red: !isRed, green: isGreen, black: isBlack }"
      @click="toggle"
    >
      <div class="text">
        <h2>{{ button }}</h2>
      </div>
      <div
        class="arrow"
        :class="{
          red: !isRed,
          up: isExpanded,
          down: !isExpanded,
          black: isBlack,
        }"
      ></div>
    </div>
    <div v-show="isExpanded" class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    button: {
      type: String,
      required: true,
    },
    isRed: {
      type: Boolean,
      default: false,
    },
    isGreen: {
      type: Boolean,
      default: false,
    },
    isBlack: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  methods: {
    toggle() {
      this.isExpanded = !this.isExpanded
    },
  },
}
</script>

<style lang="postcss" scoped>
.main-container {
  @apply py-7;

  & .title {
    @apply text-white;

    &.red {
      @apply text-secondary hover:text-secondary-hover;
    }

    &.green {
      @apply text-primary hover:text-primary-hover;
    }

    &.black {
      @apply text-black hover:text-black;
    }

    & .text {
      @apply inline-block;
    }

    & .arrow {
      @apply inline-block transition-transform duration-200 border-white;

      border-width: 0 3px 3px 0;
      padding: 3px;

      &.red {
        @apply border-secondary hover:border-secondary-hover;
      }

      &.black {
        @apply border-black hover:border-black;
      }

      &.down {
        transform: rotate(45deg);
      }

      &.up {
        transform: rotate(-135deg);
      }
    }
  }
}
</style>
