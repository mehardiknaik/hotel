import type { AppProps } from "next/app";
import Footer from "../src/components/Footer/Footer";
import ThemeProviders, { useTheme } from "../src/providers/ThemeProviders";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProviders>
        <Component {...pageProps} />
        <Footer/>
      </ThemeProviders>
    </>
  );
}

export default MyApp;
