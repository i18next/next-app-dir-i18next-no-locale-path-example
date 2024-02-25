'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer/client'

export default function Page() {
  const { t } = useTranslation('second-client-page')
  return (
    <>
      <main>
        <Header heading={t('h1')} />
        <Link href="/">
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
      </main>
      <Footer path="/second-client-page" />
    </>
  )
}
