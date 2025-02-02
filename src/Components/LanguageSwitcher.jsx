import { useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("UZ");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
   
    localStorage.setItem("selectedLanguage", lang);
  };

  return (
    <div className="relative inline-block text-left">
      <button className="px-4 py-2 bg-gray-200 rounded-md">
        {language} ▼
      </button>
      <div className="absolute mt-2 w-32 bg-white border rounded-md shadow-lg">
        <ul>
          <li>
            <button
              onClick={() => handleLanguageChange("UZ")}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              O'zbekcha (UZ)
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLanguageChange("EN")}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              English (EN)
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLanguageChange("RU")}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              Русский (RU)
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
