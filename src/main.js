import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import router from './router'
import 'flowbite';
import '../node_modules/flowbite-vue/dist/index.css'

createApp(App).use(router).mount('#app')
