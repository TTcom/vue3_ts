import { createApp } from "vue"

import App from "./App.vue"
import router from "./router"
import "./global.js"
import About from "./views/About.vue"

createApp(App)
  .component("tlabout", About)
  .use(router)
  .mount("#app")
