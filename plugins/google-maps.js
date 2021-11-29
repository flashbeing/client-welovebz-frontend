import Vue  from 'vue'
import * as GmapVue from 'gmap-vue'
import GmapCluster from 'gmap-vue/dist/components/cluster' // replace dist with src if you have Babel issues

Vue.use(GmapVue, {
  load: {
    key: "AIzaSyA81_U8ARS7feWyltkEDrz_LrjqWuymAI0",
    libraries: ["places"]
  },
  installComponents: true
})
Vue.component('GmapCluster', GmapCluster)
