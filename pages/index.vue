<template>
  <main>
    <section class="green">
      <div class="center">
        <div class="header">
          <Icon name="face-smile" />
          <div class="titles">
            <h1>
              {{ $t('page.homepage.heading.title') }}<span>{{ $t('common.at') }}</span>
            </h1>
            <div class="other-text">
              <h3>{{ $t('page.homepage.heading.subtitle') }}</h3>
              <h2>{{ $t('page.homepage.heading.secondTitle') }}</h2>
              <div class="prize">

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <PartnersList />
    <section class="green">
      <div class="center">
        <TitleHeading>{{ $t('page.homepage.firstSection.title') }}</TitleHeading>
        <i18n path="page.homepage.firstSection.firstParagraph.text" tag="p">
          <template #bold>
            <b>{{$t('page.homepage.firstSection.firstParagraph.bold')}}</b>
          </template>
        </i18n>
        <br>
        <i18n path="page.homepage.firstSection.secondParagraph.text" tag="p">
          <template #bold>
            <b>{{$t('page.homepage.firstSection.secondParagraph.bold')}}</b>
          </template>
          <template #link>
            <a href="#">{{$t('page.homepage.firstSection.secondParagraph.link')}}</a>
          </template>
        </i18n>
      </div>
    </section>
    <section class="red">
      <div class="center">
        <TitleHeading span-custom-style="color:white">{{ $t('page.homepage.secondSection.title') }}</TitleHeading>
        <div class="countdown">
        <Countdown :end-date="endCountdown" @end="isCountdownOver = true" />
        </div>
        <i18n path="page.homepage.secondSection.firstParagraph.text" tag="p">
          <template #bold>
            <b class="text-primary">{{$t('page.homepage.secondSection.firstParagraph.bold')}}</b>
          </template>
          <template #newline>
            <br>
          </template>
          <template #link>
            <a href="#">{{$t('page.homepage.secondSection.firstParagraph.link')}}</a>
          </template>
        </i18n>
        <Accordion v-if="isCountdownOver" :button="$t('page.homepage.secondSection.button')" :is-red="true">
          <div>
            <p
              v-for="item of getWinners"
              :key="item.id">
              <b>{{item.id}}.</b>
              {{ item.name}}
            </p>
            <b v-show="!awardFilter">...</b>
            <TextInput v-model="awardFilter" type="number" :placeholder="$t('common.search')" />
          </div>
        </Accordion>
      </div>
    </section>
    <section class="green">
      <div class="center">
        <TitleHeading>{{ $t('page.homepage.thirdSection.title') }}</TitleHeading>
        <div>
          <p
            v-for="(item, index) of prizes.slice(0, maxPrizes)"
            :key="index">
            <b>{{(index + 1) + '. ' + item.name}}</b>
            <span> - </span>
            {{item.description}}
          </p>
        </div>
        <Accordion :button="$t('page.homepage.thirdSection.button')">
          <div>
            <p
              v-for="(item, index) of prizes.slice(maxPrizes+1)"
              :key="index">
              <b>{{(index + 22) + '. ' + item.name}}</b>
              <span> - </span>
              {{item.description}}
            </p>
          </div>
        </Accordion>
      </div>
    </section>
    <section class="white">
      <div class="center">
        <TitleHeading>{{ $t('page.homepage.fourthSection.title') }}</TitleHeading>
        <Map
          :markers="stores"
          :center="{lat:46.4892313, lng:11.3121382}"
          :options="options"
          map-type="roadmap"
        />
        <Accordion :button="$t('page.homepage.fourthSection.button')" :is-green="true">
          <div>
            <p
              v-for="(item, index) of stores"
              :key="index">
              {{item.name}}
            </p>
          </div>
        </Accordion>
      </div>
    </section>
    <section class="black">
      <div class="partner-title">
        <div class="center">
          <TitleHeading>{{ $t('page.homepage.fifthSection.title') }}</TitleHeading>
        </div>
      </div>
      <div class="partners">
        <div class="center">
          <Slider :elements="partners" />
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data(){
    return {
      isCountdownOver: false,
      winners: [
        {
          id: '12',
          name: 'blabla'
        }
      ],
      prizes: [
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
        {
          "name": "porsche macha",
          "description": "blablalbla"
        },
      ],
      maxPrizes: 21,
      stores: [
        {
          name: 'store1',
          lat:46.4892313,
          lng:11.3121382
        },
        {
          name: 'store1',
          lat:46.4892313,
          lng:11.3121352
        },
        {
          name: 'store1',
          lat:46.4892313,
          lng:11.3121362
        },
        {
          name: 'store1',
          lat:46.4892313,
          lng:11.3121392
        },
        {
          name: 'store1',
          lat:46.4892313,
          lng:11.3121389
        },
        {
          name: 'store1',
          lat:46.4892313,
          lng:11.3151382
        },
        {
          name: 'store1',
          lat:46.4892313,
          lng:11.3121282
        },
        {
          name: 'store1',
          lat:46.4892315,
          lng:11.3121382
        },
        {
          name: 'store1',
          lat:46.4892313,
          lng:11.3121384
        },
      ],
      partners:[
        {
          name: 'trolla',
          img: 'porsche.png'
        },
        {
          name: 'trolla',
          img: 'porsche.png'
        },
        {
          name: 'trolla',
          img: 'porsche.png'
        },
        {
          name: 'trolla',
          img: 'porsche.png'
        },
      ],
      options: {
        streetViewControl: false,
        minZoom: 13,
        maxZoom: 15,
        mapTypeControl: false
      },
      awardFilter: '',
      endCountdown: '2021-11-12T11:57:59'
    }
  },
  computed: {
    getWinners() {
      if (this.awardFilter) {
        return this.winners.filter(item => item.id === this.awardFilter)
      }
      return this.winners.slice(0,30)
    }
  }
}
</script>

<style lang="postcss" scoped>
main {
  & section {
    @apply m-auto block py-10 overflow-hidden;

    & a {
      @apply underline;
    }

    & h2 {
      @apply text-center;
    }

    &.red {
      @apply text-white bg-secondary text-center;

      & .countdown {
        @apply w-3/4 m-auto py-5;
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
        @apply bg-black;
      }

      & h2 {
        @apply text-white;
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
            @apply font-medium leading-none;

            font-size: 60px;

            & span {
              @apply text-grey;
            }
          }

          & .other-text {
            @apply py-20;


            & h2 {
              font-size: 40px;
            }

            & h3 {
             font-size: 20px;
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 980px) {
  main {
    & section {
      @apply text-center py-10;

      &.green {
        @apply text-white bg-primary;

        & .header {
          @apply flex justify-between;

          & svg {
            @apply overflow-visible;
          }

          & .titles {
            width: 100%;

            & h1 {
              @apply font-medium leading-none;

              font-size: 60px;

              & span {
                @apply text-grey;
              }
            }
            & .other-text {
              @apply py-20;

              & h2 {
                font-size: 40px;
              }

              & h3 {
                font-size: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
