export const dynamic = 'force-dynamic';
// app/products/[slug]/page.js
// This is a Server Component that handles dynamic product routes.

import Image from 'next/image';
import Link from 'next/link';
import AnimatedPageWrapper from '../../../components/AnimatedPageWrapper'; // Adjust path
import CallToAction from '../../../components/CallToAction'; // Adjust path
import ProductCard from '../../../components/ProductCard'; // For related products, adjust path
import styles from '../../../styles/ProductDetailPage.module.css'; // Create this CSS Module
import { FiShoppingCart, FiTag, FiStar, FiCheckSquare, FiInfo, FiArrowLeft, FiChevronsRight, FiShare2 } from 'react-icons/fi';

// Placeholder data - In a real app, this would be fetched from Prismic based on the slug
const allProductsData = [
  {
    id: 'prod001', slug: 'smart-thermostat-x1', name: 'SmartHome Thermostat X1 - Energy Saver',
    category: 'Smart Home', price: '129.99', oldPrice: '159.99',
    imageUrl: 'https://placehold.co/800x600/2ECC71/FFFFFF?text=Smart+Thermostat+X1&font=Inter',
    galleryImages: [ // Example gallery
        'https://placehold.co/800x600/2ECC71/FFFFFF?text=Thermo+View+1&font=Inter',
        'https://placehold.co/800x600/27ae60/FFFFFF?text=Thermo+View+2&font=Inter',
        'https://placehold.co/800x600/2ecc71/E0E0E0?text=Thermo+In+Use&font=Inter',
    ],
    amazonLink: '#', rating: 4.8, reviewCount: 350, onPromotion: true,
    shortDescription: "Intelligently control your home's temperature, save energy, and enhance comfort with the SmartHome Thermostat X1. Easy to install and use with voice assistants.",
    longDescription: "<p>The SmartHome Thermostat X1 is more than just a thermostat; it's the central hub for your home's climate control. With its sleek design and intuitive interface, managing your heating and cooling has never been easier. It learns your preferences over time and creates an optimized schedule to reduce energy consumption without sacrificing comfort.</p><h3>Key Features:</h3><ul><li><strong>Smart Learning:</strong> Adapts to your schedule and preferences automatically.</li><li><strong>Energy Savings:</strong> Helps reduce your heating and cooling bills by up to 15%.</li><li><strong>Remote Control:</strong> Adjust temperature from anywhere using the mobile app.</li><li><strong>Voice Assistant Compatible:</strong> Works seamlessly with Alexa, Google Assistant, and Apple HomeKit.</li><li><strong>Easy Installation:</strong> DIY setup in under 30 minutes for most homes.</li><li><strong>Monthly Energy Reports:</strong> Track your usage and see your savings.</li></ul><h3>Specifications:</h3><ul><li>Display: Full-color LCD Touchscreen</li><li>Connectivity: Wi-Fi 802.11 b/g/n @ 2.4GHz</li><li>Compatibility: Works with most HVAC systems (check compatibility online)</li><li>Dimensions: 4.5in x 4.5in x 1.1in</li><li>Warranty: 2-year limited warranty</li></ul>",
    features: ["Smart Learning Algorithms", "Remote App Control", "Voice Assistant Integration", "Energy Usage Reports", "DIY Installation"],
    specs: { "Display": "LCD Touchscreen", "Connectivity": "Wi-Fi", "Warranty": "2 Years" },
    relatedProductSlugs: ['robot-vacuum-cleaner-s5', 'air-purifier-hepa'],
  },
  {
    id: 'prod002', slug: 'noise-cancelling-headphones-pro', name: 'AuraSound Headphones Pro - Immersive Audio',
    category: 'Audio', price: '249.00',
    imageUrl: 'https://placehold.co/800x600/3498DB/FFFFFF?text=AuraSound+Headphones&font=Inter',
    galleryImages: [
        'https://placehold.co/800x600/3498DB/FFFFFF?text=Headphones+Angle+1&font=Inter',
        'https://placehold.co/800x600/2980B9/FFFFFF?text=Headphones+Earcup&font=Inter',
    ],
    amazonLink: '#', rating: 4.9, reviewCount: 720,
    shortDescription: "Experience crystal-clear audio and industry-leading noise cancellation with the AuraSound Headphones Pro. Perfect for travel, work, and immersive listening.",
    longDescription: "<p>Dive into a world of pure sound with AuraSound Headphones Pro...</p><h3>Key Features:</h3><ul><li>Advanced Active Noise Cancellation</li><li>High-Fidelity Audio Drivers</li><li>30+ Hour Battery Life</li><li>Plush Comfort Earcups</li><li>Multi-device Bluetooth Pairing</li></ul>",
    features: ["Active Noise Cancellation", "Hi-Fi Audio", "Long Battery Life", "Comfort Design", "Bluetooth 5.2"],
    specs: { "Driver Size": "40mm", "Battery": "30 hours (ANC on)", "Weight": "250g" },
    relatedProductSlugs: ['smart-thermostat-x1', 'action-camera-4k'],
  },
  // Add more product details here
];

