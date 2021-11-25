<template>
  <div>
    <span v-if="intervalTime">{{ time }}</span>
    <span v-else>00:00:00</span>
  </div>
</template>

<script>
export default {
  name: "Countdown",
  props: {
    endDate: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      interval: null,
      intervalTime: true,
      time: null
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  created() {
    this.interval = setInterval(() => {
      this.time = new Date(-(Date.now() - new Date(this.endDate))).toISOString().substr(11, 8)
      if (Date.now() >= new Date(this.endDate)) {
        this.time = '00:00:00'
        clearInterval(this.interval)
      }
    })
  }
}
</script>

<style lang="postcss" scoped>
div {
  @apply bg-black items-center justify-center flex;

  height: 65px;

  & span {
    font-size: 28px;
  }

}
</style>
