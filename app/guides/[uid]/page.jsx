import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc, asText } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { FiCalendar, FiUser, FiTag, FiChevronsRight, FiExternalLink } from "react-icons/fi";

import { createClient } from "../../../prismicio";
import styles from "../../../styles/GuideDetailPage.module.css";
//type Params = { uid: string };

// Helper component for rendering comparison links
const ComparisonLink = ({ link, text, prisLink }) => (
  <PrismicNextLink field={prisLink} className={styles.comparisonButton}>
    {text || "View Deal"} <FiExternalLink />
  </PrismicNextLink>
);

//type Params = { uid: string };

export default async function Page({ params }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("guide", uid).catch(() => notFound());
  const { data } = page;
  console.log("Here it is: ");
  console.log(page.data.comparisons[0].name1);
 

  // Format the date
  const publicationDate = data.date
    ? new Date(data.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <article className={styles.guideDetailPageContainer}>
      {/* Main Guide Image */}
      {data.image && (
        <div className={styles.guideHeaderImageWrapper}>
          <PrismicNextImage
            field={data.image}
            alt={data.image.alt || data.title || ""}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      )}

      <div className="container">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className={styles.breadcrumbs}>
            <a href="/">Home</a> <FiChevronsRight size={12} />
            <a href="/guides">Guides</a> <FiChevronsRight size={12} />
            <span>{data.title}</span>
        </nav>

        {/* Header Section: Title, Author, Date */}
        <header className={styles.guideHeader}>
          <h1 className={styles.guideTitle}>{data.title}</h1>
          <div className={styles.guideMeta}>
            {data.author && <span><FiUser className={styles.metaIcon} /> By {data.author}</span>}
            {publicationDate && <span><FiCalendar className={styles.metaIcon} /> {publicationDate}</span>}
          </div>
        </header>

        {/* Main Guide Content */}
        <div className={styles.articleBody}>
          <PrismicRichText field={data.guide} />
        </div>

        {/* Comparisons Section */}
        {data.comparisons && data.comparisons.length > 0 && (
          <section className={styles.comparisonsSection}>
            <h2 className={styles.sectionTitle}>Our Top Picks Compared</h2>
            {data.comparisons.map((item, index) => {
              const isThreeCard = item.title3 && item.title3;
              return (
                <div key={index} className={`${styles.comparisonBlock} ${isThreeCard ? styles.threeCard : styles.twoCard}`}>
                  {/* Card 1 */}
                  <div className={styles.comparisonCard}>
                    {item.rank1 && <div className={styles.rankBadge}>{item.rank1}</div>}
                    <div className={styles.cardImageWrapper}>
                        <PrismicNextImage field={item.image1} className={styles.cardImage} alt={item.image1.alt || ""} />
                    </div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{item.title1}</h3>
                        <PrismicNextLink field={item.name1} className={styles.productNameLink}>
                            <h4>{item.name1.text}</h4>
                        </PrismicNextLink>
                        <div className={styles.cardParagraph}>
                            {/*<PrismicRichText field={item.paragraph1} />*/}
                            {item.paragraph1}
                        </div>
                        <div className={styles.cardLinks}>
                            {item.link1.map((linkItem, linkIndex) => (
                                <ComparisonLink key={linkIndex} link={linkItem.url} text={linkItem.text} prisLink={linkItem}/>
                            ))}
                        </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className={styles.comparisonCard}>
                    {item.rank2 && <div className={styles.rankBadge}>{item.rank2}</div>}
                    <div className={styles.cardImageWrapper}>
                        <PrismicNextImage field={item.image2} className={styles.cardImage} alt={item.image2.alt || ""} />
                    </div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{item.title2}</h3>
                        <PrismicNextLink field={item.name2} className={styles.productNameLink}>
                            <h4>{item.name2.text}</h4>
                        </PrismicNextLink>
                        <div className={styles.cardParagraph}>
                            {/*<PrismicRichText field={item.paragraph2} />*/}
                            {item.paragraph2}
                        </div>
                        <div className={styles.cardLinks}>
                            {item.link2.map((linkItem, linkIndex) => (
                                <ComparisonLink key={linkIndex} link={linkItem.url} text={linkItem.text} prisLink={linkItem}/>
                            ))}
                        </div>
                    </div>
                  </div>

                  {/* Card 3 (Conditional) */}
                  {isThreeCard && (
                    <div className={styles.comparisonCard}>
                        {item.rank3 && <div className={styles.rankBadge}>{item.rank3}</div>}
                        <div className={styles.cardImageWrapper}>
                            <PrismicNextImage field={item.image3} className={styles.cardImage} alt={item.image3.alt || ""} />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{item.title3}</h3>
                            <PrismicNextLink field={item.name3} className={styles.productNameLink}>
                                <h4>{item.name3.text}</h4>
                            </PrismicNextLink>
                            <div className={styles.cardParagraph}>
                                {/*<PrismicRichText field={item.paragraph3} />*/}
                                {item.paragraph3}
                            </div>
                            <div className={styles.cardLinks}>
                                {item.link3.map((linkItem, linkIndex) => (
                                    <ComparisonLink key={linkIndex} link={linkItem.url} text={linkItem.text} prisLink={linkItem}/>
                                ))}
                            </div>
                        </div>
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {/* End of Guide Content */}
        {data.endguide && asText(data.endguide) && (
             <div className={styles.articleBody}>
                <PrismicRichText field={data.endguide} />
             </div>
        )}

        {/* Final Links Section */}
        {data.links && data.links.length > 0 && (
            <div className={styles.finalLinksSection}>
                <h3 className={styles.sectionTitle}>Further Reading & Sources</h3>
                <ul className={styles.finalLinksList}>
                    {data.links.map((linkItem, index) => (
                        <li key={index}>
                            <PrismicNextLink field={linkItem} className={styles.comparisonButton}>
                                {linkItem.text || linkItem.url}
                                <FiExternalLink />
                            </PrismicNextLink>
                        </li>
                    ))}
                </ul>
            </div>
        )}

        {/* Tags Section 
        {page.tags && page.tags.length > 0 && (
            <div className={styles.tagsSection}>
                <h4 className={styles.tagsTitle}><FiTag /> Tags:</h4>
                <div className={styles.tagsList}>
                {page.tags.map(tag => (
                    <a key={tag} href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`} className={styles.tagLink}>
                    {tag}
                    </a>
                ))}
                </div>
            </div>
        )}*/}

      </div>
    </article>
  );
}


export async function generateMetadata({ params }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("guide", uid).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("guide");

  return pages.map((page) => ({ uid: page.uid }));
}

