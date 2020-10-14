import { createApp } from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "./assets/css/style.css";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
