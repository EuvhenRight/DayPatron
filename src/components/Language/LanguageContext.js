import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import i18n from './Translator.js'; // Import your i18n instance

const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const currentLanguage = location.pathname.split('/')[1];

  const [lang, setLang] = React.useState(currentLanguage);

  React.useEffect(() => {
    // Check if the language in the URL matches the selected language,
    // and update the language if needed.
    if (currentLanguage !== lang) {
      i18n.changeLanguage(currentLanguage);
      setLang(currentLanguage);
    }
  }, [currentLanguage, lang]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    const newPath = location.pathname.replace(
      `/${currentLanguage}`,
      `/${lang}`
    );
    navigate(newPath);
    setLang(lang);
  };

  return (
    <LanguageContext.Provider
      value={{ lang, changeLanguage, currentLanguage, i18n, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  return React.useContext(LanguageContext);
}
