/** @type {import('next-sitemap').IConfig} */
const {products} = require('./components/products');
const {allGuides} = require('./components/guides');
// import products from './components/products';
// import allGuides from './components/guides';

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://clickys.in',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
  trailingSlash: false,

  transform: async (config, path) => {
    // Product pages
    if (path.startsWith('/products/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    // Guide pages
    if (path.startsWith('/guides/')) {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    // Default for other routes
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },

  additionalPaths: async (config) => {
    const paths = [];

    // Map product slugs
    products.forEach((prod) => {
      paths.push({
        loc: `/products/${prod.slug}`,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: prod.updatedAt || new Date().toISOString(),
      });
    });

    // Map guide slugs
    allGuides.forEach((guide) => {
      paths.push({
        loc: `/guides/${guide.slug}`,
        changefreq: 'daily',
        priority: 0.8,
        lastmod: guide.updatedAt || new Date().toISOString(),
      });
    });

    return paths;
  },
};
