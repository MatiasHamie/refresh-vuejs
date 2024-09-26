import "./assets/main.css";
import "primeicons/primeicons.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import router from "./router";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(Toast, {
  position: "top-right",
  timeout: 5000,
});

app.mount("#app");
