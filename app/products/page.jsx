import ProductsPage from './ProductsPage';
import {products} from '../../components/products'

export const metadata = {
  title: 'All Products - Discover Our Full Collection',
  description: 'Browse the complete collection of products featured on AffiliateAura. Find electronics, home goods, gadgets, and more.',
  openGraph: {
    title: 'All Products | AffiliateAura',
    description: 'Explore our extensive catalog of curated Amazon products.',
    // images: ['/og-images/all-products-page.jpg'], // Create an OG image for this page
  },
};


const page = () => {
  return (
    <div>
      <ProductsPage products={products} />
    </div>
  )
}

export default page
