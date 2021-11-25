<template>
  <div class="slider">
    <div
      v-for="(item, index) in elements"
      :key="index"
      :class="{ current: curProjectIndex === index }"
    >
      <div
        class="project"
        :class="{ visible: curProjectIndex === index }"
        :style="{
          backgroundImage:
            'url(' +
            require(`@/static/images/${item.img}`) +
            ')',
        }"
      >
      </div>
      <h3>{{item.name}}</h3>
    </div>
    <div class="center relative pointer-events-none h-full">
      <div
        class="arrow backward clickable visible"
        @click="showPreviousProject()"
      ></div>
      <div
        class="arrow forward clickable visible"
        @click="showNextProject()"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    elements: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      curProjectIndex: 0,
    }
  },
  methods: {
    showPreviousProject() {
      if (this.curProjectIndex > 0) {
        this.curProjectIndex--
      } else {
        this.curProjectIndex = this.elements.length - 1
      }
    },
    showNextProject() {
      if (this.curProjectIndex < this.elements.length - 1) {
        this.curProjectIndex++
      } else {
        this.curProjectIndex = 0
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.slider {
  @apply relative;

  height: 200px;

  & a:not(.current) {
    @apply pointer-events-none;
  }

  & .project {
    @apply absolute top-0 left-0 bg-placeholder opacity-0 bg-center bg-cover;

    height: 200px;
    width: 50%;
    transform: scale(0.93);
    transition: transform 0.5s ease, opacity 0.5s ease;


    & h3 {
      @apply text-3xl mb-1 uppercase leading-tight font-semibold text-white;
    }

    &.visible {
      @apply opacity-100;

      transform: scale(1);
    }
  }

  & .arrow {
    @apply absolute w-full h-full  bg-center bg-no-repeat opacity-0 transition-opacity duration-200 border border-white pointer-events-none;

    width: 76px;
    height: 76px;
    border-radius: 50%;
    top:-10%;
    background-size: 100% auto;

    &.backward {
      @apply left-0;

      background-image: url(~/static/icon/back-arrow.svg);
    }

    &.forward {
      @apply right-0;

      background-image: url(~/static/icon/arrow-right.svg);
    }

    &.visible {
      @apply opacity-100 pointer-events-auto;
    }
  }
}
</style>
