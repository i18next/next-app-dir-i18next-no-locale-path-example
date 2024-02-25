import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { getServerTranslations } from './i18n/server'

export default async function Page() {
  const { t } = await getServerTranslations()
  return (
    <>
      <main>
        <Header heading={t('h1')} />
        <h2>
          <Trans t={t} i18nKey="welcome">
            Welcome to Next.js v13 <small>appDir</small> and i18next
          </Trans>
        </h2>
        <div style={{ width: '100%' }}>
          <p>
            <Trans t={t} i18nKey="blog.text">
              Check out the corresponding <a href={t('blog.link')}>blog post</a> describing this example.
            </Trans>
          </p>
          <a href={t('blog.link')}>
            <img
              style={{ width: '50%' }}
              src="https://locize.com/blog/next-app-dir-i18n/next-app-dir-i18n.jpg"
            />
          </a>
        </div>
        <hr style={{ marginTop: 20, width: '90%' }} />
        <div>
          <Link href="/second-page">
            <button type="button">{t('to-second-page')}</button>
          </Link>
          <Link href="/client-page">
            <button type="button">{t('to-client-page')}</button>
          </Link>
        </div>
      </main>
      <Footer/>
    </>
  )
}
