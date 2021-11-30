<template>
  <div class="main-container">
    <ul :class="{'is-footer': isFooter}">
      <li
        v-for="(item, index) of partners"
        :key="index"
      >
        <a :href="item.link">{{ item.name }}</a>
      </li>
    </ul>
    <div class="icons-container">
      <a
        v-for="(item, index) of icons"
        :key="index"
        :href="item.link"
      >
        <Icon :name="item.name" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartnersList",
  props: {
    isFooter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      icons: [
        {
          name: 'facebook',
          link: 'https://facebook.com'
        },
        {
          name: 'instagram',
          link: 'https://instagram.com'
        }
      ],
      partners: [
        {
          name: 'Verkehrsamt der Stadt Bozen | Azienda di Soggiorno e Turismo di Bolzano',
          link: '#'
        },
        {
          name: 'hds unione',
          link: '#'
        },
        {
          name: 'HGV',
          link: '#'
        },
        {
          name: 'Conferscenti',
          link: '#'
        },
        {
          name: 'CNA-SHV',
          link: '#'
        },
        {
          name: 'lvh.apa',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.main-container {
  @apply flex items-center bg-secondary text-white text-right px-6 py-3;

  & > ul {
    @apply inline-flex list-disc list-inside justify-center;

    width: 90%;

    & > li {
      @apply list-item px-2;

      font-size: 1vw;

      &:first-child {
        @apply list-none;
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
    @apply inline-flex items-center justify-end;

    width: 10%;

    & svg {
      @apply fill-current;

      width: 30px;
      height: 30px;
    }
  }
}
@media (max-width: theme('screens.md')) {
  .main-container {
    @apply flex-col;

    & > ul {
      @apply flex-col items-start;

      width: 100%;

      &.is-footer {
        display:none;
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
</style>
