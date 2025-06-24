import DealsPage from "./DealsPage"
import {products} from '../../components/products'
// Metadata for the Deals page
export const metadata = {
  title: 'Hot Deals & Special Promotions',
  description: 'Find the latest and greatest deals on Amazon products. Updated daily with discounts on electronics, home goods, fashion, and more!',
  openGraph: {
    title: 'Hot Deals & Special Promotions | AffiliateAura',
    description: 'Don\'t miss out on limited-time offers and exclusive discounts curated by AffiliateAura.',
    // images: ['/og-images/deals-page.jpg'], // Create an OG image for this page
  },
};

const dealProducts = products.filter(product => product.isDeal);

const page = () => {
  return (
  <DealsPage products={dealProducts}/>
  )
}

export default page
