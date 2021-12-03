<template>
  <div>
    <span>{{ time }}</span>
  </div>
</template>

<script>
export default {
  name: 'Countdown',
  props: {
    endDate: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      interval: null,
      time: null,
    }
  },

  beforeDestroy() {
    clearInterval(this.interval)
  },

  created() {
    this.updateTime()
    this.interval = setInterval(() => {
      this.updateTime()
    }, 1000)
  },

  methods: {
    updateTime() {
      const remaining = this.getTimeRemaining(this.endDate)
      this.time =
        this.addLeadingZero(remaining.days) +
        ':' +
        this.addLeadingZero(remaining.minutes) +
        ':' +
        this.addLeadingZero(remaining.hours) +
        ':' +
        this.addLeadingZero(remaining.seconds)
    },

    getTimeRemaining(endDate) {
      const t = new Date(endDate).getTime() - new Date().getTime()

      let seconds = 0
      let minutes = 0
      let hours = 0
      let days = 0
      if (t > 0) {
        seconds = Math.floor((t / 1000) % 60)
        minutes = Math.floor((t / 1000 / 60) % 60)
        hours = Math.floor((t / (1000 * 60 * 60)) % 24)
        days = Math.floor(t / (1000 * 60 * 60 * 24))
      }

      return {
        days,
        hours,
        minutes,
        seconds,
      }
    },

    addLeadingZero(number) {
      const zeroPad = (num, places) => String(num).padStart(places, '0')
      return zeroPad(number, 2)
    },
  },
}
</script>

<style lang="postcss" scoped>
div {
  @apply inline-block bg-black;

  height: 65px;
  line-height: 65px;
  min-width: 250px;

  & span {
    font-size: 28px;
  }
}
</style>
