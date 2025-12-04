import React, { useEffect, useState } from "react"
import './appinfomenu.css'
import { CgColorBucket } from "react-icons/cg"
import { IoIosArrowBack } from "react-icons/io"
import { MdLanguage, MdEmail } from "react-icons/md"
import { FaGithub, FaTelegram } from "react-icons/fa"
import { useTranslation } from "react-i18next"

const AppInfoMenu = ({toggleInfoMenu, changeTheme}) => {
  const { t, i18n } = useTranslation('settings')

  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("lang")
    return saved ? saved : "ru"
  })

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme")
    return savedTheme ? savedTheme : "dark"
  })

  useEffect(() => {
    i18n.changeLanguage(lang)
    localStorage.setItem("lang", lang)
  }, [lang])

  useEffect(() => {
    localStorage.setItem("theme", theme)
    changeTheme()
  }, [theme])

  return <div className="app-info-menu">
    <div className="info-menu-back">
      <IoIosArrowBack className="back-button" onClick={toggleInfoMenu}/>
      <p>{t('title')}</p>
    </div>
    <div className="info-block">
      <p>{t("titles.appSettings")}</p>
      <div className="info-block-content">
        <CgColorBucket className="info-block-icon"/>
        <div className="info-block-input">
          <label htmlFor="theme-select">{t("theme.title")}</label>
          <select id="theme-select" value={theme} onChange={e => setTheme(e.target.value)}>
            <option value="dark">{t("theme.darkSelect")}</option>
            <option value="light">{t("theme.lightSelect")}</option>
          </select>
        </div>
      </div>
      <div className="info-block-content">
        <MdLanguage className="info-block-icon"/>
        <div className="info-block-input">
          <label htmlFor="lang-select">{t("language.title")}</label>
          <select id="lang-select" value={lang} onChange={e => setLang(e.target.value)}>
            <option value="ru">{t("language.ruSelect")}</option>
            <option value="en">{t("language.enSelect")}</option>
          </select>
        </div>
      </div>
    </div>
    <div className="info-block">
      <p>{t("titles.developerInfo")}</p>
      <div className="info-block-content">
        <FaGithub className="info-block-icon"/>
        <a href="https://github.com/drankkj143">Github</a>
      </div>
      <div className="info-block-content">
        <FaTelegram className="info-block-icon"/>
        <a href="https://t.me/angeImaycry1">Telegram</a>
      </div>
      <div className="info-block-content">
        <MdEmail className="info-block-icon"/>
        <a href="mailto:danilarakovets@gmail.com">Email</a>
      </div>
    </div>
  </div>
}

export default AppInfoMenu
