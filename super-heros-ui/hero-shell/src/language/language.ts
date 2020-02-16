import { LanguageData } from 'piral';

const languages = {
  en: 'English',
  de: 'Deutsch',
};

function getSampleTranslations(language: string) {
  switch (language) {
    case 'en':
      return {
        ...languages,
        dashboardTitle: 'Welcome to the Piral Sample App!',
        search: 'Search ...',
        signIn: 'Sign in',
        signOut: 'Sign out',
        account: 'Account',
        entities: 'Entities'
      };
    case 'de':
      return {
        ...languages,
        dashboardTitle: 'Willkommen in der Piral Beispielanwendung!',
        search: 'Suche ...',
        signIn: 'Einloggen',
        signOut: 'Ausloggen',
        account: 'Account',
        entities: 'Modelle'
      };
  }
}

export function loadLanguage(language: string, data: LanguageData) {
  //in production translation data could be retrieved from language service
  return new Promise<LanguageData>(resolve =>
    setTimeout(
      () =>
        resolve({
          ...data,
          global: getSampleTranslations(language),
        }),
      500,
    ),
  );
}
