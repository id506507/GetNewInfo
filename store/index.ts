export const state = () => ({
    locales: ['en', 'hk'],
    locale: 'hk'
  })
  
  export const mutations = {
    set_Lang (state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale
      }
    }
  }