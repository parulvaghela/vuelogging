# sociallogin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 
https://www.npmjs.com/package/vue-google-oauth2

https://github.com/guruahn/vue3-google-oauth2       —------------------ vue 3

```
import { createApp } from 'vue'
import App from './App.vue'
import GAuth from 'vue3-google-oauth2'
const app = createApp(App)

const gAuthOptions = { clientId: 'YOUR_CLIENT_ID', scope: 'email', prompt: 'consent', fetch_basic_profile: false }
app.use(GAuth, gAuthOptions)
```
https://github.com/guruahn/vue3-google-oauth2-front-sample/ – sample code
