'use client'

import { FooterBase } from './FooterBase'
import { useTranslation } from 'react-i18next'

export const Footer = ({ path }) => {
  const { t, i18n } = useTranslation('footer')
  return <FooterBase t={t} i18n={i18n} path={path} attachOnClick/>
}
