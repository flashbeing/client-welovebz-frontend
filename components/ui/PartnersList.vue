<template>
  <div class="main-container">
    <div class="center">
      <ul :class="{ 'is-footer': isFooter }">
        <li v-for="(item, index) of partners" :key="index">
          <span class="sep">• </span
          ><a :href="item.link" target="_blank">{{ item.name }}</a>
        </li>
      </ul>
      <div class="icons-container">
        <a
          v-for="(item, index) of icons"
          :key="index"
          :href="item.link"
          class="social"
        >
          <Icon :name="item.name" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnersList',
  props: {
    isFooter: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      icons: [
        {
          name: 'facebook',
          link: 'https://facebook.com',
        },
        {
          name: 'instagram',
          link: 'https://instagram.com',
        },
      ],
    }
  },

  computed: {
    partners() {
      return [
        {
          name: this.$t('footer.company'),
          link: 'https://www.bolzano-bozen.it/en/',
        },
        {
          name: this.$t('footer.hds'),
          link: 'https://www.unione-bz.it/it/home/1-0.html',
        },
        {
          name: this.$t('footer.hgv'),
          link: 'https://www.hgv.it/de/',
        },
        {
          name: this.$t('footer.confesercenti'),
          link: 'https://www.commercianti.bz.it/',
        },
        {
          name: this.$t('footer.cnaShv'),
          link: 'http://www.shv.cnabz.com/index.php/it/',
        },
        {
          name: this.$t('footer.lvh'),
          link: 'https://www.lvh.it/it/',
        },
      ]
    },
  },
}
</script>

<style lang="postcss" scoped>
.main-container {
  @apply bg-secondary text-white;

  & .center {
    @apply flex items-center py-2;

    & > ul {
      @apply inline-block;

      width: calc(100% - 80px);

      & > li {
        @apply inline-block text-sm;

        &:first-child {
          & .sep {
            @apply hidden;
          }
        }

        & > a {
          @apply pr-3;

          &:hover {
            @apply underline;
          }
        }
      }
    }

    & > .icons-container {
      @apply inline-block;

      width: 80px;

      & .social {
        @apply inline-block text-center;

        width: 40px;
        height: 40px;

        & svg {
          @apply fill-current;

          width: 30px;
          height: 30px;
          margin-top: 5px;
        }
      }
    }
  }
}

@media (max-width: theme('screens.md')) {
  .main-container {
    & .center {
      @apply flex-col;

      & > ul {
        @apply flex-col items-start;

        width: 100%;

        &.is-footer {
          display: none;
        }

        &:not(.is-footer) {
          @apply mt-8;
        }

        & > li {
          @apply text-base text-left;
        }
      }

      & > .icons-container {
        @apply flex justify-end mt-2;

        width: 100%;
      }
    }
  }
}
</style>
