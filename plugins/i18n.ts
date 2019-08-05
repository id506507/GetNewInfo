import { Vue } from "nuxt-property-decorator";
import Vuei18n from 'vue-i18n';

Vue.use(Vuei18n);

export default ({ app,store }) => {
  // Set the i18n instance on app
  // This way we can use it globally in our components through this.$i18n
  app.i18n = new Vuei18n({
    // Set the initial locale
    locale: store.state.locale,
    // Set the fallback locale in case the current locale can't be found
    fallbackLocale: 'tc',

    // Associate each locale to a content file    
    messages: {
      tc: require("~/locale/tc.json"),
      en: require("~/locale/en.json")
    }
  });
};