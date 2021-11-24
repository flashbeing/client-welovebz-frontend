<template>
  <div>
    {{getInterval()}}
    <span>{{ date }}</span>
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
  data(){
    return {
      date: ''
    }
  },
  methods: {
    getInterval() {
      if (Date.now() >= new Date(this.endDate)) {
        return "00:00:00"
      }
      setInterval(() => {
        this.date = new Date(-(Date.now() - new Date(this.endDate))).toISOString().substr(11, 8)
      }, 1000000)
    },
  }
}
</script>

<style lang="postcss" scoped>
div {
  @apply bg-black text-center;

  width: 245px;
  height: 65px;
}
</style>
