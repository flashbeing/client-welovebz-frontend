<template>
  <main>
    <section class="green overflow-hidden">
      <div class="center">
        <div class="header">
          <Icon name="face-smile" />
          <div class="titles">
            <h1>
              {{ $t('page.homepage.heading.title') }}
              <div>22|23</div>
              <span>{{ $t('common.at') }}</span>
            </h1>

            <div class="other-text">
              <h3>{{ $t('page.homepage.heading.subtitle') }}</h3>
              <!--<h2>{{ $t('page.homepage.heading.secondTitle') }}</h2>-->
              <div class="prize">
                <div>
                  {{ $t('page.homepage.heading.afterTheFirstEditionsSuccess') }}
                </div>
                <div>
                  {{ $t('page.homepage.heading.moreInformationComingSoon') }}
                </div>

                <!-- <div class="car">
                  <div class="image"></div>
                  <p class="label">
                    {{ $t('page.homepage.heading.mainPrize') }}<br />Porsche
                    Macan
                  </p>
                </div>
                <div class="logo"></div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <PartnersList /> -->
    <section id="intro" class="green">
      <div class="center">
        <TitleHeading :show-as-title="true">{{
          $t('page.homepage.firstSection.title')
        }}</TitleHeading>
        <i18n path="page.homepage.firstSection.firstParagraph.text" tag="p">
          <template #bold>
            <b>{{ $t('page.homepage.firstSection.firstParagraph.bold') }}</b>
          </template>
        </i18n>
        <br />
        <i18n path="page.homepage.firstSection.secondParagraph.text" tag="p">
          <template #bold>
            <b>{{ $t('page.homepage.firstSection.secondParagraph.bold') }}</b>
          </template>
          <template #link>
            <a href="/#partner">{{
              $t('page.homepage.firstSection.secondParagraph.link')
            }}</a>
          </template>
        </i18n>
      </div>
    </section>
    <!-- <section id="countdown" class="red">
      <div class="center">
        <TitleHeading :show-as-title="true" :inverted="true">{{
          $t('page.homepage.winnersInfo.title')
        }}</TitleHeading>
        <div class="countdown">
          <Countdown :end-date="endCountdown" @end="isCountdownOver = true" />
        </div>
        <p class="mt-3">{{ $t('page.homepage.winnersInfo.topDesc') }}</p>
        <ul>
          <li>{{ $t('page.homepage.winnersInfo.pointOne') }}</li>
          <i18n path="page.homepage.winnersInfo.pointTwo" tag="li">
            <template #link>
              <a
                href="/pdf/dichiarazione_accettazione_premio_welovebz.pdf"
                download="dichiarazione_accettazione_premio_welovebz.pdf"
                class="underline"
                >{{ $t('page.homepage.winnersInfo.pointTwoPrize') }}</a
              >
            </template>
          </i18n>
          <li>{{ $t('page.homepage.winnersInfo.pointThree') }}</li>
        </ul>
        <p class="mt-3">{{ $t('page.homepage.winnersInfo.closureDesc') }}</p>
        <div class="winners-list">
          <TextInput
            v-model="prizeCodeFilter"
            type="number"
            :placeholder="$t('common.search') + '...'"
            class="mt-8 mb-3"
            aspect="fill"
          />
        </div>
        <div class="prizes">
          <p
            v-for="(item, index) of filteredWonPrizes.slice(
              0,
              SHOW_PRIZES_UNTIL
            )"
            :key="index"
            class="prize"
          >
            <b>{{ item.number + '. ' + item.code + ': ' + item.prize }}</b>
            <span> - </span>
            {{ item.shopName }}
          </p>
        </div>
        <Accordion
          v-if="filteredWonPrizes.length > 22"
          :button="$t('page.homepage.winnersInfo.seeMore')"
          :is-black="true"
        >
          <div class="prizes">
            <p
              v-for="(item, index) of filteredWonPrizes.slice(
                SHOW_PRIZES_UNTIL
              )"
              :key="index"
              class="prize"
            >
              <b>{{ item.number + '. ' + item.code + ': ' + item.prize }}</b>
              <span> - </span>
              {{ item.shopName }}
            </p>
          </div>
        </Accordion>
        <p v-if="!filteredWonPrizes.length">
          {{ $t('page.homepage.winnersInfo.noWinningPrizeFound') }}
        </p> -->
    <!--<i18n path="page.homepage.secondSection.firstParagraph.text" tag="p">
          <template #bold>
            <b class="text-primary">{{
              $t('page.homepage.secondSection.firstParagraph.bold')
            }}</b>
          </template>
          <template #newline>
            <br />
          </template>
          <template #link>
            <a href="#">{{
              $t('page.homepage.secondSection.firstParagraph.link')
            }}</a>
          </template>
        </i18n>-->
    <!--<Accordion
          v-if="isCountdownOver"
          :button="$t('page.homepage.secondSection.button')"
          :is-red="true"
        >
          <div>
            <p v-for="item of getWinners" :key="item.id">
              <b>{{ item.id }}.</b>
              {{ item.name }}
            </p>
            <b v-show="!awardFilter">...</b>
            <TextInput
              v-model="awardFilter"
              type="number"
              :placeholder="$t('common.search')"
            />
          </div>
        </Accordion>-->
    <!-- </div>
    </section> -->
    <!-- <section id="sponsors" class="black">
      <div class="partner-title">
        <div class="center">
          <TitleHeading :show-as-title="true">{{
            $t('page.homepage.fifthSection.title')
          }}</TitleHeading>
        </div>
      </div>
      <div class="partners">
        <div class="center">
          <Slider :elements="partners" />
        </div>
      </div>
    </section> -->
    <!-- <section id="prizes" class="green">
      <div class="center">
        <TitleHeading :show-as-title="true">{{
          $t('page.homepage.thirdSection.title')
        }}</TitleHeading>
        <div class="prizes">
          <p
            v-for="(item, index) of prizes.slice(0, SHOW_PRIZES_UNTIL)"
            :key="index"
            class="prize"
          >
            <b>{{ index + 1 + '. ' + item.name }}</b>
            <span> - </span>
            {{ item.description }}
          </p>
        </div>
        <Accordion :button="$t('page.homepage.thirdSection.button')">
          <div class="prizes">
            <p
              v-for="(item, index) of prizes.slice(SHOW_PRIZES_UNTIL)"
              :key="index"
              class="prize"
            >
              <b>{{ index + 22 + '. ' + item.name }}</b>
              <span> - </span>
              {{ item.description }}
            </p>
          </div>
        </Accordion>
      </div>
    </section> -->
    <!-- <section id="partner" class="white">
      <div class="center">
        <TitleHeading :show-as-title="true" :show-green="true">{{
          $t('page.homepage.fourthSection.title')
        }}</TitleHeading>
        <Map
          :markers="stores.all"
          :center="{ lat: 46.4892313, lng: 11.3121382 }"
          :options="options"
          map-type="roadmap"
        />
        <Accordion
          :button="$t('page.homepage.fourthSection.button')"
          :is-green="true"
        >
          <div>
            <p v-for="store in stores.unique" :key="store.name">
              <a
                :href="
                  'https://' +
                  store.website.replace('http://', '').replace('https://', '')
                "
                target="_blank"
                >{{ store.name }}</a
              >
            </p>
          </div>
        </Accordion>
      </div>
    </section> -->
    <div
      class="scroll-top-bt clickable"
      :class="{ visible: !scrolledBodyToTop }"
      @click="scrollToTop()"
    >
      <Icon name="arrow-up" class="ico" />
    </div>
  </main>
