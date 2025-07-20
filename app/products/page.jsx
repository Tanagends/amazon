import ProductsPage from './ProductsPage';
import {products} from '../../components/products'

export const metadata = {
  title: "Amazon Products | Best Deals on Clickys.in",
  description: "Explore top Amazon deals on smartwatches, trimmers, kitchen tools, and wellness products. Shop curated combos at Clickys.in for the best prices in India!",
  keywords: [
    "boat smartwatch with heart rate monitor",
    "Amazon trimmer cordless rechargeable",
    "camera for kids and hobby photography",
    "cooking set Amazon India top seller",
    "BPA-free water bottles Amazon India",
    "herbal body lotions Amazon brand",
    "energy booster supplements Amazon India",
    "Amazon kitchen tools combo offer",
    "travel-size dry iron Amazon portable",
    "grooming electronics on Amazon deals",
    "Amazon daily use kitchen items",
    "smart wearable offers Amazon",
    "body care essentials Amazon only"
  ],
  openGraph: {
    title: "Amazon Deals on Clickys.in | Smartwatches, Kitchen & More",
    description: "Find the best Amazon products like smartwatches, trimmers, and kitchen essentials at Clickys.in. Shop now for exclusive deals!",
    url: "https://www.clickys.in/products",
    siteName: "Clickys.in",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Products | Clickys.in Deals",
    description: "Discover Amazon’s top smartwatches, grooming kits, and kitchen tools at Clickys.in. Shop now for exclusive offers!"
  }
};

const page = () => {
  return (
    <div>
      <ProductsPage products={products} />
    </div>
  )
}

export default page
