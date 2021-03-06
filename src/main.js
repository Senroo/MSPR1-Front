import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSplide from "@splidejs/vue-splide";
import VueTour from 'vue-tour';
import VModal from 'vue-js-modal'
import i18n from './i18n'
import moment from 'moment'
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({

  state: {
    windowWidth: window.innerWidth,
  },
  mutations: {
    setWindowWidth(state) {
      state.windowWidth = window.innerWidth;
    }
  },
});

Vue.prototype.moment = moment

require('vue-tour/dist/vue-tour.css')

Vue.use(VueTour)
Vue.use(VModal)

Vue.use(i18n)


/*import axios from 'axios'; --> Import axios in your components when u need it*/

Vue.use(VueSplide);

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

// Import FontAwesome CSS/JS Files
import "@fortawesome/fontawesome-free/css/all.css";

import './registerServiceWorker'

Vue.config.productionTip = false;


new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount("#app");

import cookieconsent from 'vue-cookieconsent-component'

Vue.component('cookie-consent', cookieconsent)