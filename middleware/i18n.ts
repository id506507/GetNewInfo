// export default function ({ isHMR, app, store, route, params, error, redirect }) {
//     const defaultLocale = app.i18n.fallbackLocale
//     // If middleware is called from hot module replacement, ignore it
//     if (isHMR) return
//     const locale = route.query.lang || defaultLocale
//     // if (store.state.locales.indexOf(locale) === -1) {
//     //   return error({ message: 'This page could not be found.', statusCode: 404 })
//     // }
//     //Mutate the store's locale once we understand which locale is being requested prior to each page render
//     store.commit('set_Lang', locale)
//     // Set locale from the query string '?lang='**''
//     app.i18n.locale = store.state.locale  
//   }
export default function ({ isHMR, app, store, route, params, req, error, redirect }) {
  if (isHMR) { // ignore if called from hot module replacement
    return;
  }

  if (req) {
    if (route.name) {
      let locale = null;

      // check if the locale cookie is set
      if (req.headers.cookie) {
        const cookies = req.headers.cookie.split('; ').map(stringCookie => stringCookie.split('='));
        const cookie = cookies.find(cookie => cookie[0] === 'locale');

        if (cookie) {
          locale = cookie[1];
        }
      }

      // if the locale cookie is not set, fallback to accept-language header
      if (!locale) {
        locale = req.headers['accept-language'].split(',')[0].toLocaleLowerCase().substring(0, 2);
      }

      store.commit('set_Lang', locale);
      app.i18n.locale = store.state.locale;
    }
  }
};