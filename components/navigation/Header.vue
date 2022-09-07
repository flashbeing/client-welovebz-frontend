<template>
  <header>
    <div class="center">
      <img
        :src="require('~/assets/images/welovebz_logo.png')"
        alt="WeLoveBZ Logo"
        class="logo"
      />
      <div class="right-header">
        <div class="lang-selector-container" @click="toggleShowSelector">
          <span>{{ selectedLocale.toUpperCase() }}</span
          ><Icon name="chevron-down" />
          <div v-if="showSelector" class="lang-selector">
            <ul>
              <li v-for="l of locales" :key="l.name" @click="setLocale(l.name)">
                {{ l.name.toUpperCase() }}
              </li>
            </ul>
          </div>
        </div>
        <div class="nav-ct" :class="{ visible: visibleMenu }">
          <nav>
            <ul class="normal-menu">
              <li
                v-for="section of sections.firstSection"
                :key="section.ref"
                class="clickable"
              >
                <nuxt-link
                  class="link"
                  :to="localePath(section.path)"
                  :title="section.name"
                  @click.native="hideMenu()"
                >
                  <TitleHeading>{{ section.name }}</TitleHeading>
                </nuxt-link>
              </li>
            </ul>
            <ul class="small-menu">
              <li
                v-for="section of sections.secondSection"
                :key="section.ref"
                class="clickable"
              >
                <a
                  class="link"
                  :href="section.path"
                  :title="section.name"
                  target="_blank"
                >
                  <TitleHeading :is-small="true">{{
                    section.name
                  }}</TitleHeading>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          class="menu-bt clickable"
          :class="{ opened: visibleMenu }"
          @click="toggleMenuVisibility()"
        >
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      showSelector: false,
      visibleMenu: false,
    }
  },

  computed: {
    sections() {
      return {
        firstSection: [
          {
            path: '/#intro',
            name: this.$t('page.homepage.firstSection.title'),
          },
          // {
          //   path: '/#countdown',
          //   name: this.$t('page.homepage.secondSection.title'),
          // },
          // {
          //   path: '/#prizes',
          //   name: this.$t('page.homepage.thirdSection.title'),
          // },
          // {
          //   path: '/#partner',
          //   name: this.$t('page.homepage.fourthSection.title'),
          // },
          // {
          //   path: '/#sponsors',
          //   name: this.$t('page.homepage.fifthSection.title'),
          // },
        ],
        secondSection: [
          {
            path: '/pdf/regulation-' + this.selectedLocale + '.pdf',
            name: this.$t('common.rules'),
          },
          {
            path: '/pdf/impressum.pdf',
            name: this.$t('common.impressum'),
          },
          /* {
            path: '/pdf/contacts.pdf',
            name: this.$t('common.contact'),
          }, */
        ],
      }
    },

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

    toggleMenuVisibility() {
      this.visibleMenu = !this.visibleMenu
    },

    hideMenu() {
      this.visibleMenu = false
    },
  },
}
</script>
<style lang="postcss" scoped>
header {
  @apply bg-primary;

  & .center {
    @apply flex justify-between items-center py-8;
  }

  & .logo {
    width: 240px;
  }

  & .right-header {
    @apply p-4 bg-black text-white font-bold flex items-center gap-5 relative cursor-pointer;

    & .nav-ct {
      @apply z-10 fixed right-0 bottom-0 left-0 bg-black float-none text-white opacity-0 transition duration-200 pointer-events-none;

      top: 0;
      white-space: initial;
      padding-right: 25px;
      padding-left: 25px;
      transform: translateY(-40px);
      /* stylelint-disable no-descending-specificity */

      & nav {
        @apply block text-3xl mt-8 mb-10 text-center;

        & .normal-menu {
          @apply pt-14;

          & li {
            @apply block leading-none mb-6 cursor-pointer;

            line-height: 44px;

            & .link {
              & h2 {
                @apply hover:text-secondary;
              }
            }
          }
        }

        & .small-menu {
          @apply py-10;

          & li {
            @apply mb-2;

            & .link {
              & h2 {
                @apply font-normal;

                font-size: 30px;
              }
            }
          }
        }
      }

      &.visible {
        @apply opacity-100 cursor-default pointer-events-auto;

        transform: none;
      }
    }

    & .lang-selector-container {
      @apply gap-2;

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

    & .menu-bt {
      @apply relative z-10 block;

      width: 30px;
      height: 20px;
      transition: transform 0.5s ease;

      & > .line {
        @apply bg-white;

        height: 1px;
        margin-bottom: 8px;
        transform-origin: 50%;
        transition: transform 0.5s ease, opacity 0.5s ease;

        &:last-child {
          margin-bottom: 0;
        }
      }

      &.opened {
        @apply fixed;

        transform: translateX(15px);

        & > .line {
          &:first-child {
            transform: rotate(45deg) translateY(13px);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:last-child {
            transform: rotate(-45deg) translateY(-13px);
          }
        }
      }
    }
  }
}
@media (max-width: theme('screens.md')) {
  header {
    & .logo {
      width: 160px;
    }

    & .right-header {
      @apply p-3 gap-3;

      & .nav-ct {
        & nav {
          & .normal-menu {
            @apply pt-20;
          }
        }
      }

      & > .lang-selector-container {
        @apply p-0;

        & > .lang-selector {
          @apply pl-3 py-3;

          & li {
            @apply text-left;
          }
        }
      }
    }
  }
}
</style>
