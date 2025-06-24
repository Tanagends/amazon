import {allGuides} from "../../components/guides"
import GuidesPage from "./GuidesPage"

export const metadata = {
  title: 'Expert Buying Guides & Reviews',
  description: 'Explore in-depth buying guides, product reviews, and tips from AffiliateAura to make informed purchasing decisions.',
  openGraph: {
    title: 'Expert Buying Guides & Reviews | AffiliateAura',
    description: 'Your go-to resource for comprehensive guides on a wide range of Amazon products.',
    // images: ['/og-images/guides-page.jpg'], // Create an OG image for this page
  },
};

const page = () => {
  return (
    <GuidesPage guides={allGuides} />
  )
}

export default page
