<template>
  <div class="main-container">
    <div class="center">
      <div class="content">
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
          name: this.$t('partners.hds.name'),
          link: this.$t('partners.hds.link')
        },
        {
          name: this.$t('partners.confesercenti.name'),
          link: this.$t('partners.confesercenti.link')
        },
        {
          name: this.$t('partners.cnaShv.name'),
          link: this.$t('partners.cnaShv.link')
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.main-container {
  @apply bg-secondary text-white py-1;

  & .center {
    & .content {
      @apply flex justify-between items-center;

      & ul {
        @apply flex list-disc list-inside overflow-hidden;

        width: 90%;

        & li {
          @apply list-item px-2;

          font-size: 16px;

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

      & .icons-container {
        @apply flex justify-end;

        width: 10%;
        height: 28px;

        & svg {
          @apply fill-current;

          height: 28px;
        }
      }
    }
  }

}

@media only screen and (max-width: 970px) {
  .content {
    @apply flex justify-between items-center;

    & ul {
      @apply opacity-0 flex-col;

      width: 50%;

      &.is-footer {
        @apply opacity-100;
      }
    }
  }
}
</style>
