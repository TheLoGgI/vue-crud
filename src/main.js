import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
// import { firestorePlugin } from 'vuefire'

const app = createApp(App)
// import VueFire from "vuefire";
// console.log(firestorePlugin);

// app.use(firestorePlugin);
app.use(router)
// Vue.config.productionTip = false

app.mount('#app')
