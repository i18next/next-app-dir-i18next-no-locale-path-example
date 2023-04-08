import Link from 'next/link'
import { useTranslation } from '../i18n'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default async function Page() {
  const { t } = await useTranslation('second-page')
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
      <Footer path="/second-page" />
    </>
  )
}