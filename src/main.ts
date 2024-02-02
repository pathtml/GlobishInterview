import { createApp } from "vue";
import App from "./App.vue";
import "./styles/main.scss";

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createRouter,createWebHashHistory } from 'vue-router'

import StartPage from './pages/StartPage.vue'
import PersonalityTest from './pages/PersonalityTest.vue'

const routes = [
  {path:'/',component: StartPage},
  {path:'/PersonalityTest',component:PersonalityTest}
]

const router = createRouter({
  history:createWebHashHistory(),
  routes,
})

const customTheme : ThemeDefinition = {
  dark: false,
  colors: {
    background: '#39B7E8',
    warning: '#f7c116'
  },
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customTheme',
    themes:{
      customTheme
    }
  },
})

createApp(App).use(vuetify).use(router).mount('#app')

