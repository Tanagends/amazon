import {allGuides} from "../../components/guides"
import GuidesPage from "./GuidesPage"

export const metadata = {
  title: "Shopping Guides | Clickys.in Tips & Tricks",
  description: "Explore Clickys.in’s shopping guides for tips on choosing the best smartwatches, kitchen tools, grooming kits, and more from Amazon and Flipkart.",
  keywords: [
    "online shopping guides India",
    "Amazon product buying guide",
    "Flipkart deals tips",
    "smartwatch buying guide 2025",
    "kitchen tools selection guide",
    "grooming products guide India",
    "Clickys.in shopping tips",
    "how to shop smart online",
    "best deals guide Amazon Flipkart"
  ],
  openGraph: {
    title: "Clickys.in Shopping Guides | Smart Buying Tips",
    description: "Learn how to pick the best Amazon and Flipkart products with Clickys.in’s expert shopping guides for tech, home, and grooming.",
    url: "https://www.clickys.in/guides",
    siteName: "Clickys.in",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Clickys.in Shopping Guides",
    description: "Get expert tips on buying smartwatches, kitchen tools, and more with Clickys.in’s Amazon and Flipkart guides!"
  }
};
const page = () => {
  return (
    <GuidesPage guides={allGuides} />
  )
}

export default page
