import Vue  from 'vue'
import * as GmapVue from 'gmap-vue'
import GmapCluster from 'gmap-vue/dist/components/cluster' // replace dist with src if you have Babel issues

Vue.use(GmapVue, {
  load: {
    key: "AIzaSyDnvmcaKy4vw3EhKFt0IdudkNdJZRbPX18",
    libraries: ["places"]
  },
  installComponents: true
})
Vue.component('GmapCluster', GmapCluster)
