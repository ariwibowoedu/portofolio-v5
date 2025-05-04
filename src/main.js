import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// font poppins
import '@fontsource/poppins'

// animate on scroll
import 'aos/dist/aos.css'
import AOS from 'aos'
AOS.init({
    duration: 600
})


const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
