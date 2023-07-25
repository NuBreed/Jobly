import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faUserSecret,
  faMessage,
  faBell,
  faUser,
  faBars,
  faChevronRight,
  faXmark,
  faEnvelope,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUserSecret,
  faMessage,
  faBell,
  faUser,
  faBars,
  faChevronRight,
  faXmark,
  faEnvelope,
  faPhone,
  faLocationDot
)

import App from './App.vue'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
