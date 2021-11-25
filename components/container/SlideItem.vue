<template>
<div>
  <div class="img" :style="itemImage" />
  <h2>{{title}}</h2>
</div>
</template>

<script>
export default {
  name: "SlideItem",
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
      itemImage(){
        return {
          backgroundImage: `url('/static/images/${this.image}')`,
          backgroundRepeat: 'no-repeat',
        }
    }
  }
}
</script>

<style scoped>
div {
  & .img {
    width: auto;
    height: 160px;
  }
}
</style>
