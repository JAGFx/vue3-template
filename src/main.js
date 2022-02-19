import { createApp } from 'vue';
import App from './App.vue';
import Store from './store'

const app = createApp(App)

app.use( Store )
   .mount('#app');
