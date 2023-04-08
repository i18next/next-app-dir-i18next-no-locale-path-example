import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}

const cookieName = 'i18next'
const searchParamName = 'lng'

export function middleware(req) {
  if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) return NextResponse.next()

  let lngInSearchParams, lngInCookie, lngInAcceptHeader
  if (req.nextUrl.searchParams.has(searchParamName)) lngInSearchParams = acceptLanguage.get(req.nextUrl.searchParams.get(searchParamName))
  if (req.cookies.has(cookieName)) lngInCookie = acceptLanguage.get(req.cookies.get(cookieName).value)
  lngInAcceptHeader = acceptLanguage.get(req.headers.get('Accept-Language'))
  const lng = lngInSearchParams || lngInCookie || lngInAcceptHeader
  const nextUrlHeader = req.headers.has('next-url') && req.headers.get('next-url')

  const response = NextResponse.next()
  if (nextUrlHeader && nextUrlHeader.indexOf(`"lng":"${lng}"`) > -1) {
    response.cookies.set(cookieName, lng)
  }

  return response
}
