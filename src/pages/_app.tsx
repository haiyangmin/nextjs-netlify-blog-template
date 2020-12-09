import "normalize.css";
import { AppProps } from "next/app";
import Router from 'next/router';
import React, {useEffect } from 'react';
import { GTMPageView } from '../utils/gtm';
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  return <Component {...pageProps} />;
}