</template>
<script>
import prizesData from '~/static/data/prizes.json'
import wonPrizes from '~/static/data/wonPrizes.json'
import shopsData from '~/static/data/shops.json'

export default {
  data() {
    return {
      SHOW_PRIZES_UNTIL: 21,
      isCountdownOver: false,
      scrolledBodyToTop: true,
      partners: [
        {
          img: 'partners/Aspiag.svg',
        },
        {
          img: 'partners/BrasolinAuto.svg',
        },
        {
          img: 'partners/Globus.svg',
        },
        {
          img: 'partners/Gutweniger.svg',
        },
        {
          img: 'partners/HCB_Foxes.svg',
        },
        {
          img: 'partners/hds_unione.svg',
        },
        {
          img: 'partners/Laurin.svg',
        },
        {
          img: 'partners/Lorenzi.svg',
        },
        {
          img: 'partners/Mair.svg',
        },
        {
          img: 'partners/META.svg',
        },
        {
          img: 'partners/OberrauchZitt.svg',
        },
        {
          img: 'partners/Pornbacher.svg',
        },
        {
          img: 'partners/Porsche.png',
        },
        {
          img: 'partners/ProfumerieFerrari.png',
        },
        {
          img: 'partners/Provoice.png',
        },
        {
          img: 'partners/Ranzi_Knapp.svg',
        },
        {
          img: 'partners/SkyAlps.svg',
        },
        {
          img: 'partners/Sparkasse.svg',
        },
        {
          img: 'partners/Sportler.svg',
        },
        {
          img: 'partners/Twenty.svg',
        },
        {
          img: 'partners/Alto_Adige.png',
        },
        {
          img: 'partners/Dolomiten.png',
        },
        {
          img: 'partners/Noistudio.png',
        },
      ],
      options: {
        streetViewControl: false,
        minZoom: 13,
        maxZoom: 15,
        mapTypeControl: false,
      },
      prizeCodeFilter: '',
      endCountdown: '2022-01-12T00:00:00',
      wonPrizes,
    }
  },

  computed: {
    getWinners() {
      if (this.awardFilter) {
        return this.winners.filter((item) => item.id === this.awardFilter)
      }
      return this.winners.slice(0, 30)
    },

    filteredWonPrizes() {
      let prizes = this.wonPrizes.map((p, index) => {
        const descParts = p.prize.split(/\r?\n/)

        let prize = descParts[0].trim()
        if (descParts[1] && descParts[1].trim()) {
          const itDesc = descParts[0].trim()
          const deDesc = descParts[1].trim()

          if (this.$i18n.locale === 'it') {
            prize = itDesc
          } else {
            prize = deDesc
          }
        }

        return {
          number: index + 1,
          shopName: p.name.trim(),
          prize,
          code: p.code.trim(),
        }
      })

      if (this.prizeCodeFilter) {
        prizes = prizes.filter((p) => p.code.includes(this.prizeCodeFilter))
      }

      return prizes
    },

    prizes() {
      return prizesData.map((d) => ({
        name: d.name,
        description: d['prize-' + this.$i18n.locale],
      }))
    },

    stores() {
      const printed = {}
      const all = []
      const unique = []

      shopsData.forEach((d) => {
        const storeName = d.name.trim()
        const storeData = {
          name: storeName,
          lat: d.lat,
          lng: d.lng,
          website: d.website,
        }

        all.push(storeData)

        if (!printed[storeName]) {
          printed[storeName] = true
          unique.push(storeData)
        }
      })

      // Order stores by name
      unique.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      })

      return {
        all,
        unique,
      }
    },
  },

  mounted() {
    this.watchWindowScroll()
  },

  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },

    watchWindowScroll() {
      window.addEventListener('scroll', () => {
        if (window.scrollY < window.innerHeight / 2) {
          this.scrolledBodyToTop = true
        } else {
          this.scrolledBodyToTop = false
        }
      })
    },
  },
}
</script>

