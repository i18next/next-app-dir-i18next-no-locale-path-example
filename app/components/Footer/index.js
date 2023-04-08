import { useTranslation } from '../../i18n'
import { FooterBase } from './FooterBase'

export const Footer = async ({ path }) => {
  const { t, i18n } = await useTranslation('footer')
  return <FooterBase t={t} i18n={i18n} path={path} />
}
