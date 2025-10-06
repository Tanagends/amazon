
import { createClient } from "../../prismicio"; // Ensure this path points to your Prismic client setup
import { asText } from "@prismicio/client";
import GuidesPageClient from "./GuidesPage"; // This imports the client component from the same folder
/**
 * Server Component: Fetches all guide data from Prismic.
 * This runs on the server, providing the initial data to the client component.
 * It's great for SEO and fast initial loads.
 */

export const metadata = {
  title: 'Clickys – What’s New | Latest Products & Guides',
  description: 'Stay updated with Clickys’ buying guides, latest products, reviews, and new deals from Amazon, Flipkart, Myntra, Meesho, Ajio & Blinkit and other trending services.',
  keywords: 'new products, buying guides, product reviews, Amazon latest, Flipkart arrivals, Myntra trends, Ajio deals, Meesho offers, Blinkit shopping',
};

export const revalidate = 60;
export default async function GuidesPage() {
  
    try {
      const client = createClient();
      
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

      // Map the raw Prismic data to a cleaner, more usable format for our client component
      const guides = guidesResponse.map(doc => {
        // Find the first paragraph in the 'guide' Rich Text field to use as an excerpt
        //const firstParagraph = doc.data.guide.slice(1)?.find(slice => slice.type === 'paragraph');
        const firstParagraph = doc.data.guide?.filter(slice => slice.type === 'paragraph' && slice.text !=='');
        const excerpt = firstParagraph 
          ? asText([firstParagraph[0]]).substring(0, 150) + '...' // Create a 150-char excerpt
          : 'No excerpt available.';

        return {
          id: doc.id,
          slug: doc.uid, // The URL-friendly identifier for the guide
          title: doc.data.title,
          imageField: doc.data.image, // Pass the whole image field to PrismicNextImage
          // Use the first Prismic tag as the category, with a fallback
          category: doc.tags[0] || 'General', 
          author: doc.data.author,
          date: doc.data.date,
          excerpt: excerpt,
        };
      });
    } catch (err) {
        guides = [];
    }
  }


  // Render the Client Component and pass the fetched guides as a prop
  return <GuidesPageClient guides={guides} />;
}
