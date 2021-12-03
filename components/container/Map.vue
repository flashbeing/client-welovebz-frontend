<template>
  <div class="map-container">
    <div class="map">
      <GmapMap
        ref="map"
        :options="options"
        :center="center"
        :zoom="zoom"
        :map-type-id="mapType"
        class="w-full h-full z-10"
      >
        <gmap-marker
          v-for="item of markers"
          :key="item.name"
          :clickable="true"
          :position="{ lat: Number(item.lat), lng: Number(item.lng) }"
          @click="showLocation(item)"
        />
      </GmapMap>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    markers: {
      type: Array,
      required: true,
    },
    zoom: {
      type: Number,
      default: 1,
    },
    center: {
      type: Object,
      default: () => {
        return {
          lat: 41.87194,
          lng: 12.56738,
        }
      },
    },
    options: {
      type: Object,
      default: () => {
        return {}
      },
    },
    mapType: {
      type: String,
      default: 'terrain',
    },
  },

  methods: {
    showLocation(location) {
      const newWin = window.open(
        'https://www.google.com/maps/search/?api=1&query=' +
          location.lat +
          ',' +
          location.lng
      )
      newWin.focus()
    },
  },
}
</script>
<style lang="postcss" scoped>
.map-container {
  @apply block relative;

  height: auto;
  z-index: 1;

  & .map {
    height: 400px;
    width: 100%;
    min-height: 500px;
  }
}
</style>
