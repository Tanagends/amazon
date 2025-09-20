/** @type {import('next-sitemap').IConfig} */
// import products from './components/products';
// import allGuides from './components/guides';
import { createClient } from "../../prismicio"; // Please ensure this path points to your Prismic client setup



module.exports = {
  siteUrl: process.env.SITE_URL || 'https://clickys.in',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
  trailingSlash: false,

  additionalPaths: async (config) => {
  const client = createClient();
  const paths = [];

  // Fetch all documents of the "guide" custom type from your Prismic repository
  const guidesResponse = await client.getAllByType("guide", {
    // Order the guides by their publication date, newest first
    orderings: {
      field: 'my.guide.date',
      direction: 'desc'
    },
    // Fetch only the specific fields needed for the guides listing page
    // to keep the payload small and fast.
    fetch: [
      'guide.title',
      'guide.image',
      'guide.author',
      'guide.date',
      'guide.guide' // Fetched to generate a short excerpt
    ]
  });

  guidesResponse.forEach(guide => {
    paths.push({
      loc: `/guides/${guide.uid}`, // Construct the URL for each guide
      lastmod: guide.last_publication_date, // Use the last publication date from Prismic
      changefreq: 'monthly', // You can adjust this based on your content update frequency
      priority: 0.8, // Higher priority for individual guide pages
    });
  });
  return paths
}   
};
