/** @type {import('next-sitemap').IConfig} */

// @TODO: add postbuild script to generate a sitemap
// @link: https://github.com/iamvishnusankar/next-sitemap
const NextSitemapConfig = {
  siteUrl: 'https://rupisbeautystudio.com',
  generateRobotsTxt: true,
  exclude: ['/sandbox', '/_splash', '/admin/*', '/api/*'],
};

module.exports = NextSitemapConfig;
