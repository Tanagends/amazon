// app/guides/[slug]/page.js
// This is a Server Component that handles dynamic routes.

import Image from 'next/image';
import Link from 'next/link';
import AnimatedPageWrapper from '../../../components/AnimatedPageWrapper'; // Adjust path
import CallToAction from '../../../components/CallToAction'; // Adjust path
import ProductCard from '../../../components/ProductCard'; // For related products, adjust path
import styles from '../../../styles/GuideDetailPage.module.css'; // Create this CSS Module
import { FiCalendar, FiUser, FiTag, FiArrowLeft, FiChevronsRight, FiShare2, FiPrinter } from 'react-icons/fi';

// Placeholder data - In a real app, this would be fetched from Prismic based on the slug
const allGuidesData = [
  { id: 'guide001', slug: 'best-noise-cancelling-headphones-2025', title: "Ultimate Guide: Best Noise-Cancelling Headphones 2025", content: "<p>In a world buzzing with noise, finding your sanctuary of sound is more important than ever. Noise-cancelling headphones have become an essential tool for commuters, office workers, travelers, and anyone seeking focus or relaxation. This guide dives deep into the top noise-cancelling headphones of 2025, comparing their audio quality, noise cancellation effectiveness, comfort, battery life, and extra features.</p><h2>Understanding Noise Cancellation Technology</h2><p>Before we jump into the reviews, let's briefly understand how this magic works. Active Noise Cancellation (ANC) uses microphones to detect ambient sounds and then generates opposing sound waves to neutralize them. This is different from passive noise isolation, which simply blocks sound physically (like earmuffs).</p><h3>Key Factors to Consider:</h3><ul><li><strong>ANC Effectiveness:</strong> How well do they block out low-frequency rumbles (like engines) versus high-frequency chatter?</li><li><strong>Audio Quality:</strong> Does the ANC affect the sound signature? Look for balanced, clear, and rich audio.</li><li><strong>Comfort & Design:</strong> Over-ear, on-ear, or in-ear? Material quality and long-wear comfort are crucial.</li><li><strong>Battery Life:</strong> Essential for long flights or workdays. Check ANC-on battery duration.</li><li><strong>Connectivity & Features:</strong> Bluetooth version, multi-point pairing, companion apps, touch controls, transparency mode.</li></ul><h2>Top Picks for 2025</h2><h3>1. AuraSound Serenity Pro X</h3><p>The Serenity Pro X continues to dominate the market with its unparalleled noise cancellation and sublime audio fidelity. They boast an impressive 30-hour battery life with ANC on and feature a redesigned, more comfortable earcup. The new transparency mode is also remarkably natural-sounding.</p><p><em>Pros: Industry-leading ANC, superb sound, premium comfort.</em><br/><em>Cons: Premium price tag.</em></p><h3>2. NovaQuiet Voyager Elite</h3><p>A strong contender, the Voyager Elite offers excellent ANC performance, particularly for travel. They are lightweight, foldable, and come with a robust carrying case. Their sound profile is slightly warmer, which many find pleasing for music.</p><p><em>Pros: Great for travel, good value, comfortable.</em><br/><em>Cons: ANC not quite as powerful as the top tier.</em></p><h2>Conclusion</h2><p>Choosing the right noise-cancelling headphones depends on your specific needs and budget. The AuraSound Serenity Pro X is the undisputed king for those who want the absolute best, while the NovaQuiet Voyager Elite offers a fantastic balance of features and price. Consider what's most important to you – be it noise obliteration, audio purity, or travel-friendliness – and this guide will help you make the perfect choice.</p>", imageUrl: "https://placehold.co/1200x600/3498DB/FFFFFF?text=Headphone+Guide+Banner&font=Inter", category: "Audio Reviews", date: "May 20, 2025", author: "Alex Chen", tags: ["headphones", "audio", "noise-cancelling", "tech review", "2025"], relatedProductSlugs: ['noise-cancelling-headphones-pro'] },
  { id: 'guide002', slug: 'choosing-robot-vacuum-for-pet-owners', title: "Pet Owner's Guide to Choosing the Perfect Robot Vacuum", content: "<p>Detailed content about choosing robot vacuums for pet owners...</p>", imageUrl: "https://placehold.co/1200x600/9B59B6/FFFFFF?text=Pet+Vacuum+Guide+Banner&font=Inter", category: "Home Appliances", date: "May 15, 2025", author: "Sarah Miller", tags: ["robot vacuum", "pets", "home cleaning", "smart home"], relatedProductSlugs: ['robot-vacuum-cleaner-s5'] },
  // Add other guides here to allow for dynamic fetching
];

