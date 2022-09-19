/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { appWithTranslation } from 'next-i18next';

import Layout from '../components/layout';

import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Next Project"
        defaultTitle="Next Project Default Title"
        description="Default description"
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(MyApp);
