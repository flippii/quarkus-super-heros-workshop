import 'bootstrap/dist/css/bootstrap.min.css';
import { renderInstance, getUserLocale, setupLocalizer } from 'piral';
import { createAuthApi } from 'piral-auth';
import { layout } from './layout';
import { errors } from "./error";

const feedUrl = 'https://feed.piral.io/api/v1/pilet/empty';

renderInstance({
  settings: {
    locale: setupLocalizer({
      language: getUserLocale,
      messages: {
        de: {},
        en: {
          dashboardTitle: 'Welcome to the Piral Sample App!',
          search: 'Search ...',
          signIn: 'Sign in',
          signOut: 'Sign out',
          account: 'Account',
          entities: 'Entities'
        },
      },
    }),
    menu: {
      items: [],
    },
  },
  extendApi: [createAuthApi()],
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
  layout,
  errors,
});
