"use client"

import {languages} from "../../i18n/settings"
import {useRouter} from "next/navigation"
import i18next from "i18next"

export const LangSelect = ({ currentLanguage }) => {
  const router = useRouter()

  const handleChangeLanguage = (e, lang) => {
    e.preventDefault()
    i18next.changeLanguage(lang)
    router.refresh()
  }
  return (
    <div>
      {
        languages.map((lang, index) => {
          if (lang === currentLanguage) {
            return null
          }
          return (
            <span key={lang}>
              <button onClick={(e) => handleChangeLanguage(e, lang)} type="button">{lang}</button>
            </span>
          )
        })
      }
    </div>
  )
}
