const nextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },{
        protocol:'https',
        hostname:'unsplash.com'
      },{
        protocol: 'https',
        hostname: 'rukminim2.flixcart.com',
      },{
        protocol: 'https',
        hostname: 'asset22.ckassets.com' 
      },
      //https://somethingsbrewing.in
      {
        protocol: 'https',
        hostname: 'somethingsbrewing.in',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'www.amazon.in',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'www.amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'images-eu.ssl-images-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
      },
            {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },            {
        protocol: 'https',
        hostname: 'www.pexels.com',
      },
    ],
  },
};

module.exports = nextConfig;
