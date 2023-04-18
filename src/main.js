import { createApp } from 'vue'
import App from './App.vue'

import InifiniteScroll from './directives/infinite-scroll'
import VLoading from './directives/loading'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import 'virtual:windi.css'

import './assets/css/base.css'

const app = createApp(App)
app.use(ElementPlus).use(InifiniteScroll).use(VLoading)

app.mount('#app')
