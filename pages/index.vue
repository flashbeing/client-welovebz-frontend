<template>
  <div class="main-container">
    <Header />
    <section class="main-section">
      <ComingSoon class="coming-soon desktop" />
      <div class="content">
        <h1 class="title">
          <span class="christmas">{{ $t('common.christmas') }}</span
          ><br />{{ $t('common.surprise')
          }}<span class="at">{{ $t('common.at') }}</span>
        </h1>
        <ComingSoon class="coming-soon mobile" />
        <div class="description">
          <span class="website">{{ $t('common.website') }}</span>
          <p v-for="(d, i) in details" :key="`detail${i}`" v-html="d"></p>
        </div>
        <p class="be-surprised">{{ $t('project.beSurprised') }}</p>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
export default {
  computed: {
    details() {
      return this.$t('project.details')
    },
  },
}
</script>

<style lang="postcss" scoped>
.main-container {
  @apply bg-primary text-white flex flex-col justify-between w-full h-screen;
}

.main-section {
  @apply flex justify-items-center w-full;

  background: inherit;
}
.coming-soon.desktop {
  width: 50%;
}
.coming-soon.mobile {
  @apply hidden;
}
.content {
  @apply flex flex-col gap-12;

  width: 50%;

  & > * {
    width: 80%;
  }

  & > .title {
    font-size: 7vmin;
    line-height: 1;

    & > .christmas {
      @apply text-secondary;
    }
    & > .at {
      @apply opacity-70 pl-6;

      font-size: inherit;
    }
  }

  & > .description {
    @apply text-2xl;
    & > .website {
      @apply text-black;
    }
    & > p {
      @apply pb-10;
    }
  }

  & > .be-surprised {
    @apply font-bold italic text-secondary;

    font-size: 3vmin;
  }
}

@media (max-width: theme('screens.md')) {
  .main-container {
    @apply h-auto text-center;
  }

  .main-section {
    @apply flex flex-col;
  }

  .coming-soon.desktop {
    @apply hidden;
  }

  .coming-soon.mobile {
    @apply flex;
  }

  .content {
    @apply w-full items-center mt-6;

    & > * {
      width: 90%;
    }

    & > .title {
      @apply text-4xl;
    }

    & > .be-surprised {
      @apply text-xl pb-4;
    }
    & > .description {
      @apply text-lg;

      & > p:last-child {
        @apply pb-0;
      }
    }
  }
}
</style>
