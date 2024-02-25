import { LangSelect } from './LangSelect'
import { Trans } from 'react-i18next/TransWithoutContext'

export const FooterBase = ({ t, i18n }) => {
  const lng = i18n.resolvedLanguage

  return (
    <footer>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{lng}}</strong> to:{' '}
      </Trans>
      <LangSelect currentLanguage={lng} />
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
