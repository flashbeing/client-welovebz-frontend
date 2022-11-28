<template>
  <div class="map-ct">
    <vl-map
      v-if="isMounted && !isPlaceholder"
      ref="map"
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326"
      class="map"
      @singleclick="clickedMap"
      @mounted="onMapMounted"
    >
      <vl-view
        :zoom.sync="zoom"
        :center.sync="center"
        :rotation.sync="rotation"
      ></vl-view>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-layer-vector v-for="(location, index) in markers" :key="index">
        <vl-feature :id="getLocationId(location.lat, location.lng)">
          <vl-geom-point
            :coordinates="[
              Number(location.lng) || 0,
              Number(location.lat) || 0,
            ]"
          ></vl-geom-point>
          <vl-style>
            <vl-style-icon
              src="/images/marker.png"
              :anchor="[0.5, 1]"
              :scale="0.9"
            >
            </vl-style-icon>
          </vl-style>
        </vl-feature>
      </vl-layer-vector>
    </vl-map>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => {},
    },
    markers: {
      type: Array,
      default: () => [],
    },
    isPlaceholder: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      DEFAULT_CONFIG: {
        ZOOM: 14,
        CENTER: [11.3536166, 46.4981249],
        ROTATION: 0,
      },

      zoom: null,
      center: null,

      isMounted: false,
    }
  },

  computed: {
    rotation() {
      return this.DEFAULT_CONFIG.ROTATION
    },
  },

  mounted() {
    if (this.isPlaceholder) return

    this.zoom = this.config?.zoom ?? this.DEFAULT_CONFIG.ZOOM
    this.center = this.getStartingCenter() || this.DEFAULT_CONFIG.CENTER

    this.isMounted = true
  },

  methods: {
    getStartingCenter() {
      const center = this.config?.center
      if (!center) {
        return null
      }

      if (!center?.lat || !center?.lng) {
        return null
      }

      return [center.lng, center.lat]
    },

    getLocationId(lat, lng) {
      return lat + '-' + lng
    },

    clickedMap(mapData) {
      const feature = this.$refs.map.forEachFeatureAtPixel(
        mapData.pixel,
        function (feature) {
          return feature
        }
      )

      if (!feature) {
        return
      }

      feature.then((result) => {
        const item = this.markers.find(
          (marker) => this.getLocationId(marker.lat, marker.lng) === result.id_
        )

        if (item) {
          this.clickedMarker(item)
        }
      })
    },

    clickedMarker(item) {
      this.$emit('clickedMarker', item)
    },

    onMapMounted(vlMap) {
      // vlMap here is an instance of vl-map component
      // here vlMap.$map - ol.Map instance - is ready to use
      vlMap.refresh()
      vlMap.$map.addControl(new this.$ol.FullScreen())
      // vlMap.$map.getView().fit(vectorSource.getExtent());
    },
  },
}
</script>

<style lang="postcss">
.map-ct {
  @apply w-full bg-placeholder;

  height: 500px;

  & .map {
    & .ol-zoom {
      top: auto !important;
      left: auto !important;
      bottom: 30px;
      right: 10px;
    }

    & .ol-control {
      @apply bg-white rounded-md p-0 shadow-sm;

      & button {
        @apply bg-transparent rounded-md text-black font-bold m-0
        flex items-center justify-center
        w-8 h-8;

        &:hover {
          @apply bg-placeholder;
        }
      }
    }
  }
}
</style>
