import { createApp } from 'vue'
import App from './App.vue'
import gAuthPlugin from 'vue3-google-oauth2';
const gauthOption = { clientId: '1037854319337-e5788hf534hui58dbu15gitsqjkrfjal.apps.googleusercontent.com', scope: 'email', prompt: 'consent', fetch_basic_profile: false }
createApp(App).use(gAuthPlugin, gauthOption).mount('#app')
