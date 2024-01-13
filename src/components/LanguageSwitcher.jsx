import { useTranslation } from 'react-i18next';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

import '../styles/styles.scss';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select className="languages-selector" value={i18n.language} onChange={handleLanguageChange}>
      <option value="en">en {getUnicodeFlagIcon('US')}</option>
      <option value="pt">pt-br {getUnicodeFlagIcon('BR')}</option>
      {/* <option value="de">de {getUnicodeFlagIcon('DE')}</option> */}
    </select>
  );
}
