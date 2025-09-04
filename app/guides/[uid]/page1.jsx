import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc, asText } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { 
  FiCalendar, 
  FiUser, 
  FiClock,
  FiChevronsRight, 
  FiExternalLink,
  FiTag
} from "react-icons/fi";

import { createClient } from "../../../prismicio";
import styles from "../../../styles/GuideDetailPage.module.css";
import { GuideClientComponents } from "./GuideClientComponents";
import { RichTextComponents } from "../../../components/RichTextComponents";

// Helper function to calculate reading time
const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
};

// Helper component for rendering comparison links
const ComparisonLink = ({ link, text, prisLink }) => (
  <PrismicNextLink field={prisLink} className={styles.comparisonButton}>
    {text || "View Deal"} <FiExternalLink />
  </PrismicNextLink>
);

export default async function Page({ params }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("guide", uid).catch(() => notFound());
  const { data } = page;

  // Format the date
  const publicationDate = data.date
    ? new Date(data.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  // Calculate reading time
  const allText = asText(data.guide) + (data.endguide ? asText(data.endguide) : '');
  const readingTime = calculateReadingTime(allText);

  return (
    <article className={styles.guideDetailPageContainer}>
      {/* Hero Section with Image */}
      {data.image && (
        <div className={styles.heroSection}>
          <div className={styles.heroImageWrapper}>
            <PrismicNextImage
              field={data.image}
              alt={data.image.alt || data.title || ""}
              fill
              sizes="100vw"
              priority
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <div className="container">
              {/* Breadcrumbs */}
              <nav aria-label="breadcrumb" className={styles.breadcrumbs}>
                <PrismicNextLink href="/" className={styles.breadcrumbLink}>
                  Home
                </PrismicNextLink>
                <FiChevronsRight className={styles.breadcrumbSeparator} />
                <PrismicNextLink href="/guides" className={styles.breadcrumbLink}>
                  Guides
                </PrismicNextLink>
                <FiChevronsRight className={styles.breadcrumbSeparator} />
                <span className={styles.breadcrumbCurrent}>{data.title}</span>
              </nav>

              {/* Header Section */}
              <header className={styles.guideHeader}>
                <h1 className={styles.guideTitle}>{data.title}</h1>
                <div className={styles.guideMeta}>
                  {data.author && (
                    <span className={styles.metaItem}>
                      <FiUser className={styles.metaIcon} />
                      By <strong>{data.author}</strong>
                    </span>
                  )}
                  {publicationDate && (
                    <span className={styles.metaItem}>
                      <FiCalendar className={styles.metaIcon} />
                      {publicationDate}
                    </span>
                  )}
                  <span className={styles.metaItem}>
                    <FiClock className={styles.metaIcon} />
                    {readingTime} min read
                  </span>
                </div>
              </header>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <div className={styles.contentWrapper}>
          {/* Sticky Sidebar - Client Component */}
          <GuideClientComponents.Sidebar 
            content={data.guide}
            title={data.title}
          />

          {/* Main Content */}
          <div className={styles.mainContent}>
            {/* Main Guide Content */}
            <div className={styles.articleBody}>
              <PrismicRichText 
                field={data.guide} 
                components={RichTextComponents}
              />
            </div>

            {/* Comparisons Section */}
            {data.comparisons && data.comparisons.length > 0 && (
              <section className={styles.comparisonsSection}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionTitleText}>Our Top Picks Compared</span>
                  <span className={styles.sectionTitleLine}></span>
                </h2>
                <div className={styles.comparisonsGrid}>
                  {data.comparisons.map((item, index) => {
                    const isThreeCard = item.title3 && item.name3;
                    return (
                      <div 
                        key={index} 
                        className={`${styles.comparisonBlock} ${
                          isThreeCard ? styles.threeCard : styles.twoCard
                        }`}
                      >
                        {/* Card 1 */}
                        <div className={styles.comparisonCard}>
                          {item.rank1 && (
                            <div className={styles.rankBadge}>
                              <span className={styles.rankNumber}>{item.rank1}</span>
                              <span className={styles.rankLabel}>Choice</span>
                            </div>
                          )}
                          <div className={styles.cardImageWrapper}>
                            <PrismicNextImage 
                              field={item.image1} 
                              className={styles.cardImage} 
                              alt={item.image1.alt || ""}
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                          </div>
                          <div className={styles.cardContent}>
                            <span className={styles.cardCategory}>{item.title1}</span>
                            <PrismicNextLink 
                              field={item.name1} 
                              className={styles.productNameLink}
                            >
                              <h3 className={styles.productName}>{asText(item.name1)}</h3>
                            </PrismicNextLink>
                            <div className={styles.cardParagraph}>
                              {item.paragraph1 && typeof item.paragraph1 === 'object' ? (
                                <PrismicRichText field={item.paragraph1} components={RichTextComponents} />
                              ) : (
                                <p>{item.paragraph1}</p>
                              )}
                            </div>
                            <div className={styles.cardLinks}>
                              {item.link1?.map((linkItem, linkIndex) => (
                                <ComparisonLink 
                                  key={linkIndex} 
                                  link={linkItem.url} 
                                  text={linkItem.text} 
                                  prisLink={linkItem}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Card 2 */}
                        <div className={styles.comparisonCard}>
                          {item.rank2 && (
                            <div className={styles.rankBadge}>
                              <span className={styles.rankNumber}>{item.rank2}</span>
                              <span className={styles.rankLabel}>Choice</span>
                            </div>
                          )}
                          <div className={styles.cardImageWrapper}>
                            <PrismicNextImage 
                              field={item.image2} 
                              className={styles.cardImage} 
                              alt={item.image2.alt || ""}
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                          </div>
                          <div className={styles.cardContent}>
                            <span className={styles.cardCategory}>{item.title2}</span>
                            <PrismicNextLink 
                              field={item.name2} 
                              className={styles.productNameLink}
                            >
                              <h3 className={styles.productName}>{asText(item.name2)}</h3>
                            </PrismicNextLink>
                            <div className={styles.cardParagraph}>
                              {item.paragraph2 && typeof item.paragraph2 === 'object' ? (
                                <PrismicRichText field={item.paragraph2} components={RichTextComponents} />
                              ) : (
                                <p>{item.paragraph2}</p>
                              )}
                            </div>
                            <div className={styles.cardLinks}>
                              {item.link2?.map((linkItem, linkIndex) => (
                                <ComparisonLink 
                                  key={linkIndex} 
                                  link={linkItem.url} 
                                  text={linkItem.text} 
                                  prisLink={linkItem}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Card 3 (Conditional) */}
                        {isThreeCard && (
                          <div className={styles.comparisonCard}>
                            {item.rank3 && (
                              <div className={styles.rankBadge}>
                                <span className={styles.rankNumber}>{item.rank3}</span>
                                <span className={styles.rankLabel}>Choice</span>
                              </div>
                            )}
                            <div className={styles.cardImageWrapper}>
                              <PrismicNextImage 
                                field={item.image3} 
                                className={styles.cardImage} 
                                alt={item.image3.alt || ""}
                                sizes="(max-width: 768px) 100vw, 33vw"
                              />
                            </div>
                            <div className={styles.cardContent}>
                              <span className={styles.cardCategory}>{item.title3}</span>
                              <PrismicNextLink 
                                field={item.name3} 
                                className={styles.productNameLink}
                              >
                                <h3 className={styles.productName}>{asText(item.name3)}</h3>
                              </PrismicNextLink>
                              <div className={styles.cardParagraph}>
                                {item.paragraph3 && typeof item.paragraph3 === 'object' ? (
                                  <PrismicRichText field={item.paragraph3} components={RichTextComponents} />
                                ) : (
                                  <p>{item.paragraph3}</p>
                                )}
                              </div>
                              <div className={styles.cardLinks}>
                                {item.link3?.map((linkItem, linkIndex) => (
                                  <ComparisonLink 
                                    key={linkIndex} 
                                    link={linkItem.url} 
                                    text={linkItem.text} 
                                    prisLink={linkItem}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* End of Guide Content */}
            {data.endguide && asText(data.endguide) && (
              <div className={styles.articleBody}>
                <PrismicRichText 
                  field={data.endguide} 
                  components={RichTextComponents}
                />
              </div>
            )}

            {/* Final Links Section */}
            {data.links && data.links.length > 0 && (
              <section className={styles.finalLinksSection}>
                <h3 className={styles.sectionTitle}>
                  <span className={styles.sectionTitleText}>Further Reading & Sources</span>
                  <span className={styles.sectionTitleLine}></span>
                </h3>
                <ul className={styles.finalLinksList}>
                  {data.links.map((linkItem, index) => (
                    <li key={index}>
                      <PrismicNextLink 
                        field={linkItem} 
                        className={styles.finalLink}
                      >
                        <span className={styles.finalLinkText}>
                          {linkItem.text || linkItem.url}
                        </span>
                        <FiExternalLink className={styles.finalLinkIcon} />
                      </PrismicNextLink>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Tags Section */}
            {data.tags && data.tags.length > 0 && (
              <div className={styles.tagsSection}>
                <h4 className={styles.tagsTitle}>
                  <FiTag /> Related Topics
                </h4>
                <div className={styles.tagsList}>
                  {data.tags.map(tag => (
                    <PrismicNextLink 
                      key={tag.id || tag} 
                      href={`/tags/${tag.uid || tag}`}
                      className={styles.tagLink}
                    >
                      {tag.data?.name || tag}
                    </PrismicNextLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar (if needed) */}
          <aside className={styles.sidebarRight}>
            {/* Additional widgets can go here */}
          </aside>
        </div>
      </div>
    </article>
  );
}

export async function generateMetadata({ params }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("guide", uid).catch(() => notFound());

  return {
    title: page.data.meta_title || page.data.title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || page.data.title,
      description: page.data.meta_description,
      images: [{ url: asImageSrc(page.data.meta_image || page.data.image) ?? "" }],
      type: 'article',
      article: {
        publishedTime: page.data.date,
        author: page.data.author,
        tags: page.data.tags?.map(tag => tag.data?.name || tag),
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: page.data.meta_title || page.data.title,
      description: page.data.meta_description,
      images: [asImageSrc(page.data.meta_image || page.data.image) ?? ""],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("guide");

  return pages.map((page) => ({ uid: page.uid }));
}
