import './global.css'

import { dir } from 'i18next'
import { detectLanguage } from './i18n/server'
import { I18nProvider } from './i18n/i18n-context'

export default async function RootLayout({ children }) {
  const lng = await detectLanguage()

  return (
    <I18nProvider language={lng} dir={dir(lng)}>
      <html lang={lng}>
        <head />
        <body>
          {children}
        </body>
      </html>
    </I18nProvider>
  )
}
