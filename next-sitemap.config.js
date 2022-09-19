const { i18n: { locales } } = require('./next-i18next.config.js');

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const removeLocale = (locales, path) => {
  const pathArr = path.split('/');

  pathArr.shift();

  if (locales.includes(pathArr[0])) {
    pathArr.shift();
  }

  return pathArr.join('/');
};

module.exports = {
  generateRobots: true,
  siteUrl,
  changefreq: 'weekly',
  priority: 0.7,
  alternateRefs: locales.map((locale) => ({
    href: `${siteUrl}/${locale}`,
    hreflang: locale,
    hrefIsAbsolute: true,
  })),
  transform: async (config, path) => {
    const noLocalePath = removeLocale(locales, path);

    const alternateRefs = locales.map((locale) => ({
      href: `${siteUrl}/${locale}/${noLocalePath}`,
      hreflang: locale,
      hrefIsAbsolute: true,
    }));

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs,
    }
  }
}
