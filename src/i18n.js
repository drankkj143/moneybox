import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import sideRu from "./locales/ru/side.json"
import addRu from "./locales/ru/add.json"
import editRu from "./locales/ru/edit.json"
import settingsRu from "./locales/ru/settings.json"
import mainRu from "./locales/ru/main.json"

import sideEn from "./locales/en/side.json"
import addEn from "./locales/en/add.json"
import editEn from "./locales/en/edit.json"
import settingsEn from "./locales/en/settings.json"
import mainEn from "./locales/en/main.json"

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      main: mainRu,
      add: addRu,
      edit: editRu,
      settings: settingsRu,
      side: sideRu
    },
	en: {
      main: mainEn,
      add: addEn,
      edit: editEn,
      settings: settingsEn,
      side: sideEn
    }
  },
  lng: "ru",
  fallbackLng: "ru",
  ns: ["main", "add", "edit", "settings", "side"],
  defaultNS: "main",
  interpolation: { escapeValue: false }
})

export default i18n
