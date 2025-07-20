import DealsPage from "./DealsPage"
//import { products } from '../../components/products'
import { products } from '../../components/flipkartProducts'
// Metadata for the Deals page

export const metadata = {
  title: "Flipkart Deals | Best Offers on Clickys.in",
  description: "Shop the best Flipkart deals on smartwatches, cookware, grooming kits, and more. Find affordable combos and daily essentials at Clickys.in!",
  keywords: [
    "Flipkart smartwatches under ₹1500",
    "Flipkart beard grooming kits",
    "Flipkart cookware sale India",
    "water bottle combo under ₹500 Flipkart",
    "Flipkart skin lotion with aloe vera",
    "multivitamin tablets Flipkart health",
    "knife and gum cutter Flipkart set",
    "Flipkart irons for bachelors",
    "fitness supplements on Flipkart sale",
    "Flipkart essentials for men grooming",
    "affordable kitchen deals Flipkart",
    "Flipkart best offers today electronics",
    "home gadgets Flipkart trending"
  ],
  openGraph: {
    title: "Flipkart Deals on Clickys.in | Affordable Gadgets & More",
    description: "Explore Flipkart’s best offers on smartwatches, grooming essentials, and kitchen tools at Clickys.in. Shop now for great savings!",
    url: "https://www.clickys.in/deals",
    siteName: "Clickys.in",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Flipkart Deals | Clickys.in Offers",
    description: "Get Flipkart’s top deals on smartwatches, cookware, and grooming products at Clickys.in. Shop affordable combos today!"
  }
};
//const dealProducts = products.filter(product => product.isDeal);
//const dealProducts = products;

const page = () => {
  return (
  <DealsPage products={ products }/>
  )
}

export default page;
