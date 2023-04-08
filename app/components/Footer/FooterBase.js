import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../../i18n/settings'

export const FooterBase = ({ t, i18n, path = '/', attachOnClick }) => {
  const lng = i18n.resolvedLanguage
  return (
    <footer>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{lng}}</strong> to:{' '}
      </Trans>
      {languages.filter((l) => lng !== l).map((l, index) => {
        return (
          <span key={l}>
            {index > 0 && (' or ')}
            {attachOnClick && <Link href={`${path}?lng=${l}`} onClick={(e) => {
                e.preventDefault()
                i18n.changeLanguage(l)
              }}>
              {l}
            </Link>}
            {!attachOnClick && <Link href={`${path}?lng=${l}`}>
              {l}
            </Link>}
          </span>
        )
      })}
      <p>{t('description')}</p>
      <p
        style={{
          fontSize: 'smaller',
          fontStyle: 'italic',
          marginTop: 20,
        }}
      >
        <Trans i18nKey="helpLocize" t={t}>
          With using 
          <a href="https://locize.com" target="_new">
            locize
          </a>
          you directly support the future of
          <a href="https://www.i18next.com" target="_new">
            i18next
          </a>
          .
        </Trans>
      </p>
    </footer>
  )
}