// Function to fetch product data (simulated)
async function getProductData(slug) {
  return allProductsData.find(product => product.slug === slug);
}

async function getRelatedProducts(slugs) {
    if (!slugs || slugs.length === 0) return [];
    // In a real app, you'd fetch these products. Here, we filter from allProductsData.
    return allProductsData.filter(product => slugs.includes(product.slug) && product.slug !== params.slug).slice(0, 3); // Avoid self-relation, limit to 3
}


// Dynamic metadata generation for each product page
export async function generateMetadata({ params }) {
  const product = await getProductData(params.slug);
  if (!product) {
    return { title: 'Product Not Found' };
  }
  return {
    title: `${product.name} | AffiliateAura`,
    description: product.shortDescription || `Check out the ${product.name} - ${product.category}. Read reviews and find the best price.`,
    openGraph: {
      title: `${product.name} | AffiliateAura`,
      description: product.shortDescription || `Discover the ${product.name} on AffiliateAura.`,
      images: [product.imageUrl || '/og-images/default-product.jpg'],
      type: 'product', // Indicate OG type as product
      // Add more product-specific OG tags if needed (price, availability, etc.)
    },
  };
}

// Optional: generateStaticParams to pre-render dynamic routes at build time
export async function generateStaticParams() {
    return allProductsData.map((product) => ({
        slug: product.slug,
    }));
}


