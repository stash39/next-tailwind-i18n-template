/* eslint-disable react/jsx-props-no-spreading */
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Home from '../views/Home';

type LanguageAlternative = {
  href: string;
  hrefLang: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale = '', locales = [] } = context;

  const translations = await serverSideTranslations(locale, ['common', 'home']);

  const languageAlternates: LanguageAlternative[] = locales.map((item) => ({
    href: `${process.env.NEXT_PUBLIC_SITE_URL}/${item}`,
    hrefLang: `${item}`,
  }));

  return {
    props: {
      ...translations,
      languageAlternates,
    },
  };
};

type PageProps = {
  languageAlternates: LanguageAlternative[];
};

const HomePage: NextPage<PageProps> = function HomePage({
  languageAlternates,
  ...props
}) {
  return (
    <>
      <NextSeo
        title="Home Page"
        languageAlternates={languageAlternates}
      />
      <Home {...props} />
    </>
  );
};

export default HomePage;
