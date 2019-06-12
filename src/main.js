import Vue from 'vue';

import VueAnalytics from 'vue-analytics'

import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';

import App from './App.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';

import SortedTablePlugin from "vue-sorted-table";
import VueScrollactive from "vue-scrollactive";

Vue.use(VueAnalytics, {
  id: 'UA-141900052-1',
  checkDuplicatedScript: true
})

Vue.use(SortedTablePlugin);
Vue.use(VueScrollactive);

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init();
  },
  render: h => h(App),
}).$mount('#app')
