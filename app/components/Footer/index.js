import { FooterBase } from './FooterBase'
import {getServerTranslations} from "../../i18n/server"

export const Footer = async ({ path }) => {
  const { t, i18n } = await getServerTranslations('footer')
  return <FooterBase t={t} i18n={i18n} path={path} />
}
