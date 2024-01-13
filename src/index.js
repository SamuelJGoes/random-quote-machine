import React from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import App from './App';

i18next.init({
  interpolation: { escapeValue: false }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <I18nextProvider i18n={i18next}>
      <App></App>
    </I18nextProvider>
  </>
);
