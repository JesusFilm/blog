import React, { ReactNode, useEffect } from 'react'
import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'
import { I18nProvider } from '@jesus-film/ark.providers.i18n-provider'
import { Navigation, Footer } from '@jesus-film/ark.elements.core'
import { CssBaseline } from '@material-ui/core'

import { AppProps as NextAppProps } from 'next/app'
import { GetMenus } from '../src/lib/__generated__/GetMenus'
import { MenuLocationEnum } from '../__generated__/globalTypes'

export interface AppProps {
  menus?: GetMenus
}

interface MyAppProps extends NextAppProps {
  pageProps: AppProps & { children: ReactNode }
}

function MyApp({ Component, pageProps }: MyAppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const menus = pageProps?.menus?.menus?.nodes?.filter(({ locations }) =>
    locations.filter((location) =>
      [
        MenuLocationEnum.MAIN_MENU_1,
        MenuLocationEnum.MAIN_MENU_2,
        MenuLocationEnum.MAIN_MENU_3
      ].includes(location)
    )
  )

  return (
    <I18nProvider>
      <JesusFilmThemeProvider>
        <CssBaseline />
        <Navigation menus={menus} />
        <Component {...pageProps} />
        <Footer menus={menus} />
      </JesusFilmThemeProvider>
    </I18nProvider>
  )
}

export default MyApp
