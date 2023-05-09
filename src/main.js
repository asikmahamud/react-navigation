import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mitt from 'mitt';

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)


app.use(createPinia())
app.use(router)

const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.mount('#app')
