import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";

import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

AOS.init({
  duration: 800, // مدة الحركة
  once: true, // الحركة تظهر مرة واحدة فقط
});

app.mount("#app");
