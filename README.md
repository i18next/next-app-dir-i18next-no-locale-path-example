# Next.js 13/14 app directory feature in combination with i18next and no locale in url

This example shows a basic way to use [i18next](https://www.i18next.com) (and [react-i18next](https://react.i18next.com)) directly in a [Next.js](https://nextjs.org/) app with the app directory features and no locale in the url.

*Update: since v16, [next-i18next](https://github.com/i18next/next-i18next) supports the App Router, including this no-locale-path setup. See the [maintained alternative](#maintained-alternative) below.*

It shows i18next integration on some server side pages and some client side pages.

There is also an example middleware with language detection and persistence via cookie.

*This example has been created out of [this discussion](https://github.com/i18next/next-app-dir-i18next-example/issues/12).*

The example was originally based on this [example](https://github.com/i18next/next-app-dir-i18next-example) with this [blog post](https://www.locize.com/blog/next-app-dir-i18n?utm_source=next_app_dir_i18next_no_locale_path_example_readme&utm_medium=github&utm_campaign=readme) describing this with more detail information.

[![](https://www.locize.com/blog/next-app-dir-i18n/next-app-dir-i18n.jpg)](https://www.locize.com/blog/next-app-dir-i18n?utm_source=next_app_dir_i18next_no_locale_path_example_readme&utm_medium=github&utm_campaign=readme)

## Maintained alternative

This repository is kept for reference and is pinned to Next.js 14. Since v16, [next-i18next](https://github.com/i18next/next-i18next) supports the App Router no-locale-path (cookie-based) setup out of the box. For a maintained version of this pattern, see the [`app-router-no-locale-path` example](https://github.com/i18next/next-i18next/tree/master/examples/app-router-no-locale-path) and the [No-Locale-Path Mode documentation](https://github.com/i18next/next-i18next#no-locale-path-mode). Background: [next-i18next v16 announcement](https://www.locize.com/blog/next-i18next-v16?utm_source=next_app_dir_i18next_no_locale_path_example_readme&utm_medium=github&utm_campaign=readme).
