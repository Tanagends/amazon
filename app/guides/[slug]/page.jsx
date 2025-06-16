export const dynamic = 'force-dynamic';
// app/guides/[slug]/page.js
// This is a Server Component that handles dynamic routes.

import Image from 'next/image';
import Link from 'next/link';
import AnimatedPageWrapper from '../../../components/AnimatedPageWrapper'; // Adjust path
import CallToAction from '../../../components/CallToAction'; // Adjust path
import ProductCard from '../../../components/ProductCard'; // For related products, adjust path
import styles from '../../../styles/GuideDetailPage.module.css'; // Create this CSS Module
import { FiCalendar, FiUser, FiTag, FiArrowLeft, FiChevronsRight, FiShare2, FiPrinter } from 'react-icons/fi';
import allGuides from '../../../components/guides';

// Placeholder data - In a real app, this would be fetched from Prismic based on the slug
const allGuidesData = allGuides;

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
              fill
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
                    <button className={styles.actionButton} ><FiShare2 /> Share</button>
                    <button className={styles.actionButton}><FiPrinter /> Print</button>
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
