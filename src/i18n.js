import i18n from 'i18n-js';

import en from './locales/en.json';
import pl from './locales/pl.json';

const userLanguage = navigator.language || 'en';

i18n.defaultLocale = 'en';
i18n.locale = userLanguage;
i18n.fallbacks = true;
i18n.translations = { en, pl };

export default i18n;
