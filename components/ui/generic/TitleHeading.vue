<template>
  <h2>
    <span :style="spanCustomStyle">[</span><slot /><span :style="spanCustomStyle">]</span>
  </h2>
</template>

<script>
export default {
  name: "TitleHeading",
  props: {
    spanCustomStyle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>
h2 {
  @apply font-bold;

  font-size: 3rem;

  & span {
    @apply text-secondary font-medium;

    font-size: 54px;
  }
}
</style>
