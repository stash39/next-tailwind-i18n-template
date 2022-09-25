/* eslint-disable react/jsx-props-no-spreading */
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import About from '../views/About';

type LanguageAlternative = {
  href: string;
  hrefLang: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale = '', locales = [] } = context;

  const translations = await serverSideTranslations(locale, ['common', 'about']);

  const languageAlternates: LanguageAlternative[] = locales.map((item) => ({
    href: `${process.env.VERCEL_URL}/${item}/about`,
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

const AboutPage: NextPage<PageProps> = function AboutPage({
  languageAlternates,
  ...props
}) {
  return (
    <>
      <NextSeo
        title="About Page"
        languageAlternates={languageAlternates}
      />
      <About {...props} />
    </>
  );
};

export default AboutPage;
