import { JesusFilmThemeProvider } from "@jesus-film/ark.providers.jesus-film-theme-provider";
import { I18nProvider } from "@jesus-film/ark.providers.i18n-provider";
import { Navigation } from "@jesus-film/ark.elements.navigation";
import { Footer } from "@jesus-film/ark.elements.footer";
import { CssBaseline } from "@material-ui/core";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <I18nProvider>
      <JesusFilmThemeProvider>
        <CssBaseline />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </JesusFilmThemeProvider>
    </I18nProvider>
  );
}

export default MyApp;