<style lang="postcss" scoped>
main {
  & section {
    @apply m-auto block py-12 overflow-hidden;

    & a {
      @apply underline;
    }

    &.red {
      @apply text-white bg-secondary;

      & .countdown {
        @apply text-center mb-6;
      }

      & h2 {
        @apply text-black;

        & span {
          color: white;
        }
      }
    }

    &.black {
      & .partner-title {
        @apply bg-black pt-8 pb-1;
      }

      & .partners {
        @apply bg-white pt-10;
      }
    }

    &.white {
      @apply text-center;

      & h2 {
        @apply text-black text-primary;
      }
    }

    &.green {
      @apply text-white bg-primary;

      & .header {
        @apply flex justify-between;

        & svg {
          @apply overflow-visible;
        }

        & .titles {
          @apply text-left pt-14;

          width: 60%;

          & h1 {
            @apply font-medium leading-none text-8xl;

            & div {
              @apply inline bg-black text-6xl;

              letter-spacing: -3px;
              padding-top: 3px;
            }

            & span {
              @apply opacity-60 text-6xl;

              letter-spacing: -3px;
            }
          }

          & .other-text {
            @apply pt-12;

            & h2 {
              font-size: 40px;
            }

            & h3 {
              font-size: 20px;
            }

            & .prize {
              @apply mt-8 mb-12;

              & .car {
                @apply inline-block mr-4;

                & .image {
                  @apply bg-contain bg-center bg-no-repeat mb-3;

                  width: 200px;
                  height: 100px;
                  background-image: url(~/static/images/porsche-macan.png);
                }

                & .label {
                  @apply text-base text-black;
                }
              }

              & .logo {
                @apply inline-block bg-contain bg-center bg-no-repeat align-top;

                width: 200px;
                height: 100px;
                background-image: url(~/static/images/partners/Porsche.png);
              }
            }
          }
        }
      }
    }

    &#sponsors {
      @apply pt-0;
    }
  }

  & .scroll-top-bt {
    @apply fixed bottom-8 right-8 bg-black flex items-center justify-center opacity-0 pointer-events-none transition cursor-pointer;

    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transform: translateY(50px);
    z-index: 3;

    & .ico {
      width: 20px;
      height: 20px;
      fill: theme(colors.white) !important;
    }

    &.visible {
      @apply opacity-100 pointer-events-auto;

      transform: none;
    }
  }
}

@media only screen and (max-width: 980px) {
  main {
    & section {
      @apply text-center py-10;

      & .prizes {
        & .prize {
          @apply mb-2;
        }
      }

      &.green {
        @apply text-white bg-primary;

        & .header {
          @apply flex justify-between;

          & svg {
            @apply relative;

            left: -120px;
          }

          & .titles {
            @apply relative pl-8;

            left: -120px;

            & h1 {
              @apply font-medium leading-none text-4xl;
            }

            & .other-text {
              @apply pt-6;

              & h2 {
                @apply text-xl;
              }

              & h3 {
                @apply text-sm;
              }

              & .prize {
                & .car {
                  @apply block mr-0 mb-6;
                }

                & .logo {
                  @apply block;

                  background-position: left center;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
