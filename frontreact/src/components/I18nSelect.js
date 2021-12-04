import React from "react";
import { LOCALES } from "../i18n/locales";

export const I18nSelect = ({onLanguageChange, currentLanguage}) => {
  function handleLanguageChange(e) {
    const newLang = e.target.value;
    onLanguageChange(newLang);
  }
  return (
    <select
      className="i18n-selector"
      value={currentLanguage}
      onChange={handleLanguageChange}
    >
      <option value={LOCALES.SPANISH}>
        {currentLanguage === LOCALES.ENGLISH ? "Spanish" : "Español"}
      </option>
      <option value={LOCALES.ENGLISH}>
        {currentLanguage === LOCALES.ENGLISH ? "English" : "Inglés"}
      </option>
    </select>
  );
};
