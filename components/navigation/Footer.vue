<template>
  <footer>
    <ul>
      <li>
        {{ $t('footer.company') }}
      </li>
      <li>
        <a href="https://www.unione-bz.it/it/home/1-0.html">
          {{ $t('footer.hds') }}
        </a>
      </li>
      <li>
        <a href="https://www.hgv.it/de/">
          {{ $t('footer.hgv') }}
        </a>
      </li>
      <li>
        <a href="https://www.commercianti.bz.it/">
          {{ $t('footer.confesercenti') }}
        </a>
      </li>
      <li>
        <a href="http://www.shv.cnabz.com/index.php/it/">
          {{ $t('footer.cnaShv') }}
        </a>
      </li>
      <li>
        <a href="https://www.lvh.it/it/">
          {{ $t('footer.lvh') }}
        </a>
      </li>
    </ul>
    <div class="icons-container">
      <a href="">
        <Facebook class="icon fb" />
      </a>
      <a href="">
        <Instagram class="icon ig" />
      </a>
    </div>
  </footer>
</template>

<script>
import Facebook from '@/assets/icon/facebook.svg'
import Instagram from '@/assets/icon/instagram.svg'
export default {
  components: {
    Facebook,
    Instagram,
  },
}
</script>

<style lang="postcss" scoped>
footer {
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
    & .icon {
      @apply fill-current;

      width: 30px;
      height: 30px;

      &.ig {
        width: 42px;
        height: 42px;
      }
    }
  }
}

@media (max-width: theme('screens.md')) {
  footer {
    @apply flex-col;
    & > ul {
      @apply flex-col items-start;

      width: 100%;

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
