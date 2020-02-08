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
        sample: 'Welcome to the Piral Sample App!',
        search: 'Search ...',
      };
    case 'de':
      return {
        ...languages,
        sample: 'Willkommen in der Piral Beispielanwendung!',
        search: 'Suche ...',
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
