import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.i18n.locale,
    fallbackLocale: 'en',
    messages: {
      en: require('~/locales/en.json'),
      fr: require('~/locales/fr.json')
    }
  })

  app.i18n.path = link => {
    return `/${link}`
  }

  app.$moment.locale(store.state.i18n.locale)    
}