// Placeholder for related products data
const allProductsData = [
  { id: 'prod002', slug: 'noise-cancelling-headphones-pro', name: 'AuraSound Headphones Pro', category: 'Audio', price: '249.00', imageUrl: 'https://placehold.co/600x400/3498DB/FFFFFF?text=Headphones+Pro&font=Inter', amazonLink: '#', rating: 4.9, reviewCount: 720 },
  { id: 'prod003', slug: 'robot-vacuum-cleaner-s5', name: 'CleanBot Vacuum S5', category: 'Home Appliances', price: '399.50', oldPrice: '499.00', imageUrl: 'https://placehold.co/600x400/9B59B6/FFFFFF?text=Robot+Vacuum&font=Inter', amazonLink: '#', rating: 4.7, reviewCount: 510, onPromotion: true },
];


// Function to fetch guide data (simulated)
async function getGuideData(slug) {
  // In a real app, fetch from Prismic:
  // const client = createClient(); // Your Prismic client
  // const guide = await client.getByUID('guide', slug, { fetchLinks: ['product.title', 'product.image'] });
  // return guide?.data;
  return allGuidesData.find(guide => guide.slug === slug);
}

async function getRelatedProducts(slugs) {
    if (!slugs || slugs.length === 0) return [];
    return allProductsData.filter(product => slugs.includes(product.slug));
}

// Dynamic metadata generation for each guide page
export async function generateMetadata({ params }) {
  const guide = await getGuideData(params.slug);
  if (!guide) {
    return { title: 'Guide Not Found' };
  }
  return {
    title: guide.title,
    description: guide.excerpt || guide.content.substring(0, 160).replace(/<[^>]+>/g, '') + '...', // Basic excerpt
    openGraph: {
      title: guide.title,
      description: guide.excerpt || guide.content.substring(0, 160).replace(/<[^>]+>/g, '') + '...',
      images: [guide.imageUrl || '/og-images/default-guide.jpg'], // Default OG image if guide has no image
    },
  };
}

// Optional: generateStaticParams to pre-render dynamic routes at build time
export async function generateStaticParams() {
    // In a real app, fetch all guide slugs from Prismic
    // const client = createClient();
    // const guides = await client.getAllByType('guide', { fields: ['uid'] });
    // return guides.map((guide) => ({ slug: guide.uid }));
    return allGuidesData.map((guide) => ({
        slug: guide.slug,
    }));
}


