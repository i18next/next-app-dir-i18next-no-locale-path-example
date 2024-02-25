import './global.css'

import { dir } from 'i18next'
import { detectLanguage, getServerTranslations } from './i18n/server'
import { I18nProvider } from './i18n/i18n-context'

export async function generateMetadata() {
  const { t } = await getServerTranslations()
  return {
    title: t('title'),
    description: 'A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.'
  }
}

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
