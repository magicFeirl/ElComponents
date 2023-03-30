import { createApp } from 'vue'
import App from './App.vue'

import InifiniteScroll from './directives/infinite-scroll'

import ElementPlus from 'element-plus'

import 'virtual:windi.css'

import './assets/css/base.css'

createApp(App).use(ElementPlus).use(InifiniteScroll).mount('#app')
