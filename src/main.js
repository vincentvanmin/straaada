import Vue from 'vue';

import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';

import App from './App.vue';
import SortedTablePlugin from "vue-sorted-table";
import VueScrollactive from "vue-scrollactive";

Vue.use(SortedTablePlugin);
Vue.use(VueScrollactive);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
