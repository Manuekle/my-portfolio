import React, { useState } from 'react';
import i18next from 'i18next';
import { eng } from './en';
import { esp } from './es';

function Lang() {
  const [language, setLanguage] = useState('en');

  i18next.init({
    interpolation: { escapeValue: false },
    lng: language,
    resources: {
      en: {
        translation: eng
      },
      es: {
        translation: esp
      }
    }
  });

  return (
    <div>
      <h1>{i18next.t('title')}</h1>
      <button type="button" onClick={() => setLanguage('en')}>
        {i18next.t('english')}
      </button>
      <button type="button" onClick={() => setLanguage('es')}>
        {i18next.t('spanish')}
      </button>
    </div>
  );
}

export default Lang;