export default async function GuideDetailPage({ params }) {
  const { slug } = params;
  const guide = await getGuideData(slug);
  const relatedProducts = guide ? await getRelatedProducts(guide.relatedProductSlugs) : [];

  if (!guide) {
    // Handle case where guide is not found (e.g., return a 404 page or a "not found" component)
    // For now, just a simple message. In a real app, use `notFound()` from `next/navigation`.
    return (
        <AnimatedPageWrapper>
            <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                <h1>Guide Not Found</h1>
                <p>Sorry, we couldn't find the guide you were looking for.</p>
                <Link href="/guides" className="btn btn-primary" style={{marginTop: '1rem'}}>Back to All Guides</Link>
            </div>
        </AnimatedPageWrapper>
    );
  }

  // For rendering HTML content from a CMS (like Prismic Rich Text)
  // Ensure the content is sanitized if it's user-generated or from untrusted sources.
  // Prismic's `@prismicio/react` <PrismicRichText> component handles this well.
  // For this placeholder, we'll use dangerouslySetInnerHTML (use with caution).

  return (
    <AnimatedPageWrapper>
      <article className={styles.guideDetailPageContainer}>
        {/* Hero/Banner Image for the Guide */}
        {guide.imageUrl && (
          <div className={styles.guideHeroImageWrapper} data-aos="fade-in">
            <Image
              src={guide.imageUrl}
              alt={guide.title}
              width={1200} // Set appropriate dimensions or use layout="fill" with a sized parent
              height={500}
              style={{ objectFit: 'cover' }}
              priority // Consider for LCP
            />
            <div className={styles.heroOverlay}></div>
            <div className={`container ${styles.heroContent}`}>
                {guide.category && <Link href={`/categories/${guide.category.toLowerCase().replace(/\s+/g, '-')}`} className={styles.heroCategoryTag}>{guide.category}</Link>}
                <h1 className={styles.guideTitleHero}>{guide.title}</h1>
                <div className={styles.guideMetaHero}>
                    {guide.author && <span><FiUser className={styles.metaIcon}/> By {guide.author}</span>}
                    {guide.date && <span><FiCalendar className={styles.metaIcon}/> Published: {guide.date}</span>}
                </div>
            </div>
          </div>
        )}

        <div className={`container ${styles.guideContentWrapper}`}>
            <div className={styles.mainContentColumn}>
                {/* Breadcrumbs */}
                <nav aria-label="breadcrumb" className={styles.breadcrumbs} data-aos="fade-right">
                    <Link href="/">Home</Link> <FiChevronsRight size={12} />
                    <Link href="/guides">Guides</Link> <FiChevronsRight size={12} />
                    <span>{guide.title.length > 50 ? guide.title.substring(0,47) + "..." : guide.title}</span>
                </nav>

                {/* Article Content */}
                {/* If using Prismic Rich Text, replace this with <PrismicRichText field={guide.content_field} /> */}
                <div
                    className={styles.articleBody}
                    dangerouslySetInnerHTML={{ __html: guide.content }}
                    data-aos="fade-up"
                    data-aos-delay="100"
                />

                {/* Tags */}
                {guide.tags && guide.tags.length > 0 && (
                    <div className={styles.tagsSection} data-aos="fade-up">
                        <h4 className={styles.tagsTitle}><FiTag /> Tags:</h4>
                        <div className={styles.tagsList}>
                        {guide.tags.map(tag => (
                            <Link key={tag} href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`} className={styles.tagLink}>
                            {tag}
                            </Link>
                        ))}
                        </div>
                    </div>
                )}

                {/* Author Bio (Placeholder) */}
                <div className={styles.authorBioSection} data-aos="fade-up">
                    <Image src={`https://placehold.co/100x100/CCCCCC/1A1A1A?text=${guide.author ? guide.author.substring(0,1) : 'A'}&font=Inter`} alt={guide.author || "Author"} width={80} height={80} className={styles.authorImage} />
                    <div>
                        <h4 className={styles.authorName}>{guide.author || "AffiliateAura Team"}</h4>
                        <p className={styles.authorDescription}>
                            {guide.author ? `${guide.author} is a tech enthusiast and expert reviewer at AffiliateAura, dedicated to helping you find the best products.` : "The AffiliateAura team is committed to bringing you honest and insightful product guides."}
                        </p>
                        {/* <Link href={`/authors/${guide.author?.toLowerCase().replace(/\s+/g, '-')}`}>More by {guide.author}</Link> */}
                    </div>
                </div>

                {/* Share and Print Buttons */}
                <div className={styles.articleActions} data-aos="fade-up">
                    <button className={styles.actionButton} onClick={() => alert('Sharing functionality to be implemented!')}><FiShare2 /> Share</button>
                    <button className={styles.actionButton} onClick={() => typeof window !== 'undefined' && window.print()}><FiPrinter /> Print</button>
                </div>

            </div>

            {/* Sidebar (Related Products/Guides, TOC) - Optional */}
            <aside className={styles.sidebarColumn} data-aos="fade-left" data-aos-delay="200">
                {/* Table of Contents (Placeholder - would need JS to generate) */}
                <div className={styles.sidebarWidget}>
                    <h4 className={styles.sidebarTitle}>In This Guide</h4>
                    <ul className={styles.tocList}>
                        <li><a href="#understanding">Understanding Technology</a></li>
                        <li><a href="#key-factors">Key Factors</a></li>
                        <li><a href="#top-picks">Top Picks for 2025</a></li>
                        <li><a href="#conclusion">Conclusion</a></li>
                    </ul>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className={styles.sidebarWidget}>
                        <h4 className={styles.sidebarTitle}>Mentioned Products</h4>
                        <div className={styles.relatedProductsGrid}>
                            {relatedProducts.map(product => (
                                <ProductCard key={product.id} product={product} isCompact={true} /> // Add isCompact to ProductCard if needed
                            ))}
                        </div>
                    </div>
                )}

                {/* Call to Action Widget */}
                <div className={styles.sidebarWidget}>
                    <h4 className={styles.sidebarTitle}>Don't Miss Out!</h4>
                    <p>Get the latest deals and guides straight to your inbox.</p>
                    <CallToAction text="Subscribe Now" link="/newsletter" type="primary" className={styles.sidebarCta} />
                </div>
            </aside>
        </div>

        {/* Back to All Guides Link */}
        <div className="container" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <CallToAction text="Back to All Guides" link="/guides" type="outline-dark" icon={<FiArrowLeft />} iconPosition="left" />
        </div>

      </article>
    </AnimatedPageWrapper>
  );
}
