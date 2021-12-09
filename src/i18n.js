import Vue from "vue";
import VueI18n from "vue-i18n";
import uz from "./locale/uz.json";
import ru from "./locale/ru.json";

Vue.use(VueI18n);

export default new VueI18n({
  locale: localStorage.getItem("lang") || "uz",
  messages: {
    uz,
    ru,
  },
});
