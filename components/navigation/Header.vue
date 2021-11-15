<template>
  <header>
    <img
      :src="require('~/assets/images/welovebz_logo.png')"
      alt="WeLoveBZ Logo"
      class="logo"
    />
    <div class="lang-selector-container" @click="toggleShowSelector">
      <span>{{ selectedLocale.toUpperCase() }}</span
      ><ChevronDown />
      <div v-if="showSelector" class="lang-selector">
        <ul>
          <li v-for="l of locales" :key="l.name" @click="setLocale(l.name)">
            {{ l.name.toUpperCase() }}
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
import ChevronDown from '@/assets/icon/chevron-down.svg'
export default {
  components: { ChevronDown },
  data() {
    return {
      showSelector: false,
    }
  },
  computed: {
    selectedLocale() {
      return this.$i18n.locale
    },
    locales() {
      const locales = []
      for (const l of this.$i18n.locales) {
        if (l === this.selectedLocale) continue
        const path = l === this.$i18n.defaultLocale ? '' : l
        locales.push({ name: l, path })
      }
      return locales
    },
  },
  methods: {
    toggleShowSelector() {
      this.showSelector = !this.showSelector
    },
    setLocale(lang) {
      this.$i18n.setLocale(lang)
    },
  },
}
</script>
<style lang="postcss" scoped>
header {
  @apply bg-primary flex justify-between items-center p-8;
  & > .logo {
    width: 300px;
  }
  & > .lang-selector-container {
    @apply p-4 bg-black text-white font-bold flex items-center gap-2 relative cursor-pointer;
    & path {
      @apply fill-current;
    }
    & > .lang-selector {
      @apply absolute w-full left-0 bg-black pl-4 py-4 border-t-2 border-gray-300;

      top: 100%;

      & li {
        @apply pb-2;
        &:last-child {
          @apply pb-0;
        }
        &:hover {
          @apply underline;
        }
      }
    }
  }
}
@media (max-width: theme('screens.md')) {
  header {
    @apply p-4;

    & > .logo {
      width: 220px;
    }
    & > .lang-selector-container {
      @apply p-4;
      & > .lang-selector {
        @apply pl-4 py-3;

        & li {
          @apply text-left;
        }
      }
    }
  }
}
</style>