export default async function ProductDetailPage({ params }) {
  const { slug } = params;
  const product = await getProductData(slug);
  const relatedProducts = product ? await getRelatedProducts(product.relatedProductSlugs, slug) : [];


  if (!product) {
    return (
        <AnimatedPageWrapper>
            <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                <h1>Product Not Found</h1>
                <p>Sorry, we couldn't find the product you were looking for.</p>
                <Link href="/products" className="btn btn-primary" style={{marginTop: '1rem'}}>Back to All Products</Link>
            </div>
        </AnimatedPageWrapper>
    );
  }

  // For a real image gallery, you'd use a client component with state for the selected image.
  // Here, we'll just display the main image and list thumbnails.
  const MainImage = ({ src, alt }) => (
    <div className={styles.mainImageContainer} data-aos="fade-right">
      <Image src={src} alt={alt} width={700} height={525} style={{ objectFit: 'contain', borderRadius: 'var(--rounded-lg)' }} priority />
      {product.onPromotion && <span className={styles.dealBadge}>SPECIAL DEAL!</span>}
    </div>
  );

  const ThumbnailImages = ({ images, current }) => (
    <div className={styles.thumbnailContainer} data-aos="fade-right" data-aos-delay="100">
      {images && images.map((imgSrc, index) => (
        <div key={index} className={`${styles.thumbnail} ${imgSrc === current ? styles.activeThumbnail : ''}`}>
          <Image src={imgSrc} alt={`${product.name} thumbnail ${index + 1}`} width={100} height={75} style={{ objectFit: 'cover', borderRadius: 'var(--rounded-md)' }} />
        </div>
      ))}
    </div>
  );

  return (
    <AnimatedPageWrapper>
      <div className={styles.productDetailPageContainer}>
        <div className={`container ${styles.productDetailLayout}`}>
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className={styles.breadcrumbs} data-aos="fade-in">
              <Link href="/">Home</Link> <FiChevronsRight size={12} />
              <Link href="/products">Products</Link> <FiChevronsRight size={12} />
              {product.category && (<><Link href={`/categories/${product.category.toLowerCase().replace(/\s+/g, '-')}`}>{product.category}</Link><FiChevronsRight size={12} /></>)}
              <span>{product.name.length > 40 ? product.name.substring(0,37) + "..." : product.name}</span>
          </nav>

          {/* Product Gallery & Main Info Column */}
          <div className={styles.galleryAndInfo}>
            <div className={styles.imageGallery}>
              <MainImage src={product.imageUrl} alt={product.name} />
              {product.galleryImages && product.galleryImages.length > 0 && (
                <ThumbnailImages images={product.galleryImages} current={product.imageUrl} />
              )}
            </div>

            <div className={styles.productInfo} data-aos="fade-left" data-aos-delay="150">
              <h1 className={styles.productTitle}>{product.name}</h1>
              <div className={styles.metaInfo}>
                <span className={styles.categoryLinkWrapper}>
                  Category: <Link href={`/categories/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className={styles.categoryLink}>{product.category}</Link>
                </span>
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className={i < Math.round(product.rating) ? styles.starFilled : styles.starEmpty} />
                  ))}
                  <span>{product.rating.toFixed(1)} ({product.reviewCount} reviews)</span>
                </div>
              </div>

              <p className={styles.shortDescription}>{product.shortDescription}</p>

              <div className={styles.priceSection}>
                <span className={styles.currentPrice}>${product.price}</span>
                {product.oldPrice && <span className={styles.oldPrice}>${product.oldPrice}</span>}
                {product.onPromotion && <span className={styles.savingsBadge}>Save {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%</span>}
              </div>

              <CallToAction
                text="View on Amazon"
                link={product.amazonLink}
                type="primary" // Green button
                className={styles.amazonButton}
                icon={<FiShoppingCart />}
                target="_blank"
                rel="noopener noreferrer sponsored"
              />
              <p className={styles.affiliateNote}>Prices and availability are subject to change. As an Amazon Associate, we earn from qualifying purchases.</p>

              <div className={styles.shareProduct}>
                <button className={styles.actionButtonSmall} onClick={() => alert('Sharing functionality to be implemented!')}><FiShare2 /> Share this product</button>
              </div>
            </div>
          </div>

          {/* Product Details Tabs/Sections (Description, Features, Specs) */}
          <div className={styles.productDetailsTabs} data-aos="fade-up">
            {/* Basic Tab Structure (for a real tab system, use a Client Component) */}
            <div className={styles.tabNav}>
                <button className={`${styles.tabButton} ${styles.activeTab}`}>Description</button>
                {product.features && <button className={styles.tabButton}>Features</button>}
                {product.specs && <button className={styles.tabButton}>Specifications</button>}
                <button className={styles.tabButton}>Reviews ({product.reviewCount})</button>
            </div>

            <div className={styles.tabContent}>
                {/* Description */}
                <div className={styles.tabPanel} dangerouslySetInnerHTML={{ __html: product.longDescription }} />

                {/* Features (Example - would be shown on tab click) */}
                {/* <div className={styles.tabPanel} style={{display: 'none'}}>
                    <ul className={styles.featuresList}>
                        {product.features && product.features.map((feature, index) => (
                            <li key={index}><FiCheckSquare className={styles.featureIcon} /> {feature}</li>
                        ))}
                    </ul>
                </div> */}
            </div>
          </div>


          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <section className={styles.relatedProductsSection} data-aos="fade-up">
              <h2 className={styles.sectionTitle}>You Might Also Like</h2>
              <div className={styles.relatedGrid}>
                {relatedProducts.map(relatedProd => (
                  <ProductCard key={relatedProd.id} product={relatedProd} />
                ))}
              </div>
            </section>
          )}

          <div className="container" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <CallToAction text="Back to All Products" link="/products" type="outline-dark" icon={<FiArrowLeft />} iconPosition="left" />
          </div>

        </div>
      </div>
    </AnimatedPageWrapper>
  );
}
